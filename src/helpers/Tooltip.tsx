import { MDBIcon, MDBTooltip } from "mdbreact"

function Tooltip(props: any): JSX.Element {
    return (
      <MDBTooltip domElement tag="span" placement="right">
        <span><MDBIcon far icon="question-circle" className="grey-text"/></span>
        <span>{props.message}</span>
      </MDBTooltip>
    )
}

export {Tooltip}
