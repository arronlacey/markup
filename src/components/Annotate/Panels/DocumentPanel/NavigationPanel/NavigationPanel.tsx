import { MDBRow, MDBCol, MDBContainer } from "mdbreact"
import { useEffect, useState } from "react"

import { SessionDocument, SessionStorage } from "@markup/helpers"
import "./NavigationPanel.css"

function NavigationPanel(props: any): JSX.Element {
  const [docNames, setDocNames] = useState([] as string[])
  const [minDocIndex, maxDocIndex] = getDocIndexRange()
  
  const moveToDoc = (nextDocIndex: number) => {
    if (nextDocIndex >= minDocIndex && nextDocIndex <= maxDocIndex) {
      props.setDocumentIndex(nextDocIndex)
    }
  }
 
  useEffect(() => {
    const docNames = []

    for (let i = minDocIndex; i <= maxDocIndex; i++) {
      const key = SessionStorage.DocumentN + i
      const storedDoc = localStorage.getItem(key)

      if (storedDoc !== null && storedDoc.trim() !== "") {
        const parsedDoc = JSON.parse(storedDoc) as SessionDocument
        docNames.push(parsedDoc.name)
      }

      setDocNames(docNames)
    }
  }, [maxDocIndex, minDocIndex, setDocNames])

  return (
    <MDBContainer className="session-panel-container">
      <MDBRow>
        <MDBCol md="3">
          <span
            className="navigation-arrow noselect"
            onClick={() => moveToDoc(minDocIndex)}
          >
            {"<<"}
          </span>

          <span
            className="navigation-arrow noselect"
            onClick={() => moveToDoc(props.documentIndex - 1)}
          >
            {"<"}
          </span>
        </MDBCol>

        <MDBCol md="6">
          <select
            className="browser-default custom-select noselect"
            value={props.documentIndex}
            onChange={(option) => {
              const nextDocIndex = parseInt(option.target.value)
              moveToDoc(nextDocIndex)
            }}
          >
            {docNames.map((name: string, index: number) => {
              return <option value={index}>{name}</option>
            })}
          </select>
        </MDBCol>

        <MDBCol md="3">
          <span
            className="navigation-arrow noselect"
            onClick={() => moveToDoc(props.documentIndex + 1)}
          >
            {">"}
          </span>

          <span
            className="navigation-arrow noselect"
            onClick={() => moveToDoc(maxDocIndex)}
          >
            {">>"}
          </span>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

function getDocIndexRange(): number[] {
  const docQuantity = localStorage.getItem(SessionStorage.Quantity)

  if (docQuantity !== null) {
    return [0, parseInt(docQuantity) - 1]
  }
  return [0, -1]
}

export default NavigationPanel
