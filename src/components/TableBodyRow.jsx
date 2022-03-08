import HistoricDataChart from "./HistoricDataChart"
import "../style/TableBodyRow.css"
import {useNavigate} from "react-router-dom"
function TableBodyRow({item}){
    const changeColor = (num)=>{
        return num>=0?"green":"red"
    }
    const navigate =useNavigate()
    const color = changeColor(item.price_change_percentage_24h)
    const val = item.price_change_percentage_24h.toFixed(2)
    const value = color==="green"?("+"+val):(val)
  
    return( 
               
        <tr onClick={()=>{navigate(`/coins/${item.id}`)}}>
            <td id="rank">{item.market_cap_rank}</td>

                <td id="name">
                    <div id="name-txt">
                            <img src={item.image} ></img>
                            <label ><strong>{item.name}</strong></label>
                            <label>({item.symbol.toUpperCase()})</label>
                    </div>
                </td>

                <td id="price"><label>${" "+item.current_price}</label></td>
                               
                <td id="change" style={{color:color}}>
                    <div id="price-change">
                        <img src={require(color==="green"?"../Assets/green.png":"../Assets/red.png")}></img><span>{value}</span>
                    </div>
                </td>
                <td id="market-cap"><label>{item.market_cap}</label></td>
                <td id="total-volumne"><label>{item.total_volume}</label></td>
                <td id="circulating-supply"><label>{item.circulating_supply}</label></td>
                <td id="chart" style={{padding:"2px"}}>
                <HistoricDataChart id={item.id} color={color} />
            </td>

        </tr>
    )
}
export default TableBodyRow