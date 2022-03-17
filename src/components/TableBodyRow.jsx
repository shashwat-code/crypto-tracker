import HistoricDataChart from "./HistoricDataChart";
import { numberWithCommas } from "../config/commonFunction";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TableCell,
  TableRow,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
function TableBodyRow({ item }) {
  const changeColor = (num) => {
    return num >= 0 ? "green" : "red";
  };
  // console.log(item)
  const navigate = useNavigate();
  const color = changeColor(item.price_change_percentage_24h);
  const currentPriceRAW = numberWithCommas(item.current_price);
  const pricePercentageRAW = item.price_change_percentage_24h.toFixed(2);
  const pricePercentage =
    color === "green" ? "+" + pricePercentageRAW : pricePercentageRAW;

  const circulating = item.circulating_supply.toFixed(2);
  return (
    <TableRow
      sx={{ width: "1px" }}
      // style={{width:"100px"}}
      onClick={() => {
        navigate(`/CoinDetailPage/${item.id}/`);
      }}
    >
      <TableCell id="rank" sx={{width:"2%"}}>{item.market_cap_rank}</TableCell>

      <TableCell
        id="name"
        sx={{ width: "20%" }}
      >
          <Box sx={{display:"flex",alginItems:"center"}} container>
          <Box align={"left"} sx={{width:"20%",display:"flex",justifyContent:"flex-start",alignItems:"center"}}   >
            <img src={item.image} style={{ width: "60%" }} />
          </Box>

          <Box align="left" sx={{width:"50%",display:"flex",justifyContent:"flex-start",alignItems:"center"}}   >
            <Typography sx={{ ml: 1 }} item>
              <strong>{item.name}</strong>
            </Typography>
          </Box>

          <Box align="right" sx={{width:"30%",display:"flex",justifyContent:"flex-start",alignItems:"center"}} >
            <Typography sx={{ml:1 }}>{item.symbol.toUpperCase()}</Typography>
          </Box>
          </Box>

      </TableCell>

      <TableCell align="right" sx={{width:"10%"}} >
        <Typography>${" " + currentPriceRAW}</Typography>
      </TableCell>

      <TableCell  align="right"  sx={{width:"12%"}}>
        <Box sx={{ display: "flex",alignItems:"center", justifyContent:"flex-end" }}>
          <Box sx={{width:"70%",display:"flex",justifyContent:"flex-end"}}>
          <img
            style={{ width: "16%"}}
            src={require(color === "green"
              ? "../Assets/green.png"
              : "../Assets/red.png")}
          ></img>

          </Box>
          <Box sx={{width:"30%"}}>
          <Typography style={{color:color}} sx={{ml:1}} >{pricePercentage}</Typography>
          </Box>
        </Box>
      </TableCell>

      <TableCell  align="right" sx={{width:"12%"}} >
        <Typography>
          {numberWithCommas(item.market_cap).toString().slice(0, -6)} M
        </Typography>
      </TableCell>
      <TableCell  align="right" x={{width:"20%"}}>
        <Typography>{numberWithCommas(item.total_volume)}</Typography>
      </TableCell>
      <TableCell  align="right" x={{width:"10%"}}>
        <Typography>{numberWithCommas(circulating)}</Typography>
      </TableCell>
      <TableCell id="chart" sx={{ width:"12%",p:0}}>
        <HistoricDataChart id={item.id} color={color}  />
      </TableCell>
    </TableRow>
  );
}
export default TableBodyRow;

/*
1. assignment were good and had variety of questions.
2. If there would be doubt solving session that would be great.
3. Instructor had good knowledge of DSA and has in depth knowledge of topics.
4. If there were quizzes that would also be a plus point.
*/
