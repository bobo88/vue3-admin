import { ComponentInternalInstance, getCurrentInstance } from "vue";

export default function useGetGlobalProperties (): Record<string, any> {
    const {appContext: {app: { config: { globalProperties }}}} = getCurrentInstance() as ComponentInternalInstance
    return {...globalProperties}
}