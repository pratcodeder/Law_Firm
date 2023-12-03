import "./Footer.css";
import {Button} from '@mui/material';


export default () => {
    let options =["Home", "Attorneys", "Practice Areas", "About Us"]
    let logos =["insta", "fb", "x", "pin"]
    
    return (
        <div className="Footer-section">
            <div className="Footer-logo">
                <img src="logo.png" />
                </div>
            <div className="Footer-content">
                <div className="content-menu">
                    <div className="menu-options">
                       {options.map((item) => {
                        return (
                        <Button variant="text" >
                             <h4>{item}</h4>
                        </Button>
                           
                        )
                       })}
                    </div>
                    <div className="media-icons">
                       {logos.map((logo) => {
                        return (
                            <Button variant="text" >
                            <img src={`${logo}.png`} />
                            </Button>
                        )
                       })}
                    </div>

                </div>
                <div className="content-policy">                   
                        <h6>© 2020 Acme. All right reserved.</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Terms of Service</h6>                 
                </div>
            </div>
        </div>
    )
}

