export default function Button({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a href={href} target="blank" className="bg-gradient-to-r from-indigo-500 to-violet-500 p-4 text-white rounded-md hover:cursor-pointer font-semibold uppercase hover:brightness-110 hover:scale-[0.95] active:brightness-125 transition-all">
      {children}
    </a>
  );
}
