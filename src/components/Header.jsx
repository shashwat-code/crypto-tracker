import "../style/Header.css"
function Header(){
    return(
        <nav className="navgationBar">
           <div className="logo-name">
           <img onClick={()=>{ }}  id="logo" src={require("../Assets/logo.png")}></img>
           <h4 id="heading">Crypto Tracker</h4>
           </div>
           {/* select component should be created custom */}
           <select id="selectOptions">
               <option value="1">INR</option>
               <option value="2">Dollar</option>
            </select> 
        </nav>
    )
}

export default Header;