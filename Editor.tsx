"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";

import "@blocknote/react/style.css";

const Editor = () => {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        content: "Hello world",
      },
    ],
  });

  return <BlockNoteView editor={editor} data-blocknote-theme />;
};

export default Editor;
