import { Schema } from 'koishi'

export function apply() {}

export const name = 'schema-guide'
export const filter = false

export const usage = `
## 插件说明

这个插件并不会做任何事情。它的配置本身就是一份编写插件配置的指南。

如果你发现下方的某些配置项显示不正常，那么你可能需要更新你的 console 插件版本，或者点击顶部的按钮进行问题反馈。

现在让我们开始吧！
`

export const Config: any = Schema.intersect([
  Schema.object({
    "Schema.string()": Schema.string().description('字符串类型。'),
    'Schema.number()': Schema.number().description('数值类型。'),
    'Schema.boolean()': Schema.boolean().description('布尔类型。'),
  }).description('基础类型'),
  Schema.object({
    "Schema.string().role('secret')": Schema.string().role('secret').description('这是一个密码。点击右侧的图标可以切换显示 / 隐藏。'),
    "Schema.string().role('link')": Schema.string().role('link').description('这是一个链接。点击右侧的图标可以前往对应的网址。'),
    "Schema.string().role('textarea')": Schema.string().role('textarea').description('你可以在下方输入多行文本。'),
    "Schema.number().min(0).max(1).role('slider')": Schema.number().min(0).max(1).role('slider').description('拖动滑块修改数值。别忘了设置最大和最小值。'),
  }).description('改变外观'),
  Schema.object({
    'Schema.array(String)': Schema.array(String).description('一个由字符串构成的数组类型。'),
    'Schema.dict(Number)': Schema.dict(Number).description('一个由数值构成的字典类型。'),
  }).description('复合类型'),
  Schema.object({
  }).description('示例：类型联动'),
])
