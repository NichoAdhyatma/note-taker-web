"use client";

import MainLayout from "@/components/main-layout";
import { useParams } from "next/navigation";

import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FC, ReactElement, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import Image404 from "../../../assets/404.jpg";
import Link from "next/link";
import Button from "@/components/button";

const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

const ShowNote: FC = (): ReactElement => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(0);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://staging-api-productivity2023.agileteknik.com/api/v1/share-note/${params.id}`
        );

        if (res.status == 200) {
          var deltaOps = JSON.parse(res.data.data.content);

          var converter = new QuillDeltaToHtmlConverter(deltaOps);

          var html = converter.convert();

          setTitle(res.data.data.title);

          setValue(html);
        }
      } catch (e) {
        setStatus(404);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      {status === 404 ? (
        <>
        <Link href="/"><Button type={"primary"}>Kembali</Button></Link>
          <Image src={Image404} alt={"404"} priority={true} />
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold">{title}</h1>
          <ReactQuill
            theme="snow"
            value={value}
            readOnly={true}
            placeholder="Tulis Note mu disini"
          />
        </>
      )}
    </MainLayout>
  );
};

export default ShowNote;
