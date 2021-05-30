import { useEffect } from "react"
import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBJumbotron,
} from "mdbreact"

import { configText, demoDocs } from "@markup/resources/demo-docs"
import { Endpoint, PageTitle, SetupStorageKey } from "@markup/helpers"
import "./Home.css"

function Home(): JSX.Element {
  useEffect(() => {
    document.title = PageTitle.Home
  })

  return (    
    <MDBJumbotron className="text-center">
      <MDBCardBody>
        <MDBCardTitle className="h2 custom-home-title">
          markup
        </MDBCardTitle>
        <br/>
        <MDBCardText className="custom-home-card">
          Rapid document annotation for ML and NLP
        </MDBCardText>
        <br/>
        <div className="pt-2">
          <MDBBtn href={Endpoint.Documentation} className="waves-effect font-weight-bold custom-home-button secondary-color">
            Docs
          </MDBBtn>
          <MDBBtn href={Endpoint.Setup} className="waves-effect font-weight-bold custom-home-button primary-color">
            Annotate
          </MDBBtn>
          <p>
            <span  onClick={() => startDemoSession()} className="demo-link">
              ...or try a demo
            </span>
          </p>
        </div>
      </MDBCardBody>
    </MDBJumbotron>
  )
}

function startDemoSession(): void {
  localStorage.setItem(SetupStorageKey.IsReady, "true")
  localStorage.setItem(SetupStorageKey.Quantity, demoDocs.length.toString())
  localStorage.setItem(SetupStorageKey.Config, configText)

  demoDocs.forEach((documentText: string, index: number) => {
    const key = SetupStorageKey.DocumentN + index
    localStorage.setItem(key, documentText)
  })

  window.location.href = Endpoint.Demo
}

export default Home
