import React, { useState } from 'react';



export default function Textarea(props) {
    const onChangeMethod = (event) =>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    
    const upperCase = () =>{
        // console.log("toUpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }

    const lowerCase = () =>{
        // console.log("toUpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");

    }

    const clearText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");

    }
    
    const copyText = ()=>{
        let text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    }
// Don't try to understand it, feel it ! (stackOverFlow sy uthaya hy)
    function WordCount(str) {
        return str.split(' ')
               .filter(function(n) { return n !== '' })
               .length;
   }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" onChange={onChangeMethod} style= {{backgroundColor: props.mode ==="dark"? 'gray' : 'white', color: props.mode === "dark" ? "white" : "black"}} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperCase} >Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={lowerCase} >Convert to Lower Case</button>
            <button className="btn btn-danger mx-1" onClick={clearText} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyText} >Copy to Clipboard</button>

        </div>
        <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
            <h1>Text Summary</h1>
            <p>{WordCount(text)} words and {text.length} characters</p>
            <p>Time required to read: {0.008 * text.split(" ").length} Minutes</p>
        </div>
        </>
    )
}
