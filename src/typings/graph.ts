import type {Node,Graph} from "@antv/x6"
export type NodeType = {
    nodeId?: string
    title?: string
    dataurl?: string
    data?: string
    active?: string
    graphId?: string
    num?: string
    pre?: string
    after?: string
    type?: string
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
    save?: string
    marks?: object
    defult?:any
    algorithm?: Algorithm
    dom?: (elem:HTMLElement,value?:any)=> any // value 存在 则setValue 否则 return getValue
    func?: (node?:Node,value?:any)=>any  // value 存在 则setValue 否则 return getValue
  }
  //算法类型 
export type Algorithm = {
  run(node: Node,graph: Graph, active: string, data: string):void //运行时方法
  form: NodeFormItem[] //设置表单
}