import "./HappyClients.css";
import {Button} from '@mui/material';

export default () => {

    const clients = [ {"img" : "jane", "title" : "Jane Cooper"}, {"img" : "devon", "title" : "Devon Lane"}, {"img" : "robert", "title" : "Robert Fox"}]
    return (
<div className="happyClients-section">
<div className="happyClients-title">
    <div className="happyClients-heading">
        <h1>What says our</h1>
        <h1>happy Clients</h1>
    </div>
    <div className="happyClients-buttons">
    <Button variant="text" className="button-backForward"><img src="back.png" /></Button>
    <Button variant="text" className="button-backForward"><img src="forward.png" /></Button>
         
    </div>
</div>

<div className="happyClients-cards">
    {clients.map((Profile) => {
        return (
            <div className="single-card">
    <div className="profile"><img src={`./${Profile.img}.png`} /></div>
    <div className="name"><h1>{Profile.title}</h1></div>
    <div className="job-title"><h5>Ceo of Hunt</h5></div>
    <div className="reviews"><p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p></div>
</div>
        )
    })}

</div>

</div>
    );
}