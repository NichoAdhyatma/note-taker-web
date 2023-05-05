import Image from "next/image";
import AppLogo from "../assets/app-logo.png";

export default function Navbar() {
  return (
    <nav className={`shadow-md bg-white text-white px-4 py-2 md:py-4 flex gap-4 items-center`}>
      <Image src={AppLogo} alt={"App-Logo"} width={40} height={40} />
      <h2 className={"text-xl text-violet-500 font-bold"}>
        Note Taker
      </h2>
    </nav>
  );
}
