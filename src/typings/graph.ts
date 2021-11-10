export type NodeType = {
    nodeId?: string
    title?: string
    dataurl?: string
    data?: string
    active?: string
    graphId?: string
  }
  
  export type GraphType = {
    graphId?: string
    width?: string
    height?: string
    name?: string
  }
  
  export type NodeFormItem = {
    name: string
    label: string
    type: string
    attr?: string
    save?: boolean
    marks?: object
    val?: string
    func?: string
    prop?:string
    defult?:any
    algorithm?: NodeFormItem[]
  }