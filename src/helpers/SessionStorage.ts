enum SessionStorage {
    IsReady = "isReady",
    Quantity = "quantity",
    Config = "conf",
    DocumentN = "doc",
    AnnotationN = "ann",
}

interface SessionDocument {
    name: string,
    text: string,
    annotations: string,
}

export { SessionStorage }

export type { SessionDocument }
