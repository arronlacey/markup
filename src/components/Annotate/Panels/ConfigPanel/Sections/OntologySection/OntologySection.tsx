import { Header } from "@markup/helpers"

function OntologySection(): JSX.Element {
  return (
    <>
      <Header message="Ontology" />

      <div>
        <input
          placeholder="Search ontology"
          className="config-input"
        />
      </div>
    </>
  )
}

export { OntologySection }
