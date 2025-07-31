import React, { useState } from "react";
import type { MessageData } from "../data/types";

interface InputFormProps {
  onSubmit: (entry: MessageData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<MessageData>({ name: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    onSubmit(form);
    setForm({ name: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-5 space-y-4">
      {/* Input Nama */}
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="block w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      {/* Input Pesan (textarea) */}
      <div>
        <label htmlFor="message" className="sr-only">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="block w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        />
      </div>
      {/* Tombol Submit */}
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
