import "./creators.css"

export default function Creators() {
    const h1_Style = {
        color: "blue",
        textAlign: "center",
    };
    return (
        <>
            <div className= "main">
                <h2 style={h1_Style}>mail.AI was created at HowdyHack2022 By:</h2>
                <h2 style={{color:"red"}}>Montgomery Bohde, Full Stack God <a href="https://www.linkedin.com/in/montgomery-bohde/" target= "_blank" style={{ textDecoration: 'none' }}>LinkedIn</a>, </h2>
                <h2 style={{color:"green"}}>Aayush Garg, Frontend Engineer <a href="https://www.linkedin.com/in/aayushg1414/" target= "_blank" style={{ textDecoration: 'none' }}>LinkedIn</a>, </h2>
                <h2 style={{color:"orange"}}>Akshay Belhe, UI/UX Specialist <a href="https://www.linkedin.com/in/akshaybelhe/" target= "_blank" style={{ textDecoration: 'none' }}>LinkedIn</a>, </h2>
                <h2 style={{color:"brown"}}>Aditya Nambi (Flu) <a href="https://www.linkedin.com/in/adityanambi/" target= "_blank" style={{ textDecoration: 'none' }}>LinkedIn</a>, </h2>
             </div>
        </>
    );
}