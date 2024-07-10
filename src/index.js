import reactdom from "react-dom/client"
import CardContainer from "./component/CardContainer"
const firstProject= reactdom.createRoot(document.getElementById("root"))
firstProject.render(<CardContainer/>)