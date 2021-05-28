import { MDBRow, MDBCol, MDBContainer } from "mdbreact"

import "./SessionPanel.css"

function SessionPanel(props: any): JSX.Element {
  return (
    <MDBContainer className="session-panel-container">
      <MDBRow>
        <MDBCol md="3">
          <span className="navigation-arrow">{"<"}</span>
          <span className="navigation-arrow">{"<<"}</span>
        </MDBCol>

        <MDBCol md="6">
          <select className="browser-default custom-select">
          <option>Epi_Let1.txt</option>
              <option>Epi_Let2.txt</option>
              <option>Epi_Let3.txt</option>
          </select>
        </MDBCol>

        <MDBCol md="3">
          <span className="navigation-arrow">{">>"}</span>
          <span className="navigation-arrow">{">"}</span>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default SessionPanel
