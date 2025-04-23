import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState('');
  
  const onhandleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case", "Success");
  }
  
  const onhandleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case", "Success");
  }
  
  const onhandleClearClick = () => {
    setText('');
    props.showAlert("Text Cleared", "Success");
  }
  
  const onhandleChnage = (event) => {
    setText(event.target.value);
  }
  
  const onhandleRemovePuncClick = () => {
    let newtext = text.replace(/[.,;:!\-[\](){}]/g, ' ');
    setText(newtext);
    props.showAlert("Punctuations are removed", "Success");
  }
  
  const onExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces are removed", "Success");
  }
  
  const onCopy = () => {
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied to Clipboard", "Success");
  }
  
  // Word count function
  const getWordCount = () => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }
  
  // Sentence count function
  const getSentenceCount = () => {
    return text.split(/[.!?]+/).length - 1;
  }
  
  // Space count function
  const getSpaceCount = () => {
    return text.match(/\s+/g)?.length || 0;
  }
  
  // Time to read calculation
  const getReadTime = () => {
    const words = getWordCount();
    const readTimeMin = Math.ceil(words / 225); // Average reading speed
    return readTimeMin <= 1 ? "Less than a minute" : `${readTimeMin} minutes`;
  }
  
  const statsBoxStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    marginRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  };
  
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.title}</h1>
          </label>
          <div style={{position: 'relative'}}>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={onhandleChnage}
              style={{
                backgroundColor: props.mode === 'dark' ? '#043443' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                padding: '15px'
              }}
              placeholder="Enter your text here..."
            ></textarea>
            {text.length > 0 && (
              <small style={{
                position: 'absolute',
                bottom: '8px',
                right: '10px',
                color: props.mode === 'dark' ? '#aaa' : '#666'
              }}>
                {getWordCount()} words
              </small>
            )}
          </div>
        </div>
        
        <div className="d-flex flex-wrap mb-4">
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onhandleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onhandleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onhandleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onhandleRemovePuncClick}>Remove Punctuation</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={onExtraSpaces}>Remove Extra Space</button>
        </div>
      </div>
      
      <div className="container my-4" style={{
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#0c3c4a' : '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 className="mb-4" style={{fontSize: '1.75rem'}}>Text Summary</h1>
        
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
              <div style={{
                ...statsBoxStyle,
                backgroundColor: props.mode === 'dark' ? '#185d8c' : '#cfe2ff',
                color: props.mode === 'dark' ? 'white' : '#0a58ca'
              }}>
                {getWordCount()}
              </div>
              <span>Words</span>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{
                ...statsBoxStyle,
                backgroundColor: props.mode === 'dark' ? '#5e467c' : '#e8dbff',
                color: props.mode === 'dark' ? 'white' : '#6f42c1'
              }}>
                {getSentenceCount()}
              </div>
              <span>Sentences</span>
            </div>
          </div>
          
          <div className="col-md-6 mb-3">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
              <div style={{
                ...statsBoxStyle,
                backgroundColor: props.mode === 'dark' ? '#326546' : '#d1e7dd',
                color: props.mode === 'dark' ? 'white' : '#146c43'
              }}>
                {text.length}
              </div>
              <span>Characters</span>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{
                ...statsBoxStyle,
                backgroundColor: props.mode === 'dark' ? '#7c6514' : '#fff3cd',
                color: props.mode === 'dark' ? 'white' : '#997404'
              }}>
                {getSpaceCount()}
              </div>
              <span>Spaces</span>
            </div>
          </div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <svg style={{width: '18px', height: '18px', marginRight: '8px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Reading time: {getReadTime()}</span>
        </div>
        
        <div>
          <h4 className="mb-2">Preview</h4>
          <div style={{
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid',
            borderColor: props.mode === 'dark' ? '#2d5662' : '#dee2e6',
            backgroundColor: props.mode === 'dark' ? '#022533' : '#ffffff',
            minHeight: '100px'
          }}>
            {text.length > 0 ? text : "Nothing to Preview."}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;