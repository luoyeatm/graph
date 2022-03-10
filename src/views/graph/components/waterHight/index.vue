<template>
    <div ref="box"></div>
</template>
<script>
import {onMounted,ref} from 'vue'
import view from "@/template/viewModel"
import { number } from 'echarts'
export default {
    props: {
        data:Number,
        color:String
    },
    setup(props,context) {
        const box = ref(null)

        onMounted(()=>{
            console.log(props)
           box.value.append( view.detailWaterHight(props.data,props.color))
        })
       return {
           box
       }

    },
}
</script>
