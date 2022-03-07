import {TrendingCoins} from "../config/api"
import {useEffect,useState} from "react"
import axios from "axios"
import AliceCarousel, { Classnames } from "react-alice-carousel"
import { Link } from "react-router-dom"
import CardCarousel from "./CardCarousel"
const Carousel=()=>{
    const [trendingCoinData,setTrendingCoinData]=useState([ ])
    const trendingAPI = async () =>{
        const data = await fetch(TrendingCoins()).then(res=>res.json()).then(response=>{return response})
        setTrendingCoinData(data)
    }
    const responsive ={
        0:{items:2},
        512:{items:4}
    }
    const items =trendingCoinData.map((item)=>{
        return <Link className={Classnames.carouselItem} to={`/coins/${item.id}`} >
            <CardCarousel item={item} />
        </Link>
    })
    useEffect(()=>{trendingAPI()},[])
    if(items===null){return(<></>)}
    return (
        
        <div height="50px">
            <AliceCarousel
                mouseTracking
                infinite
                
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            ></AliceCarousel>
        </div>
    )
}

export default Carousel