import {ref, onMounted, onBeforeUpdate, onBeforeUnmount} from 'vue';
export const actionPreload = () => {
    const getElement = (element) => {
        return document.querySelector(element);
    }
    const statusPreload = onBeforeUnmount((type) => {
        const divPreload =  getElement('.'+type);
        let body = getElement('body');
            body.classList.add('overflow-hidden')
        if(divPreload){                
            divPreload.classList.remove("class","preloader-fade");	        
            divPreload.classList.remove("class","d-none");	        
        }
    });
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