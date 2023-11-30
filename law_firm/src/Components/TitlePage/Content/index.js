import "./Content.css";
import {Button, Input } from '@mui/material';
export default () => {
    return (
        <div className="display-flex">
            <div>
                <div className="tagline">
                    <h1 className="h11">You don’t have to </h1>
                    <h1 className="h12">Fight them Alone.</h1>
                </div>
                <div className="discription">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                </div>
                <div className="email">
                    <div className="display-flex emailfield">
                    <img src="email.png" />
                    <Input placeholder="Enter your eamil address"  sx={{
      color: 'white',
   
      }} />
                   
                    </div>
                    <div >                     
                       <Button variant="text" className="lets-talk">  <img src="Let's Talk.png" /></Button>
                       
                        
                        
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="pics.png" />
            </div>
        </div>
    )
}