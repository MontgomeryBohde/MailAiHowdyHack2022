import "./response.css";
import { useState } from 'react';

export default function Response() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const myFunction = () => {
    const OpenAI = require('openai-api');
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const openai = new OpenAI(OPENAI_API_KEY);
    const prompt = inputValue;
    const gptResponse = openai.complete({
      engine: 'text-davinci-003',
      prompt: prompt,
      maxTokens: 75,
      temperature: 0.5,
      frequencyPenalty: 0.5,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ['\n', "testing"]
  });
  console.log(gptResponse.data);
  }

  return (
    <>
      <div className="main">
        <div className="centertxt">
          <a href="/"><h3 className="title">mail.AI</h3></a>
          <input className="responseButton" type="submit" value="Create Response" onClick={myFunction} />
          <h4><span className="text_2">Input a text you would like to generate a response to</span></h4>
        </div>
        <textArea className="inputME" type="text" id="fname" name="fname" value={inputValue} onChange={handleInputChange}> </textArea>
        <output className="outputME" id="outputMeee"></output>
        <textArea className="outputME" id="outputME"> </textArea> 
      </div>
    </>
  );
}