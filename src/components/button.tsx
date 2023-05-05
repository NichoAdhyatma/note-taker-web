export default function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  return (
    <button
      className={
        type === "primary"
          ? `bg-gradient-to-r from-indigo-500 to-violet-500 p-4 text-white rounded-md hover:cursor-pointer font-semibold uppercase hover:brightness-110 hover:scale-[0.97] active:brightness-125 transition-all text-sm`
          : `p-4 border-2 text-violet-600 font-semibold border-violet-500 rounded-md cursor-pointer hover:scale-[0.97] transition-all uppercase text-sm`
      }
    >
      {children}
    </button>
  );
}
