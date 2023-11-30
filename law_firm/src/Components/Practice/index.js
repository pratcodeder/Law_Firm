import "./Practice.css"

export default () => {
    let image = [
        {"IMG": "business1", "title":"BUSINESS LAW"}, 
        {"IMG": "partner", "title":"Partnership LAW"},
        {"IMG": "realEas", "title":"REAL ESTATE LAW"},
        {"IMG": "business2", "title":"BUSINESS LAW"},
        {"IMG": "landlord", "title":"LANDLORD DISPUTES"},
        {"IMG": "elder", "title":"ELDER ABUSE"}
        
        ]
    return (
        <div className="PracticeSection">
            <div className="heading"><h1>Area of Practices</h1></div>
            <div className="card-grid">
               { image.map((img, index) => {
                if(index==0 || index==3 || index==4) {
                return (
                   
                    <div className={`gridImage img${index} `}>
                        <img src={`./${img.IMG}.png`} />
                    <span className="title">{img.title}</span>
                        </div>
                  
                )
                }
                return (
                  
                    <div className={`gridImage1 img${index} `}>
                        <img src={`./${img.IMG}.png`} />
                    <span className="title">{img.title}</span>
                        </div>
                    
                    )


               })} 

            </div>
        </div>
    )
}