import { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputConsole from "./components/OutputConsole";
import { runCode } from "./utils/runCode";

export default function App() {
  const [code, setCode] = useState(null);
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState([]);

  const handleRun = () => runCode(code, setOutput);
  const clearOutput = () => setOutput("");

  useEffect(() => {
    const savedCode = localStorage.getItem("js-code");
    setCode(savedCode || "// Write your JS code here");
    if (savedCode) setTimeout(handleRun, 300); // auto-run saved code
  }, []);

  useEffect(() => {
    if (code !== null) {
      localStorage.setItem("js-code", code);
    }
  }, [code]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        handleRun();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [code]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative">
        {code !== null && (
          <div className="w-full lg:w-[60vw] h-[calc(100vh-200px)] lg:h-screen">
            <CodeEditor code={code} setCode={setCode} setErrors={setErrors} />
          </div>
        )}

        <div className="absolute right-8 top-0 z-50 space-y-2">
          <button
            onClick={handleRun}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full text-xs md:text-base"
          >
            Run Code
          </button>
        </div>
      </div>

      <OutputConsole output={output} clearOutput={clearOutput} errors={errors} />
    </div>
  );
}
