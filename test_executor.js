// Example: Adding test cases for Go language execution

const { executeCode } = require('../path/to/executor'); // Adjust the path

describe('Go Code Execution', () => {
    it('should execute Go code and return the correct output', (done) => {
        const goCode = 'package main; import "fmt"; func main() { fmt.Println("Hello, World!") }';
        
        executeCode('go', goCode, (result) => {
            expect(result.error).toBe(null);
            expect(result.output).toBe('Hello, World!\n');
            done();
        });
    });

    it('should handle Go code with syntax errors', (done) => {
        const goCode = 'package main; import "fmt"; func main() { fmt.Println("Hello, World!" }';
        
        executeCode('go', goCode, (result) => {
            expect(result.error).not.toBe(null);
            expect(result.output).toBe(null);
            done();
        });
    });
});
