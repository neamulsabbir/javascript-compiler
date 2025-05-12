export const runCode = (code, setOutput) => {
	try {
		const logs = [];
		const originalConsole = { ...console };

		console.log = (...args) => logs.push({ type: "log", message: args.join(" ") });
		console.error = (...args) => logs.push({ type: "error", message: args.join(" ") });
		console.warn = (...args) => logs.push({ type: "warn", message: args.join(" ") });

		const startTime = performance.now();
		eval(code);
		const endTime = performance.now();

		Object.assign(console, originalConsole);

		logs.push({
			type: "log",
			message: `Execution time: ${(endTime - startTime).toFixed(2)} ms`,
		});

		setOutput(logs.map((log) => `[${log.type}] ${log.message}`).join("\n"));
	} catch (err) {
		setOutput(`[error] ${err.toString()}`);
	}
};
