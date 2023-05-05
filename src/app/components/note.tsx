import Button from "./button";
import Image from "next/image";
import AppImage from "../assets/app-image.png"

export default function Note() {
  return (
    <div
      className={
        "p-4 flex flex-col items-center gap-4 overflow-y-scroll max-h-screen text-center mt-4"
      }
    >
      <h1 className="text-2xl font-bold">Note Taker</h1>
      <Image src={AppImage} alt={"app-image"} className="my-4"/>
      <p className="text-md">
        Download Aplikasi <span className="text-violet-600 font-semibold">Note Taker</span> dan bagikan Catatan mu di sini !
      </p>
      <Button href="https://play.google.com/store/apps/details?id=com.agilepdbl.note_taker">Donwload Sekarang</Button>
      
    </div>
  );
}
