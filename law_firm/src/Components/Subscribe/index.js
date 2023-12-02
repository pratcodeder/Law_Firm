import "./Subscribe.css";
import {TextField,Button} from '@mui/material';


export default () => {
    return (
        <div className="Subscribe-section">
            <div className="Subscribe-subSection">
            <h1>Subscribe Our Newsletter</h1>
            <div className="details">
                <div className="details-name" >
                <TextField fullWidth  id="d-name"  placeholder="Name : "  InputProps={{
    style: {
      borderRadius: "8px 0px 0px 8px",
    }
  }}/>
                </div>
                <div className="details-email">
                <TextField  fullWidth id="d-name"  placeholder="Enter your Email"  InputProps={{
    style: {
      borderRadius: "0px",
    }
  }} />
                </div>
               
               
                <div className="details-send">
                <Button variant="text" >
                    <h5>SEND</h5>                
                    </Button>
                    </div>
                   

            </div>
            </div>
        </div>
    )
}