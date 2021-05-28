import { useEffect } from "react"
import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle, MDBJumbotron
} from "mdbreact"

import Endpoint from "@markup/helpers/Endpoint"
import Title from "@markup/helpers/Title"
import "./Home.css"

function Home(): JSX.Element {
  useEffect(() => {
    document.title = Title.Home
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
          <MDBBtn href={Endpoint.Documentation} className="waves-effect font-weight-bold custom-home-button">
            Docs
          </MDBBtn>
          <MDBBtn href={Endpoint.SetupForm} className="waves-effect font-weight-bold custom-home-button custom-home-button-focus">
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
