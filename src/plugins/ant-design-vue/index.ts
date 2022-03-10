import type { App } from "vue"

import { Layout, Menu, Breadcrumb, Form, Result, Button, Input, Checkbox, message, Drawer, Slider, Row, Col ,Table,Modal,Popconfirm,List,Card} from 'ant-design-vue';

const antdComponents = [
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Result,
  Button,
  Input,
  Checkbox,
  Drawer,
  Slider,
  Row, 
  Col,
  Table,
  Modal,
  Popconfirm,
  List,
  Card
]

// 应用组件
export function useAntd(app: App) {
  // 循环应用
  antdComponents.forEach(com => {
    app.use(com)
  })
  app.config.globalProperties.$message = message;
}