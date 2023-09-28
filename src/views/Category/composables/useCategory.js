//封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async () => {
        const res = await getCategoryAPI(route.params.id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    watchEffect(() => {
        getCategory()
    })

    return {
        categoryData
    }
}