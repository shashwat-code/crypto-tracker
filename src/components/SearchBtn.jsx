import { useState } from "react";
import {TextField} from "@mui/material"
function SearchBtn({setInputText}){
    const [text,setText]=useState("")
    const handleFunction=(e)=>{
        setText(e.target.value)
        setInputText(e.target.value)
      }
    return(
             <TextField id="demo-helper-text-misaligned-no-helper" label="Search Coin"
             value={text}
             color={"info"}
             onChange={(e)=>{handleFunction(e)}}
             sx={{width:"40%",mb:3}}
             />

    )
}
export default SearchBtn;