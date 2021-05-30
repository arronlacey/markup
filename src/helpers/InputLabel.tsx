import { Tooltip } from "./Tooltip"
import "./InputLabel.css"

function InputLabel(props: any): JSX.Element {
  return (
    <label className="grey-text">
      {props.required && <span className="required-field">*</span>}
      <span className="field-header">{props.header}</span>
      <Tooltip message={props.tooltip}/>
    </label>
  )
}

export { InputLabel }
