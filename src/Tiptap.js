import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const Tiptap = () => {
  const [editorContent, setEditorContent] = useState('');
  const [editorContentJson, setEditorContentJson] = useState({});
  //const [editorContentText, setEditorContentText] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        heading: {
          levels: [2, 3],
        },
        strike: false,
      }),
    ],
    content: '<p>Hello World!</p>',
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
      setEditorContentJson(editor.getJSON());
      // setEditorContentText(editor.getText());
    },
    autofocus: false,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      {/* <div className="outputHTML">{editorContentText}</div> */}
      <div
        dangerouslySetInnerHTML={{ __html: editorContent }}
        className="outputHTML"
      ></div>
      <br />
      <div className="outputJSON">{JSON.stringify(editorContentJson)}</div>
    </div>
  );
};

export default Tiptap;
