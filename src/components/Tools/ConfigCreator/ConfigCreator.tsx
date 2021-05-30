import { MDBBtn, MDBCol, MDBRow } from "mdbreact"
import { useEffect } from "react"

import {Tooltip, PageTitle} from "@markup/helpers"
import "./ConfigCreator.css"

function ConfigCreator(): JSX.Element {
  useEffect(() => {
    document.title = PageTitle.ConfigCreator
  })

  return (
    <div className="config-creator-container">
      <MDBRow>
        <MDBCol md="12">
          <div className="config-creator-panel">
            <p>
              <span className="config-creator-header">Entities</span>
              <Tooltip message="The number of documents you intend to annotate."/>
            </p>
            <input className="config-creator-input" placeholder="Type (e.g. Seizure)"/>
            <MDBBtn className="config-creator-button">Add Entity</MDBBtn>
          </div>
        </MDBCol>

        <MDBCol md="12">
          <div className="config-creator-panel">
            <p>
              <span className="config-creator-header">Attributes</span>
              <Tooltip message="The number of documents you intend to annotate."/>
            </p>
            <input className="config-creator-input resizeable" placeholder="Name (e.g. SeizureFrequency)"/>
            <input className="config-creator-input resizeable" placeholder="Related entity (e.g. Seizure)"/>
            <input className="config-creator-input resizeable" placeholder="Comma-seperated values (e.g. Daily, Weekly, Monthly)"/>
            <MDBBtn className="config-creator-button secondary-color font-weight-bold">Add Attribute</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <div className="config-creator-panel config-creator-panel-small">
            <MDBBtn className="primary-color font-weight-bold config-creator-output-button">Generate Config</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default ConfigCreator
