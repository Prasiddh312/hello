
import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)    
       props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick =()=>{
        // console.log("Lowercase was clicked");
         let newText=text.toLowerCase();
         setText(newText)   
         props.showAlert("Converted to Lowercase!","success");            
     }
     const handleClearClick =()=>{
        // console.log("Clear was clicked");
         let newText="";
         setText(newText)
         props.showAlert("Text Cleared!","success");               
     }

    const handleOnChange =(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');


  return (
    <>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  
  <div className="mb-3">
     
    <textarea
      className="form-control"
      value={text} 
      onChange={handleOnChange}
      style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
      id="myBox"
      rows={8}
     // defaultValue={""}
    />
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

  <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{(text.split(" ").length )} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length}Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to Preview "}</p>
  </div>
  </div>
</>

  )
}
