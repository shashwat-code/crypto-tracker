import "../style/Header.css"

function Header(){
    return(
        <nav className="navgationBar">
           <div className="logo-name">
           <img  id="logo" src={require("../Assets/logo.png")}></img>
           <label id="heading">Crypto Tracker</label>
           </div>
           {/* select component should be created custom */}
           <select id="selectOptions">
               <option>INR</option>
               <option>Dollar</option>
            </select> 
        </nav>
    )
}

export default Header;