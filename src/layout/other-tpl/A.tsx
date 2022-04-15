// 注意：这是一个 .tsx 文件
import { defineComponent } from 'vue'

const ChildTSX = defineComponent({
  setup() {
    // 获取插槽数据
    // const slots = useSlots()

    // 渲染组件
    return () => (
      <div>
        Tsx 渲染
        {/* 渲染默认插槽 */}
        {/* <p>{ slots.default ? slots.default() : '' }</p> */}

        {/* 渲染命名插槽 */}
        {/* <p>{ slots.msg ? slots.msg() : '' }</p> */}
      </div>
    )
  },
})

export default ChildTSX
