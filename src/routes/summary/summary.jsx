import "./summary.css"

export default function Summary() {
    return (
        <>
            <div className="main">
                <div className="centertxt">
                    <a href="/"><h3 className="title">mail.AI</h3></a>  
                    <input className="responseButton" type="submit" value="Create Summary" onclick="myFunction()"/>
                    <h4><span className="text_2">Input a text you would like to generate a summary for</span></h4>
                </div>                                         
                <textArea className="inputME" type="text" id="fname" name="fname"> </textArea>
                <output className="outputME" id="outputMeee"></output>
                <textArea className="outputME" id="outputME"> </textArea> 
            </div>
        </>
    );
}