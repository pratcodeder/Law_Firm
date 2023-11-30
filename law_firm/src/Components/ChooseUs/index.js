import "./ChooseUs.css";
import {Button} from '@mui/material';


export default () => {
    let percentValues = ["98", "100", "100" ]
    return (
        <div className="chooseUs-section"> 
           <div className="heading"><h1>Why Choose us?</h1></div> 

            <div className="card-section">
        {percentValues.map((number) => {
            return (
                <div className="card">
                <img src="gift.png" />
                <h3>{number}% Success Rate</h3>
                <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
            <Button variant="text" className="readMore"><img src="readmore.png" /></Button>

            </div>
            )
        })}
           
            </div>
        </div>
    )
}