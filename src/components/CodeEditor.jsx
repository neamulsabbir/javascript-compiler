import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode, setErrors }) {
  return (
    <Editor
    
      language="javascript"
      value={code}
      onChange={(value) => setCode(value || "")}
      theme="vs-dark"
      onValidate={(markers) => {
        setErrors(markers.filter(m => m.severity > 4));
      }}
    />
  );
}
