import React, {useState} from 'react'

export default function TextForm(props) {
     
     const handleOnClick = () => {
        let newText = text.toUpperCase();
         setText(newText);
         
         props.showAlert("Successfully converted to Uppercase!", "success")
     }
     const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Successfully Deleted!", "success")
    }
     const handleOnChange = (event) => {
        setText(event.target.value)
     }
     const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to Lowercase!", "success")
    }
   

    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
   <h1 id="chead">{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnClick}>Covert to Uppercase</button>  
<button type="button" className="btn btn-primary mx-2" onClick={handleLowerCase}>Covert to Lowercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
</div>
<div className="container my-3">
    <h1 id="csum">Your Text Summary: </h1>
    <p id="ccount">{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
    <h5 id="cread" className='my-4'>{0.008 * text.split(" ").length} Minutes Read   <b>{text.length>0?"":"Note: Reading time will take affect only after when you hit space"}</b></h5>
    <h2 id="cover">Text Overview: </h2>
    <p id="cview">{text.length>0?text:'Please Enter some Text to Preview it here'}</p>
</div>
</>
  
    );
}