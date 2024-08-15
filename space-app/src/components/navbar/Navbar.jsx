import AstroLogo from '/public/AstroLogo.svg';
import "./Navbar.css";
function Navbar({links}){
    const navStyles ={
        backgroundColor: "rgba(36, 9, 98, .4)",
    };
    return(
        <nav className="nav-container" style={navStyles}>
            
            <img className="nav-logo" src={AstroLogo} alt="space-app logo"/>
            <div className='links-container'>
                {
                    links.map((item) =>(
                        <a key={item.id} href={item.href}>
                            {item.text} </a>
                    ))
                }
            </div>
        </nav>
    );
}

export default Navbar;
