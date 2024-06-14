import React , {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
        
        
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


  return (
    <>
        <div className="mb-3 container " style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Enter Your Text</h1>
            <div >
            <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#212529':'white' , color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'info'} my-2 mx-2 `} style={{color: props.mode==='dark'?'black':'white'}} onClick={handleUpClick}>To Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'info'}  my-2 mx-2`} style={{color: props.mode==='dark'?'black':'white'}} onClick={handleLoClick}>To Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'info'}  my-2 mx-2`} style={{color: props.mode==='dark'?'black':'white'}} onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'info'}  my-2 mx-2`} style={{color: props.mode==='dark'?'black':'white'}} onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0}  className={`btn btn-${props.mode==='dark'?'primary':'info'}  my-2 mx-2`} style={{color: props.mode==='dark'?'black':'white'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
            <p>{0.48 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Seconds read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

            
        </div>

    </>
  )
}
