function NewTab(props: any): JSX.Element {
  return (
    <a
      href={props.endpoint}
      rel="noreferrer"
      target="_blank"
    >
      {props.text}
    </a>
  )
}

export { NewTab }
