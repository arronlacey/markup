import { useEffect } from "react"
import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBJumbotron,
} from "mdbreact"

import { configText, demoDocs } from "@markup/resources/demoDocs"
import { Endpoint, PageTitle, SessionDocument, SessionStorage } from "@markup/helpers"
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
  localStorage.setItem(SessionStorage.IsReady, "true")
  localStorage.setItem(SessionStorage.Quantity, demoDocs.length.toString())
  localStorage.setItem(SessionStorage.Config, configText)

  demoDocs.forEach((document: SessionDocument, index: number) => {
    const key = SessionStorage.DocumentN + index
    localStorage.setItem(key, JSON.stringify(document))
  })

  window.location.href = Endpoint.Demo
}

export default Home
