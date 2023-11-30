import "./Practice.css"

export default () => {
    let image = ["business1", "partner", "realEas", "business2", "landlord", "elder"]
    return (
        <div className="PracticeSection">
            <div className="heading"><h1>Area of Practices</h1></div>
            <div className="card-grid">
               { image.map((img, index) => {
                if(index==0 || index==3 || index==4) {
                return (
                    <div className={`image img${index} `}><img src={`./${img}.png`} /></div>
                )
                }
                return (
                    <div className={`image1 img${index} `}><img src={`./${img}.png`} /></div>
                )


               })} 

            </div>
        </div>
    )
}