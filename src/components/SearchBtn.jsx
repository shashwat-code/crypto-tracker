import { useState } from "react";

function SearchBtn({setInputText}){
    const [text,setText]=useState("")
    const handleFunction=(e)=>{
        setText(e.target.value)
        setInputText(e.target.value)
      }
    return(
        <div className="btn-box">
            <input 
            value={text} 
            onChange={(e)=>handleFunction(e)}
            className="txt" 
            placeholder="Search crypto" />
                <img onClick={()=>{setInputText(text)}} id="search-img" src={require("../Assets/searchBtn.png")}></img>
        </div>
    )
}
export default SearchBtn;