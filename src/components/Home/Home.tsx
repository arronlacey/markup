import { useEffect } from "react"
import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle, MDBJumbotron
} from "mdbreact"

import { Endpoint, PageTitle } from "@markup/helpers"
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
            <a href={Endpoint.Demo} className="demo-link">...or try a demo</a>
          </p>
        </div>
      </MDBCardBody>
    </MDBJumbotron>
  )
}

export default Home
