import  "../style/Table.css"

import {useNavigate} from "react-router-dom"
import { useState } from "react"
import TableBodyRow from "./TableBodyRow"
function Table({data,setParam}){
    
    
    const navigate = useNavigate()

    return(
        <div>
        <table id="coin-table">
            <thead id="thead-fix">
                <tr>
                    <th>#</th>
                    <th onClick={()=>{setParam("name")}} >Name</th>
                    <th>Price</th>
                    <th>24h %</th>
                    <th>Market Cap</th>
                    <th>Volume(24h)</th>
                    <th>Circulating Supply</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item=>{
                         return (
                        
                                <TableBodyRow key={item.id} item={item}  />
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
export default Table

// ath: 5128383
// ath_change_percentage: -42.62617
// ath_date: "2021-11-10T14:24:11.849Z"
// atl: 3993.42
// atl_change_percentage: 73579.96082
// atl_date: "2013-07-05T00:00:00.000Z"
// circulating_supply: 18976606
// current_price: 2946459
// fully_diluted_valuation: 61789345291990
// high_24h: 3005794
// id: "bitcoin"
// image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2022-03-07T11:25:26.863Z"
// low_24h: 2898232
// market_cap: 55835812409717
// market_cap_change_24h: 300367469227
// market_cap_change_percentage_24h: 0.54086
// market_cap_rank: 1
// max_supply: 21000000
// name: "Bitcoin"
// price_change_24h: 23030
// price_change_percentage_24h: 0.78776
// roi: null
// symbol: "btc"
// total_supply: 21000000
// total_volume: 1412896471062