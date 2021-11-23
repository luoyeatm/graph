/**
 * 测试接口列表
 */

import base from "../base"; // 导入接口域名列表
import axios from "../../utils/request"; // 导入request中创建的axios实例
import { GraphType, NodeType } from "@/typings/graph";

const graphApi = {
    /**
     * 获取graph
     * @param params 
     */
    pages() {
        return axios.post(`${base.baseUrl}/graph/pages`)
    },
    saveOrUpdate(graph: GraphType) {
        return axios.post(`${base.baseUrl}/graph/saveOrUpdate`, graph)
    },
    saveJson(body: { json: string, id: string }) {
        return axios.post(`${base.baseUrl}/saveJson`, body)
    },
    readJson(body: { id: string }) {
        return axios.post(`${base.baseUrl}/readJson`, body)
    }
};

export default graphApi;
