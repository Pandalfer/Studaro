export default function PrimaryActionButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={
        "inline-block w-fit px-5 py-3 rounded bg-primary border border-primary text-primary sm:text-lg max-w-md mx-auto lg:mx-0 cursor-pointer transition-colors duration-300 " +
        className
      }
    >
      {text}
    </button>
  );
}
