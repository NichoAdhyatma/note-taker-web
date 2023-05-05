import MainLayout from "../components/main-layout";
import Button from "@/components/button";
import Image from "next/image";
import AppImage from "../assets/app-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Note Taker</h1>
      <Image src={AppImage} alt={"app-image"} className="my-4" />
      <p className="text-md">
        Download Aplikasi{" "}
        <span className="text-violet-600 font-semibold">Note Taker</span> dan
        bagikan Catatan mu di sini !
      </p>
      <div className="flex flex-col gap-8 mt-4 items-center">
        <Link
          href="https://play.google.com/store/apps/details?id=com.agilepdbl.note_taker"
          target="blank"
        >
          <Button type="primary">Donwload Sekarang</Button>
        </Link>
        <Link href={"/edit-note"}>
          <Button type="secondary">Coba Tulis Catatan</Button>
        </Link>
      </div>
    </MainLayout>
  );
}
