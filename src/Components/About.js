import React from 'react';

const About = (props) => {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: props.mode === 'dark' ? '1px solid #375571' : '1px solid #dee2e6'
  };

  const creditStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    backgroundColor: props.mode === 'dark' ? 'rgba(36, 74, 104, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    color: props.mode === 'dark' ? 'white' : '#042743',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    zIndex: '1000'
  };

  return (
    <>
      <div className="container my-4 p-3 rounded" style={myStyle}>
        <h2 className="mb-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About TextUtils</h2>
        <p className="lead mb-4" style={{ color: props.mode === 'dark' ? '#e0e0e0' : '#333' }}>
          TextUtils is a powerful text manipulation tool designed to help you work with text efficiently. Whether you're a student, writer, developer, or content creator, TextUtils provides simple yet powerful features to transform your text exactly how you need it.
        </p>
        
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Features & Capabilities
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <ul className="list-unstyled">
                  <li className="mb-2"><strong>Case Conversion:</strong> Easily convert your text to uppercase or lowercase with a single click.</li>
                  <li className="mb-2"><strong>Punctuation Removal:</strong> Clean up your text by removing punctuation marks when needed.</li>
                  <li className="mb-2"><strong>Space Management:</strong> Remove extra spaces to make your text cleaner and more professional.</li>
                  <li className="mb-2"><strong>Text Statistics:</strong> Get instant information about your text including word count, character count, sentence count, and estimated reading time.</li>
                  <li className="mb-2"><strong>Copy to Clipboard:</strong> Quickly copy your processed text to use elsewhere.</li>
                  <li><strong>Text Preview:</strong> See how your text looks after transformations in real-time.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How To Use TextUtils
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <ol>
                  <li className="mb-2">Enter or paste your text in the text area on the home page.</li>
                  <li className="mb-2">Choose any transformation button that matches your needs:
                    <ul className="mt-1">
                      <li>Use "Convert to Uppercase" to make all text CAPITAL.</li>
                      <li>Use "Convert to Lowercase" to make all text lowercase.</li>
                      <li>Use "Remove Punctuation" to strip away punctuation marks.</li>
                      <li>Use "Remove Extra Space" to clean up unnecessary spacing.</li>
                      <li>Use "Copy Text" to copy the current text to your clipboard.</li>
                      <li>Use "Clear Text" to start over with a blank text area.</li>
                    </ul>
                  </li>
                  <li className="mb-2">View the text statistics below to see information about your text.</li>
                  <li>Check the preview section to see how your text looks after transformations.</li>
                </ol>
                <p className="mt-3">You can apply multiple transformations one after another to achieve your desired result!</p>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Why Use TextUtils?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <p>TextUtils offers several advantages over other text processing tools:</p>
                <ul>
                  <li className="mb-2"><strong>Free & Accessible:</strong> TextUtils is completely free to use with no sign-up required.</li>
                  <li className="mb-2"><strong>Privacy-Focused:</strong> Your text never leaves your browser - all processing happens locally.</li>
                  <li className="mb-2"><strong>Lightweight & Fast:</strong> The app loads quickly and operates smoothly even on slower connections.</li>
                  <li className="mb-2"><strong>Dark Mode Support:</strong> Work comfortably in any lighting condition with our customizable interface.</li>
                  <li className="mb-2"><strong>Instant Feedback:</strong> See changes in real-time as you transform your text.</li>
                  <li><strong>Simple & Intuitive:</strong> No complicated menus or options - just the tools you need most.</li>
                </ul>
                <p className="mt-3">Whether you're cleaning up content, preparing text for publication, or analyzing written content, TextUtils streamlines your workflow and saves you valuable time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;