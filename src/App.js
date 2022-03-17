import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Header from "./components/Header";
import CoinDetailPage from "./Pages/CoinDetailPage";
import "./style/App.css"
import { Box } from "@mui/material";
import Footer from "./components/Footer";
function App() {
  
  return (
    <Router>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} > </Route>
          <Route path="/CoinDetailPage/:id" element={<CoinDetailPage />}></Route>
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
