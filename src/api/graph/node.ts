/**
 * 测试接口列表
 */

 import base from "../base"; // 导入接口域名列表
 import axios from "../../utils/request"; // 导入request中创建的axios实例
import { GraphType, NodeType } from "@/typings/graph";
 
 const nodeApi = {
   /**
    * 获取graph
    * @param params 
    */
   lists(graph: GraphType) {
     return axios.post(`${base.baseUrl}/node/lists`,graph)
   },  
   saveOrUpdateBatch(nodes: NodeType[]) {
     return axios.post(`${base.baseUrl}/node/saveOrUpdateBatch`,nodes)
   },
   saveGraphVo(graphVo: {graph:GraphType,graphNodes:NodeType[],graphJson:string}) {
    return axios.post(`${base.baseUrl}/graph/saveGraphVo`,graphVo)
  }
 };
 
 export default nodeApi;
 