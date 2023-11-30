import "./TitlePage.css"
import Header from "./Header"
import Content from "./Content"

export default () => {
    return (
       <div className="title-page">
        <div>
          <Header />  
          <Content />
        </div>
       </div>
    )
}