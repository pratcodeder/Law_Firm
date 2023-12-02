import "./OurTeam.css"


export default () => {

    const teams = [{"img" : "danial", "name" : "Danial Def", "cases" : "301 Cases"},
    {"img" : "sanfole", "name" : "Sanfole", "cases" : "850 Cases"},
    {"img" : "cesforila", "name" : "Cesforila", "cases" : "470 Cases"},
    {"img" : "colleen", "name" : "Colleen", "cases" : "180 Cases"},
    {"img" : "haldone", "name" : "Haldone", "cases" : "212 Cases"},
    {"img" : "nik", "name" : "Nik Jeo", "cases" : "350 Cases"}
]

let classname ;
    return (
      <div className="ourTeam-section">
        <div className="ourTeam-heading">
            <h1>Our Team</h1>
        </div>
        <div className="ourTeam-profiles">
        {teams.map((profile, index) => {
            if(index==0 || index == 3) {
                classname="move-start";
            } else if(index==1 || index == 4) {
                classname="move-center";
            } else {
                classname="move-end";
            }
            return (
            <div className={`hover-effect ${classname}`}>
                <div className="single-profile">
                 <div className="profile-img"><img src={`./${profile.img}.png`} /></div>
                 <div className="profile-info">
                     <h4>{profile.name}</h4>
                     <p>{profile.cases}</p>
                 </div>
                </div>
          </div>

            )
        })}
          </div>
      </div>
    )
}