import {defineStore} from 'pinia'
// 
export const infoGlobal = defineStore('infoGlobal', () => {
    const fetchData = async(url) => {
        let infoUrl = `https://icsem.mx/Admin/admin/assets/php/json/${url}.json`
        try {
            const res = await fetch(`https://icsem.mx/Admin/admin/assets/php/json/${url}.json`)
            // const res = await fetch(`https://icsem.mx/Admin/admin/assets/php/json/api.json  `)
            // const res = await fetch(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json`)
            const data = await res.json()
            return data;                    
        } catch (error) {
            console.log(error);
        }
    }
    const fetchEstados = async() => {
        try {
            const res = await fetch(`https://icsem.mx/Admin/admin/assets/php/json/estados.json`);
            const data = await res.json()
            return data;                    
        } catch (error) {
            console.log(error);
        }
    }
    return{ fetchData, fetchEstados }
});