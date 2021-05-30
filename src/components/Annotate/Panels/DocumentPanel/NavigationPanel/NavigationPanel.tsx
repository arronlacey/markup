import { MDBRow, MDBCol, MDBContainer } from "mdbreact"

import "./NavigationPanel.css"

function NavigationPanel(props: any): JSX.Element {
  const moveToDocument = (nextDocumentIndex: number) => {
    if (nextDocumentIndex >= props.minDocumentIndex && nextDocumentIndex <= props.maxDocumentIndex) {
      props.setDocumentIndex(nextDocumentIndex)
    }
  }

  return (
    <MDBContainer className="session-panel-container">
      <MDBRow>
        <MDBCol md="3">
          <span
            className="navigation-arrow"
            onClick={() => moveToDocument(props.minDocumentIndex)}
          >
            {"<<"}
          </span>

          <span
            className="navigation-arrow"
            onClick={() => moveToDocument(props.documentIndex - 1)}
          >
            {"<"}
          </span>
        </MDBCol>

        <MDBCol md="6">
          <select className="browser-default custom-select">
            <option>Epi_Let1.txt</option>
            <option>Epi_Let2.txt</option>
            <option>Epi_Let3.txt</option>
          </select>
        </MDBCol>

        <MDBCol md="3">
          <span
            className="navigation-arrow"
            onClick={() => moveToDocument(props.documentIndex + 1)}
          >
            {">"}
          </span>

          <span
            className="navigation-arrow"
            onClick={() => moveToDocument(props.maxDocumentIndex)}
          >
            {">>"}
          </span>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default NavigationPanel
