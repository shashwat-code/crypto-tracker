import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Header from "./components/Header";
import CoinDetailPage from "./Pages/CoinDetailPage";
import "./style/App.css"
function App() {
  
  return (
    <Router>
      <div>
      <div style={{ width: 700 }}>
       
      </div>
        {/* <HistoricDataChart/> */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/coin/:id" element={<CoinDetailPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
