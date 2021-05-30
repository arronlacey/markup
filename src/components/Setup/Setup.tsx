import { useEffect, useState, SyntheticEvent } from "react"
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact"

import { Endpoint, Header, PageTitle, SetupStorageKey, Tooltip } from "@markup/helpers"
import Faq from "@markup/components/Setup/Faq/Faq"
import FileForm from "@markup/components/Setup/Form/FileForm/FileForm"
import FolderForm from "./Form/FolderForm/FolderForm"
import "./Setup.css"

enum SetupType {
  Single = "single",
  Multiple = "multiple"
}

function Setup(): JSX.Element {
  const [documentQuantity, setDocumentQuantity] = useState(0)
  const [setupType, setSetupType] = useState<String>(SetupType.Single)

  useEffect(() => {
    document.title = PageTitle.Setup

    localStorage.setItem(
      SetupStorageKey.Quantity,
      documentQuantity.toString()
    )
  }, [documentQuantity])

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
              <select
                className="browser-default custom-select"
                onChange={event => setSetupType(event.target.value)}
              >
                <option value={SetupType.Single}>Single document</option>
                <option value={SetupType.Multiple}>Multiple documents</option>
              </select>
            </div>
            <br/>

            {setupType === SetupType.Single &&
              <FileForm
                setDocumentQuantity={setDocumentQuantity}
              />
            }

            {setupType === SetupType.Multiple &&
              <FolderForm
                setDocumentQuantity={setDocumentQuantity}
              />
            }

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

function startSession(event: SyntheticEvent): void {
  event.preventDefault()
  localStorage.setItem(SetupStorageKey.IsReady, "true")
  window.location.href = Endpoint.Annotate
}

export default Setup
