import randomstring from "randomstring"

import { Header } from "@markup/helpers"
import { ENTITY_COLOUR } from "../helpers/EntityHelper"
import "./EntitySection.css"

function EntitySection(props: any): JSX.Element {
  return (
    <div className="config-entities">
      <Header message="Entities" />

      {props.entities.map((entity: string, index: number) => {
        const configLabelClasses =
          props.activeEntity === entity
          ? "config-label" 
          : "config-label config-label-inactive"
        const key = randomstring.generate()

        return (
          <div key={key}>
            <input
              type="radio"
              id={entity}
              name="entities"
              value={entity}
            />

            <label
              className={configLabelClasses}
              onClick={() => props.setActiveEntity(entity)}
              style={{ backgroundColor: ENTITY_COLOUR[index] }}
              htmlFor={entity}
            >
              {entity}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export { EntitySection }
