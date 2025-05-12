export default function OutputConsole({ output, clearOutput, errors }) {
    return (
      <div className="w-full">
        <div className="p-4 bg-black text-green-400 font-mono h-[calc(100vh-0px)] overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-white">Output:</h4>
            <button 
              onClick={clearOutput}
              className="px-2 py-1 bg-red-600 text-white text-xs rounded"
            >
              Clear
            </button>
          </div>
          <pre>{output}</pre>
        </div>
  
        {errors.length > 0 && (
          <div className="text-red-500">
            {errors.map((err, i) => (
              <div key={i}>{err.message}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
  