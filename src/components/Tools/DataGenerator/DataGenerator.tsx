import Tooltip from "@markup/components/Setup/helpers/Tooltip"
import Title from "@markup/helpers/Title"
import { MDBBtn, MDBCol, MDBRow } from "mdbreact"
import React, { useState } from "react"
import { useEffect } from "react"

import "./DataGenerator.css"

function DataGenerator(): JSX.Element {
  const [quantity, setQuantity] = useState(25000)
  const [variableType, setVariableType] = useState("text")

  const updateQuantityText = () => {
    const quantityRange = document.getElementById("quantity-range") as HTMLInputElement
    const quantityRangeValue = parseInt(quantityRange.value)
    setQuantity(quantityRangeValue)
  }

  useEffect(() => {
    document.title = Title.DataGenerator
  })

  return (
    <div className="data-generator-container">
      <MDBRow>
        <MDBCol md="12">
          <div className="data-generator-panel">
            <p>
              <span className="data-generator-header">Variables</span>
              <Tooltip message="The number of documents you intend to annotate."/>
            </p>

            <select className="data-generator-input" onChange={(e) => setVariableType(e.target.value)}>
              <option value="text">Text values</option>
              <option value="numerical">Numerical range</option>
            </select>
            <input className="data-generator-input" placeholder="Name (e.g. doseUnit)"/>

            {variableType === "text" &&
              <input
                className="data-generator-input"
                placeholder="Comma-seperated values (e.g. grams, milligrams)"
              />
            }

            {variableType === "numerical" &&
              <>
                <input className="data-generator-input" style={{width: "33%"}} type="number" min="0" placeholder="Low (e.g. 0)"/>
                <input className="data-generator-input" style={{width: "33%"}} type="number" min="0" placeholder="High (e.g. 1000)"/>
                <input className="data-generator-input" style={{width: "33%"}} type="number" min="0" placeholder="Step (e.g. 5)"/>
              </>
            }

            <MDBBtn className="data-generator-button">Add Variable</MDBBtn>

          </div>
        </MDBCol>

        <MDBCol md="12">
          <div className="data-generator-panel">
            <p>
              <span className="data-generator-header">Sequence Templates</span>
              <Tooltip message="The number of documents you intend to annotate."/>
            </p>

            <input className="data-generator-input resizeable" placeholder="Input sequence (e.g. She is taking $drugDose $doseUnit of $drugName.)"/>
            <input className="data-generator-input resizeable" placeholder="Target sequence (e.g. dose: $drugDose; unit: $doseUnit; name: $drugName;)"/>
            <MDBBtn className="data-generator-button">Add Template</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <div className="data-generator-panel data-generator-panel-small">
            <div className="data-generator-quantity-container">
              <p className="data-generator-quantity-text">{quantity} sequences</p>
              <input
                id="quantity-range"
                className="data-generator-quantity-range"
                type="range"
                min="0"
                max="50000"
                step="100"
                value={quantity}
                onInput={updateQuantityText}
              />
            </div>
            
            <div className="data-generator-output-container">
              <MDBBtn className="data-generator-output-button">Generate Data</MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default DataGenerator
