import "./summary.css";
import { useState } from 'react';

export default function Summary() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }
  
     async function myFunction(){
      const OpenAI = require('openai-api');
      const OPENAI_API_KEY = "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"
      const openai = new OpenAI(OPENAI_API_KEY);
      const prompt = document.getElementById("fname").value;
      const gptResponse = await openai.complete({
        engine: 'text-davinci-003',
        prompt: 'Summarize the following piece of text:\n\n' + prompt + '\n\n',
        maxTokens: 75,
        temperature: 0.7,
        frequencyPenalty: 0.0,
        presencePenalty: 0.0,
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
                    <input className="responseButton" type="submit" value="Create Summary" onClick={myFunction}/>
                    <h4><span className="text_2">Input a text you would like to generate a summary for</span></h4>
                </div>                                         
                <textArea className="inputME" type="text" id="fname" name="fname" value={inputValue} onChange={handleInputChange}> </textArea>
                <output className="outputME" id="outputMeee"></output>
                <textArea className="outputME" id="outputME"> </textArea> 
            </div>
        </>
    );
}