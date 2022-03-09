import HistoricDataChart from "./HistoricDataChart"
import "../style/TableBodyRow.css"
import {numberWithCommas} from "../config/commonFunction"
import {useNavigate} from "react-router-dom"
function TableBodyRow({item}){
    const changeColor = (num)=>{
        return num>=0?"green":"red"
    }
    const navigate =useNavigate()
    const color = changeColor(item.price_change_percentage_24h)
    const currentPriceRAW = numberWithCommas(item.current_price)
    const pricePercentageRAW = item.price_change_percentage_24h.toFixed(2)
    const pricePercentage = color==="green"?("+"+pricePercentageRAW):(pricePercentageRAW)

    const circulating = item.circulating_supply.toFixed(2)
    return( 
               
        <tr id="new-row" onClick={()=>{navigate(`/coins/${item.id}`)}}>
            <td id="rank">{item.market_cap_rank}</td>

                <td id="name">
                    <div id="name-txt">
                            <img src={item.image} ></img>
                            <label ><strong>{item.name}</strong></label>
                            <label>({item.symbol.toUpperCase()})</label>
                    </div>
                </td>

                <td id="price"><label>${" "+currentPriceRAW}</label></td>
                               
                <td id="change" style={{color:color}}>
                    <div id="price-change">
                        <img src={require(color==="green"?"../Assets/green.png":"../Assets/red.png")}></img><span>{pricePercentage}</span>
                    </div>
                </td>

                <td id="market-cap"><label>{numberWithCommas( item.market_cap).toString().slice(0,-6)} M</label></td>
                <td id="total-volumne"><label>{numberWithCommas(item.total_volume)}</label></td>
                <td id="circulating-supply"><label>{numberWithCommas(circulating)}</label></td>
                <td id="chart" style={{padding:"2px"}}>
                <HistoricDataChart id={item.id} color={color} />
                
            </td>

        </tr>
    )
}
export default TableBodyRow