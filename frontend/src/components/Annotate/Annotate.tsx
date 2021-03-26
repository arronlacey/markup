import { Redirect } from "react-router"

import "@markup/components/Annotate/Annotate.css"
import Endpoint from "@markup/helpers/Endpoint"

function Annotate() {
  if (localStorage.getItem('isSetup') != null) {
    return <h1>Annotate</h1>
  } else {
    return <Redirect to={Endpoint.SetupForm}></Redirect>
  }
}

export default Annotate