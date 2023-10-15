export interface IIdentifiable {
  id: string
}

export interface IName {
  name: string
}

export type County = {
  name: string
} & IIdentifiable

export type IDWithName = IName & IIdentifiable
