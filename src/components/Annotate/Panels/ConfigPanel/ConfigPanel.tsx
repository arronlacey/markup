import { useEffect, useState } from "react"
import Scrollbars from "react-custom-scrollbars-2"

import { DEFAULT_ATTRIBUTE, ATTRIBUTE_CATEGORY, parseAttributeValues } from "./Sections/helpers/AttributeHelper"
import { parseCategories } from "./Sections/helpers/CategoryHelper"
import { DEFAULT_ENTITY, ENTITY_CATEGORY } from "./Sections/helpers/EntityHelper"
import { EntitySection, AttributeSection, OntologySection, ActionSection } from "./Sections"
import "./ConfigPanel.css"
import { SetupStorageKey } from "@markup/helpers"

function ConfigPanel(props: any): JSX.Element {
  const configText = localStorage.getItem(SetupStorageKey.Config)
  const categories = parseCategories(configText)
  
  const [entities, setEntities] = useState(DEFAULT_ENTITY)
  const [attributes, setAttributes] = useState(DEFAULT_ATTRIBUTE)
  const [rendered, setRendered] = useState(false)
  const [activeEntity, setActiveEntity] = useState("")

  useEffect(() => {
    const entities = categories[ENTITY_CATEGORY]
    const attributes = categories[ATTRIBUTE_CATEGORY]

    if (rendered) {
      return
    } else if (entities && attributes) {
      setRendered(true)
      setEntities(entities)
      setAttributes(parseAttributeValues(attributes))
    } else {
      props.setErrorMessage("You need to provide a valid config file. Read the docs for more info.")
    }
  }, [props, categories, rendered])

  return (
    <div className="panel">
      <Scrollbars autoHide>
        <div className="panel-content">
          <EntitySection
            entities={entities}
            activeEntity={activeEntity}
            setActiveEntity={setActiveEntity}
          />
          <br/>

          <AttributeSection
            attributes={attributes}
            activeEntity={activeEntity}
          />
          <br/>

          <OntologySection/>
          <br/>

          <ActionSection/>
        </div>
      </Scrollbars>
    </div>
  )
}

export default ConfigPanel
