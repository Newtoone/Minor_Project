import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { htmlLanguage } from "@codemirror/lang-html";
import { cssLanguage } from "@codemirror/lang-css";
import { javascriptLanguage } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const Editor = ({ value, onChange, language }) => {
  const editorRef = useRef();

  useEffect(() => {
    const languageExtension =
      language === "HTML"
        ? htmlLanguage
        : language === "CSS"
        ? cssLanguage
        : javascriptLanguage;

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        languageExtension,
        autocompletion(), // Enable autocomplete
        oneDark, // Dark theme for the editor
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const newValue = update.state.doc.toString();
            onChange(newValue);
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [language, value, onChange]);

  return <div ref={editorRef} className="w-full h-full bg-black" />;
};

export default Editor;