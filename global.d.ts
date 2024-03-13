type Messages = typeof import("./messages/en.json")
type EsMessages = typeof import("./messages/es.json")

declare interface IntlMessages extends Messages,EsMessages {}