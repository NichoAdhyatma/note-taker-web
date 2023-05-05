import dynamic from "next/dynamic";
import { FC, ReactElement, useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

const QuillEditor: FC = (): ReactElement => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Tulis Note mu disini"
    />
  );
};

export default QuillEditor;
