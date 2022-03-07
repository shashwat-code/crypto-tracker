import { useEffect } from "react"
import {useState} from "react"
import { CoinList } from "../config/api"
import SearchBtn from "./SearchBtn"
import Table from "./Table"
function CoinTable(){
    const [searchinput,setSearchInput]=useState("")
    const [coins,setCoins]=useState([])
    const [inputText,setInputText]=useState("")
    useEffect(()=>{fetchList()},[])
    const fetchList = async()=>{
        const data = await fetch(CoinList('INR')).then(res=>res.json())
        console.log(data)
        setCoins(data)
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