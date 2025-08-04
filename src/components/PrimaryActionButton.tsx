export default function PrimaryActionButton({ text }: { text: string }) {
  return (
    <button
      className={
        "px-5 py-3 rounded bg-primary border border-primary text-primary cursor-pointer transition-colors duration-300"
      }
    >
      {text}
    </button>
  );
}
