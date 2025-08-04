export default function NavigationTitle({ title, className }: { title: string, className?: string }) {
  return (
    <div className={"flex flex-col items-start w-fit group cursor-pointer " + className}>
      <h2 className="text-main-dark">{title}</h2>
      <span
        className="
    block h-[2px] mt-1 w-full
    bg-transparent translate-y-0
    transition-all duration-300 ease-in-out
    group-hover:-translate-y-[5px] group-hover:bg-underline
  "
      />
    </div>
  );
}
