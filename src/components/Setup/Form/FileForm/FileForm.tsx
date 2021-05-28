import { Tooltip } from "@markup/helpers"
import FileInput from "@markup/components/Setup/Form/FileForm/FileInput"

function FileForm(): JSX.Element {
  const generateId = (): string => {
    return Math.random().toString(36).substring(7)
  }

  return (
    <>
      <InputLabel
        required={true}
        header="Document to annotate"
        tooltip="The document you intend to annotate (must be .txt file)."
      />
      <FileInput
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
      <FileInput
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
      <FileInput
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
      <FileInput
        id={generateId()}
        storageName="ontologyText"
        accept=".txt"
      />
    </>
  )
}

function InputLabel(props: any): JSX.Element {
  return (
    <label className="grey-text">
      {props.required && <span className="required-field">*</span>}
      <span className="field-header">{props.header}</span>
      <Tooltip message={props.tooltip}/>
    </label>
  )
}

export default FileForm
