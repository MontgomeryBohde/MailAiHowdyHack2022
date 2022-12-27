import "./root.css";

export default function Root() {
    return (
      <>
        <div className= "main">
          <h3>mail.AI</h3>
          <h4><span className="text_1">A powerful communications toolset powered by AI magic&nbsp;</span></h4>
          <div className="mainbuttons">
              <a href="summary"><button className="summary">Summary</button></a>
              <a href="extractContacts"><button className="extractContacts">Extract Contacts</button></a>
              <a href="extractDetails"><button className="extractDetails">Extract Details</button></a>
              <a href="response"><button className="response">Response</button></a>
              <a href="creators"><button className="creators">Creators</button></a>
          </div>
        </div>
      </>
    );
  }