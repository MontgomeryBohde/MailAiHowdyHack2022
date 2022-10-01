import logo from './logo.svg';
import './App.css';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 6,
});

function App() {
  return (
    <div className="app name">
      
    </div>
  );
}

export default App;
