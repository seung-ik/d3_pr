import React, { createRef, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';
import uml from '@toast-ui/editor-plugin-uml';

const TuiEditor = () => {
  const editorRef = useRef(null);
  const onChangeEditor = () => {
    if (editorRef.current) {
      console.log(editorRef.current);
    }
  };
  return (
    <Editor
      previewStyle="vertical"
      ref={editorRef}
      onChange={onChangeEditor}
      plugins={[uml]}
      toolbarItems={[
        ['10', '12', '14', '16'],
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol', 'task'],
        ['table', 'link'],
        ['image'], // <-- 이미지 추가 툴바
        // ['code'],
        // ['scrollSync'],
      ]}
    />
  );
  // return <Viewer initialValue="test" />;
};

export default TuiEditor;
