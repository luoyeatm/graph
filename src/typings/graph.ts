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
    max?:string
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
    type: string  //表单加载类型
    attr?: string
    save?: string //数据库存储字段名
    marks?: object  
    defult?: any  //默认值
    data?: any  //采用json存储
    init?: boolean  
    algorithm?: Algorithm
    dom?: (elem:HTMLElement,value?:any)=> any // value 存在 则setValue 否则 return getValue
    func?: (node?:Node,value?:any)=>any  // value 存在 则setValue 否则 return getValue
  }
  //算法类型 
export type Algorithm = {
  run(node: Node,graph: Graph, active: string, data: string):void //运行时方法
  form: NodeFormItem[] //设置表单
}