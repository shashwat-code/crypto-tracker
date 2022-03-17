import { useEffect } from "react"
import {useState} from "react"
import { CoinList } from "../config/api"
import {Box} from "@mui/material"
import SearchBtn from "./SearchBtn"
import ListOfCoins from "./ListOfCoins"
import "../style/coinTable.css"
function CoinTable(){


    const [filteredData,setFilteredData]=useState("")
    const [coins,setCoins]=useState([])
    const [inputText,setInputText]=useState("")
    const[param,setParam]=useState("rank")
    const compare = (num1,num2)=>{
        if(num1.param>num2.param){
            return -1
        }
        if(num1.param<num2.param){
            return 1
        }
        return 0
    }

    useEffect(()=>{fetchList()},[])
    useEffect(()=>{filterData()},[inputText])
    useEffect(()=>{},[param])
    const sortList=()=>{
        setCoins(coins.sort(compare))
    }
    const fetchList = async()=>{
        const data = await fetch(CoinList('INR')).then(res=>res.json())
        setCoins(data)
    }
    const filterData = ()=>{
        const filteredData = coins.filter((coin)=>{
            return coin.name.toLowerCase().includes(inputText) || coin.symbol.toLowerCase().includes(inputText)
        })
        setFilteredData(filteredData)
        console.log(filteredData)
    }

    

    console.log(inputText)
    return(
        <Box id="container" sx={{mt:7,mb:2}} >
            <SearchBtn  setInputText={setInputText} sx={{mb:2,mt:2}} />
            {
                filteredData.length!==0?<ListOfCoins setParam={setParam} data={filteredData}/>:<ListOfCoins setParam={setParam} data={coins}/>
            }
            
        </Box>
    )
}
export default CoinTable