import "./Header.css"
import {Button} from '@mui/material';


export default () => {
    const menuItems = ["Home","Attorneys","Practice Areas","About Us"];
    
    return (
        <div className="display-flex">
                <div className="display-flex logo">
                    <div className="vector">
                        <img src="Vector.png" />
                    </div>
                    <div className="Igstudio">
                    <img src="Igstudio.png" />

                    </div>
                    </div>
                <div className="display-flex menu">
                   {menuItems.map((item) => {
                        return <Button variant="text" className="button">{item}</Button>

                    })}
                   
                </div>
                <Button variant="outlined" className="button contact-now">Contact Now</Button>
              
                
            </div>
    )
}