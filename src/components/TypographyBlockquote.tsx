export function TypographyBlockquote() {
  return (
    <div className="flex justify-center  items-center w-full px-4">
      <div className="w-full  sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-4xl">
        <div className="relative rounded-xl">
          <blockquote className="text-zinc-400 border-l-2 pl-6 italic">
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
