
export interface JsonInterface {
  controls: Control[]
}

export interface Control {
  name: string
  label: string
  id: string
  value: string | boolean
  type: string
}
