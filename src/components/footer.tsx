import Image from "next/image";
import AppLogo from "../assets/app-logo.png";

export default function Footer() {
  return (
    <footer className="text-md font-semibold flex gap-4 justify-center items-center p-4 bg-white drop-shadow-md sticky bottom-0 z-10">
      <Image src={AppLogo} alt={"app-logo"} width={30} height={30} />© 2023 Note
      Taker.
    </footer>
  );
}
