import { useEffect, useState } from "react"
import Scrollbars from "react-custom-scrollbars-2"

import NavigationPanel from "./NavigationPanel/NavigationPanel"
import { SetupStorageKey } from "@markup/helpers"
import "./DocumentPanel.css"

function DocumentPanel(props: any): JSX.Element {
  const documentQuantity = localStorage.getItem(SetupStorageKey.Quantity)
  const minDocumentIndex = 0
  let maxDocumentIndex

  if (documentQuantity !== null) {
    maxDocumentIndex = parseInt(documentQuantity) - 1
  }

  const [documentIndex, setDocumentIndex] = useState(0)
  const [documentText, setDocumentText] = useState("")

  useEffect(() => {
    const key = SetupStorageKey.DocumentN + documentIndex
    const currentDocumentText = localStorage.getItem(key)

    if (currentDocumentText == null || currentDocumentText.trim() === "") {
      props.setErrorMessage("You need to provide a valid document. Read the docs for more info.")
    } else {
      setDocumentText(currentDocumentText)
    }
  }, [props, documentIndex, documentText, setDocumentText])

  return (
    <div className="panel">
      <Scrollbars autoHide>
        <NavigationPanel
          documentIndex={documentIndex}
          setDocumentIndex={setDocumentIndex}
          minDocumentIndex={minDocumentIndex}
          maxDocumentIndex={maxDocumentIndex}
        />

        <div
          id="document-text"
          className="panel-content document-text"
          onMouseUp={(e) => markText()}
        >
          {documentText}
        </div>
      </Scrollbars>
    </div>
  )
}

function markText(): void {
  clearPreviousMark()
  
  const selection = window.getSelection()!
  const startIndex = Math.min(selection.anchorOffset, selection.focusOffset)
  const endIndex = Math.max(selection.anchorOffset, selection.focusOffset)

  if (endIndex - startIndex > 0) {
    const mark = document.createElement("mark")

    mark.setAttribute("id", "highlightedText")
    mark.setAttribute("startIndex", startIndex.toString())
    mark.setAttribute("endIndex", endIndex.toString())

    selection.getRangeAt(0).surroundContents(mark)
  }
}

function clearPreviousMark(): void {
  const mark = document.getElementsByTagName("mark")

  while (mark.length) {
      const parent = mark[0].parentNode

      while (mark[0].firstChild) {
        parent?.insertBefore(mark[0].firstChild, mark[0] )
      }

      parent?.removeChild(mark[0])
  }
}

export default DocumentPanel
