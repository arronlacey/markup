import { useEffect } from "react"

import { InputLabel } from "@markup/helpers"
import FolderInputField from "./FolderInputField"

function FolderForm(props: any): JSX.Element {
  useEffect(() => {
    props.setDocumentQuantity(10)
  })

  return (
    <>
      <InputLabel
        required={true}
        header="Folder to annotate"
        tooltip="
          A folder containing the documents you intend to annotate (must be .txt files)
          and a configuration file (must be a .conf file). May also include existing
          annotations (must be .ann files) where the file name matches a text document
          e.g. clinic-letter-1.txt corresponds with clinic-letter-1.ann
        "
      />
      <FolderInputField/>
      <br/>
    </>
  )
}

export default FolderForm
