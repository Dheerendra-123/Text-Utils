import React,{useState} from "react";

const TextForm = (props) => {

  const [text,setText]=useState('');

  const onhandleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to Upper Case","Success");
  }
  const onhandleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Coverted to Lower Case","Success");
  }
  const onhandleClearClick=()=>{
    setText('');
    props.showAlert("Text Cleard","Success");
  }
  const onhandleChnage=(event)=>{
    setText(event.target.value);
  }
  const onhandleRemovePuncClick=()=>{
    let newtext=text.replace(/[.,;:!\-[\](){}]/g, ' ');
    setText(newtext);
    props.showAlert("Punctuations are removed","Success");
  }

  const onExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces are removed","Success");
  }

  const onCopy=()=>{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied to Clipboard","Success");
    
  }
  return (
    <>
    <div className="container my-5" >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1 style={{color:props.mode==='dark'?'white':'black'}} >{props.title}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={onhandleChnage}
          style={{backgroundColor:props.mode==='dark'?'#043443':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onhandleUpClick}>Convert to Uppercase</button>
      <button  className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onhandleLoClick}>Convert to Lowercase</button>
      <button  className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onhandleClearClick}>Clear Text</button>
      <button  className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onhandleRemovePuncClick}>Remove Punctuation</button>
      <button  className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onCopy}>Copy Text</button>
      <button  className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={onExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>Text Summary</h1>
      <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{text.split(/[.!?]+/).length-1} sentences</p>
      <p>{0.008*text.length} minute to read</p>
      <p>{text.match(/\s+/g)?.length || 0} white spaces</p>
      {/* The || 0 expression is used to return 0 if the match() result is null or undefined */}
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  );
};

export default TextForm;
