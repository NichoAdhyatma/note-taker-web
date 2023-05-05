"use client";

import MainLayout from "../../components/main-layout";
import Button from "../../components/button";
import Link from "next/link";
import QuillEditor from "@/components/text-editor";

export default function About() {
  return (
    <MainLayout>
      <div className="flex items-center gap-4 justify-between p-4">
        <Link
          href={"/"}
          className="text-bold text-violet-600 hover:underline text-xl"
        >
          Kembali
        </Link>
        <Link href="https://openinapp.co/p1ocf" target="blank">
          <Button type="primary">Download dan Simpan Note mu</Button>
        </Link>
      </div>
      <div className="p-4">
        <QuillEditor />
      </div>
    </MainLayout>
  );
}
