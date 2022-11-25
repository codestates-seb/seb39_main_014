import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, memo } from "react";
// props 타입정의
type QuillEditorProps = {
  contents: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const ReactQuillEditor = memo(({ contents, setContents }: QuillEditorProps) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );
  return (
    <ReactQuill
      placeholder="글을 작성 해주세요."
      value={contents}
      onChange={setContents}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
});

export default ReactQuillEditor;
