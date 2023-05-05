export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "max-w-2xl bg-slate-100 mx-auto parent min-h-screen max-h-screen"
      }
    >
      {children}
    </div>
  );
}
