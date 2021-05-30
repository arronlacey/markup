import { useEffect } from "react"

import { generateId, InputLabel } from "@markup/helpers"
import FileInputField from "@markup/components/Setup/Form/FileForm/FileInputField"

function FileForm(props: any): JSX.Element {
  useEffect(() => {
    props.setDocumentQuantity(1)
  })

  return (
    <>
      <InputLabel
        required={true}
        header="Document to annotate"
        tooltip="The document you intend to annotate (must be .txt file)."
      />
      <FileInputField
        id={generateId()}
        storageName="documentText0"
        accept=".txt"
      />
      <br/>

      <InputLabel
        required={true}
        header="Configuration file"
        tooltip="The configuration file that defines available entities and attributes (must be .conf file)."
      />
      <FileInputField
        id={generateId()}
        storageName="configText"
        accept=".conf"
      />
      <br/>

      <InputLabel
        required={true}
        header="Existing annotations"
        tooltip="Optional: The file containing existing annotations for the document you intend to annotate (must be .ann file)."
      />
      <FileInputField
        id={generateId()}
        storageName="annotationText0"
        accept=".ann"
      />
      <br/>

      <InputLabel
        required={true}
        header="Ontology"
        tooltip="Optional: An existing or custom ontology to access during the annotation session. See documentation for custom format details (must be .txt file)."
      />
      <FileInputField
        id={generateId()}
        storageName="ontologyText"
        accept=".txt"
      />
    </>
  )
}

export default FileForm
