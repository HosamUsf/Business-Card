import logo from "../assets/4K-NARUTO-WALLPAPER-PC.jpg"

function handleClick() {
    // Replace with the GitHub profile URL
    window.open('https://www.linkedin.com/in/hosammohamed/', '_blank');
}

export default function Info(){
    return(
        <div className="info--container">
            <img src={logo} className="info--img"  alt="naruto img"/>
            <h1 className="info--name">Hosam Mohamed</h1>
            <div className="info--job">Software Engineer</div>
            <div className="info--site">Hosamusf.com</div>
            <div className="info--buttons">
                <button className="button-email">
                    <i className="fa fa-envelope"></i> Email
                </button>
                
                <button className="button-linkedin" onClick={handleClick}>
                    <i className="fa fa-linkedin-square"></i> LinkedIn                
                </button>
            </div>
        </div>
        
        
    )
}

