import { useEffect, useState, SyntheticEvent } from "react"
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact"

import { Endpoint, Header, PageTitle, Tooltip } from "@markup/helpers"
import Faq from "@markup/components/Setup/Faq/Faq"
import FileForm from "@markup/components/Setup/Form/FileForm/FileForm"
import FolderForm from "./Form/FolderForm/FolderForm"
import "./Setup.css"

enum DocumentQuantity {
  Single = "single",
  Multiple = "multiple"
}

function Setup(): JSX.Element {
  const [quantity, setQuantity] = useState<String>(DocumentQuantity.Single)

  const startSession = (event: SyntheticEvent) => {
    event.preventDefault()
    localStorage.setItem("isSetup", "true")
    window.location.href = Endpoint.Annotate
  }

  useEffect(() => {
    document.title = PageTitle.Setup
  })

  return (
    <MDBContainer>
      <MDBRow className="setup-row">
        <MDBCol md="6" className="setup-column">
          <form >
            <Header message="Setup"/>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              <span className="required-field">*</span>
              <span className="field-header">Quantity</span>
              <Tooltip message="The number of documents you intend to annotate."/>
            </label>
            <div>
              <select className="browser-default custom-select" onChange={event => setQuantity(event.target.value)}>
                <option value={DocumentQuantity.Single}>Single document</option>
                <option value={DocumentQuantity.Multiple}>Multiple documents</option>
              </select>
            </div>
            <br />

            {quantity === DocumentQuantity.Single && <FileForm/>}
            {quantity === DocumentQuantity.Multiple && <FolderForm/>}

            <div className="text-center mt-4">
              <MDBBtn
                type="submit"
                className="waves-effect font-weight-bold primary-color"
                onClick={(event: SyntheticEvent) => {startSession(event)}}
              >
                Start Session
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        
        <MDBCol md="5" className="setup-column">
          <Faq/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Setup
