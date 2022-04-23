import { apiService } from "./service/service"

export const getData = (id)=>{
    return apiService('GET','product',null,id)
}