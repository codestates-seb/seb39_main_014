import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CkEditor() {
  const [content, setContent] = useState("");
  return (
    <EditorForm>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent({
            ...content,
            body: data,
          });
        }}
      />
    </EditorForm>
  );
}

const EditorForm = styled.div`
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 200px;
    min-width: 100%;
  }
`;

export default CkEditor;
