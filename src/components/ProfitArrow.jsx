
import {ArrowDropDown,ArrowDropUp} from "@mui/icons-material"
import { Grid, Icon, Typography } from "@mui/material"
import {red,green} from "@mui/material/colors"
import {Box} from "@mui/material"
import { useEffect } from "react"
import {useState} from 'react'


// value : percentage change 
// time: 
function ProfitArrow({value,time}){
    const [arrow,setArrow]=useState("")
    const [percentage,setPercentage]=useState(0)
    console.log("entered this but not responding")
    const change=()=>{
        if(value>=0){
            console.log("entered this but not responding")
            setPercentage("+ "+value+"%")
            setArrow(<ArrowDropUp sx={{color:green[500],width:"23%",height:"23%"}} />)
        }else{
            setPercentage(value+"%")
            setArrow(<ArrowDropDown sx={{color:red[500],width:"23%",height:"23%"}} />)
        }
    }
    useEffect(()=>{change()},[])
    return(
        <Grid sx={{display:"flex",alignItems:"center"}} >
            <Typography sx={{width:"50%",ml:2}} variant="h6"  >{time}</Typography>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-end"}} >
            <Typography variant="h6" align="right">{percentage}</Typography>
            {arrow}
            </Box>
            
            
        </Grid>
    )
}

export default ProfitArrow;