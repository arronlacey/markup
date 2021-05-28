import { MDBBtn } from "mdbreact"

import { Header } from "@markup/helpers"

function ActionSection(props: any): JSX.Element {
  const addAnnotation = () => {
    alert(1)
  }

  const exportAnnotations = () => {
    alert(2)
  }

  return (
    <>
      <Header message="Actions" />

      <div>
        <MDBBtn
          className="waves-effect font-weight-bold primary-color"
          onClick={addAnnotation}
        >
          Add Annotation
        </MDBBtn>

        <MDBBtn
          className="waves-effect font-weight-bold secondary-color"
          onClick={exportAnnotations}
        >
          Export
        </MDBBtn>
      </div>
    </>
  )
}

export { ActionSection }
