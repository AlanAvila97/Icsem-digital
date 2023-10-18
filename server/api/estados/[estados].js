export default defineEventHandler(async (event) => {

    const {estados} = event.context.params;
    const path = `https://once.fabricaapps.com/js/${estados}.json`    
    try {
        const dataJson  = await $fetch(path);        
        return dataJson        
    } catch (error) {
        console.log(error);
        throw new Error(JSON.stringify(error));
    }
});