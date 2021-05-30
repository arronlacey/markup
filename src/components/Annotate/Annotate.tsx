import { useEffect, useState } from "react"
import { MDBAlert, MDBCol, MDBContainer, MDBRow } from "mdbreact"

import { PageTitle, Endpoint, SessionStorage } from "@markup/helpers"
import ConfigPanel from "@markup/components/Annotate/Panels/ConfigPanel/ConfigPanel"
import DocumentPanel from "./Panels/DocumentPanel/DocumentPanel"
import OutputPanel from "./Panels/OutputPanel/OutputPanel"
import "./Annotate.css"

function Annotate(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    document.title = PageTitle.Annotate

    if (localStorage.getItem(SessionStorage.IsReady) !== "true") {
      window.location.href = Endpoint.Setup
    }
  })

  return (
    <>
      {successMessage !== "" &&
        <MDBAlert color="success" >
          {successMessage}
        </MDBAlert>
      }

      {errorMessage !== "" &&
        <MDBAlert color="danger" >
          {errorMessage}
        </MDBAlert>
      }
      
      <MDBContainer className="annotation-container">
        <MDBRow>
          <MDBCol md="3">
            <ConfigPanel
              setErrorMessage={setErrorMessage}
              setSuccessMessage={setSuccessMessage}
            />
          </MDBCol>

          <MDBCol md="5">
            <DocumentPanel
              setErrorMessage={setErrorMessage}
              setSuccessMessage={setSuccessMessage}
            />
          </MDBCol>

          <MDBCol md="4">
            <OutputPanel
              setErrorMessage={setErrorMessage}
              setSuccessMessage={setSuccessMessage}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Annotate
