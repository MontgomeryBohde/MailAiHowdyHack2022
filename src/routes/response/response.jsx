import "./response.css";
import { useState } from 'react';

export default function Response() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

   async function myFunction(){
    const OpenAI = require('openai-api');
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;    const openai = new OpenAI(OPENAI_API_KEY);
    const prompt = document.getElementById("fname").value;
    console.log(OPENAI_API_KEY)
    const gptResponse = await openai.complete({
      engine: 'text-davinci-003',
      prompt: prompt,
      maxTokens: 75,
      temperature: 0.5,
      frequencyPenalty: 0.5,
      bestOf: 1,
      stream: false,
      n: 1,
  });
  let output = document.getElementById("outputME");
  output.innerHTML = gptResponse.data.choices[0].text;
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