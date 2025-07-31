import Button from "./ui/Button";

export default function ErrorPage() {
  return (
    <div className="bg-zinc-800 min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col items-center space-y-6">
        <img
          src="/images/404.png" // gunakan path dari folder public
          alt="404 Not Found"
          className="max-w-full w-[300px] sm:w-[400px] md:w-[500px] h-auto"
        />
        <Button />
      </div>
    </div>
  );
}
