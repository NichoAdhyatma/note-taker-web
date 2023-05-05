import Navbar from "./navbar";
import Footer from "./footer";

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
      <Navbar />
      <div
        className={
          "p-4 flex flex-col gap-4 overflow-y-scroll max-h-screen text-center mt-4"
        }
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
