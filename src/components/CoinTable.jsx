import { useEffect } from "react"
import {useState} from "react"
import { CoinList } from "../config/api"
import SearchBtn from "./SearchBtn"
import Table from "./Table"
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
        <div id="container">coin table
            <SearchBtn  setInputText={setInputText} />
            {
                filteredData.length!==0?<Table setParam={setParam} data={filteredData}/>:<Table setParam={setParam} data={coins}/>
            }
            
        </div>
    )
}
export default CoinTable