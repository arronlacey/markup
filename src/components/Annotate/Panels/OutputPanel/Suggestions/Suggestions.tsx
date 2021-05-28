import { useState } from "react"
import { MDBCollapse } from "mdbreact"

import Annotation from "../Annotation/Annotation"
import "./Suggestions.css"

function Suggestions(props: any): JSX.Element {
  const [collapsedType, setCollapsedType] = useState("")

  const toggleCollapse = () => {
    if (collapsedType === "") {
      setCollapsedType("basicCollapse")
    } else {
      setCollapsedType("")
    }
  }

  return (
    <div className="annotation-prediction">
      <div className="annotation-prediction-text" onClick={() => toggleCollapse()}>
        2 annotation suggestions
      </div>

      <MDBCollapse id="basicCollapse" isOpen={collapsedType}>
        <Annotation/>
        <Annotation/>
        <Annotation/>
      </MDBCollapse>
    </div>
  )
}

export default Suggestions
