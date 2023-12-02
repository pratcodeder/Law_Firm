import "./FAQ.css";
import {Button} from '@mui/material';



export default () => {
const questions = [ "How much is my case worth?", "What should I do right after car accidect", "How much is my case worth?"]

return (
    <div className="FAQ-section">
        <div className="FAQ-heading">
            <h1>FAQ</h1>
            <p>Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. </p>
        </div>
        <div className="FAQ-content">
            <h3 style={{paddingLeft: "10px",paddingBottom: "50px"}}>Do I need a personal injury report?</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exer. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia 
            consequatduis enim velit mollit Exer.</p>

                {questions.map((item) => {
                    return(
                            <div>
                            <img  className="FAQ-img" src="./LineH.png"/>   

                                    <div className="questions">
                                        <h3>{item}</h3>
                                        <Button variant="text" ><img src="plusButton.png" /></Button>
                                    
                                    </div>
                            </div>

                    )
                })}

         
        </div>
    </div>
)
}