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
    useEffect(()=>{fetchList()},[])
    useEffect(()=>{filterData()},[inputText])
    const fetchList = async()=>{
        const data = await fetch(CoinList('INR')).then(res=>res.json())
        setCoins(data)
    }
    const filterData = ()=>{
        const filteredData = coins.filter((coin)=>{
            console.log("printed first: ",coin.name)
            return coin.name.toLowerCase().includes(inputText) || coin.symbol.toLowerCase().includes(inputText)
        })
        setFilteredData(filteredData)
        console.log(filteredData)
    }
    console.log(inputText)
    return(
        <div id="container">coin table
            <SearchBtn  setInputText={setInputText} />
            <Table data={coins}/>
        </div>
    )
}
export default CoinTable