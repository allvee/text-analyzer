# Text Analyzer

Text Analyzer is a Node.js application that analyzes text files and provides various statistics such as character count, word count, sentence count, paragraph count, and the longest words in paragraphs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/text-analyzer.git
   ```
2. Navigate to the project directory:

```bash
cd text-analyzer
```
2. Install dependencies:

```bash
npm install
```

## Usage
1. Place the text files you want to analyze in the input directory.

2. Run the application:

```bash
npm start
```
3. Access the API endpoints to retrieve analysis results:

Word count: GET /api/text/word-count
Character count: GET /api/text/character-count
Sentence count: GET /api/text/sentence-count
Paragraph count: GET /api/text/paragraph-count
Longest words in paragraphs: GET /api/text/longest-words-in-paragraphs
## Development
### Running Tests
Run unit tests:

```bash
npm test
```
Run tests with open handle detection:

```bash
npm test -- --detectOpenHandles
```

Project Structure
src/: Contains the application source code.
input/: Directory for input text files to be analyzed.
tests/: Contains unit and integration tests.

### Dependencies
Express.js: For building the RESTful API.
Jest: Testing framework.
Supertest: HTTP assertions for integration testing.
Babel: For transpiling ES6 code.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
