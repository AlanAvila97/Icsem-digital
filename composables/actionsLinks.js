import {ref, onMounted, onBeforeUpdate, onBeforeUnmount} from 'vue';
export const actionPreload = () => {
    /**
    * @description Funcion que obtiene un elemento html
    */   
    const getElement = (element) => {
        return document.querySelector(element);
    }
    /**
    * @description Funcion que comprueba el estatus del preloader
    * @param type Contiene el elemento html del preloader
    */  
    const statusPreload = onBeforeUnmount((type) => {
        const divPreload =  getElement('.'+type);
        let body = getElement('body');
            body.classList.add('overflow-hidden')
        if(divPreload){                
            divPreload.classList.remove("class","preloader-fade");	        
            divPreload.classList.remove("class","d-none");	        
        }
    });
    /**
    * @description Funcion que comprueba el estatus del preloader
    * @param element Contiene el elemento html del preloader
    * @param type Contiene la clase del preloader
    */  
    const hiddenPreoload = (element, type) => {
        let body = getElement('body');
            statusPreload(type);
            setTimeout(function(){
                body.classList.remove('overflow-hidden')
                element.classList.add("d-none");
            }, 1500); 
    };

    return{
        hiddenPreoload,
    }
    
}