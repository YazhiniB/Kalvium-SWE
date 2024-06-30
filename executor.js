const { exec } = require('child_process');

const executeCode = (language, script) => {
    switch (language) {
        case 'nodejs':
            return executeNodeJS(script);
        case 'python':
            return executePython(script);
        case 'java':
            return executeJava(script);
        case 'cpp':
            return executeCpp(script);
        case 'c':
            return executeC(script);
        case 'ruby':
            return executeRuby(script);
        case 'go':
            return executeGo(script); // Implement Go execution
        default:
            throw new Error(`Unsupported language: ${language}`);
    }
};

const executeGo = (script) => {
    return new Promise((resolve, reject) => {
        exec(`go run ${script}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    output: stdout,
                    error: stderr
                });
            }
        });
    });
};

module.exports = {
    executeCode
};
