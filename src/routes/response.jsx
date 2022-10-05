import "./response.css";

export default function Response() {
    return (
        <>
            <div className="main">
                <div id="centertxt">
                    <a href="/"><h3 className="title">mail.AI</h3></a>  
                </div>                                         
                <h4><span className="text_2">Input a text you would like to generate a response to</span></h4>
                <textArea className="inputME" type="text" id="fname" name="fname"> </textArea>
                <input className="responseButton" type="submit" value="Create Response" onclick="myFunction()"/>
                <output className="outputME" id="outputMeee"></output>
                <textArea className="outputME" id="outputME"> </textArea> 
            </div>
        </>
    );
}