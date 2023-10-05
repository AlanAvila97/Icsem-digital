import {defineStore} from 'pinia'
// 
export const dataGlobal = defineStore('dataGlobal', () => {
    const getElement = (element) => {
        return document.querySelector(element);
    }  
    /**
     * @description Función 
    */   
    const getAllElement = (element) => {
        return document.querySelectorAll(element);
    }
    /**
     * @description Función 
    */ 
    const addClassElement = (element, typeClass) => {
        element.classList.add(typeClass);
    }
    /**
     * @description Función 
    */ 
    const addAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.add(typeClass);
        });
    }
    /**
     * @description Función 
    */ 
    const removeClass = (element, typeClass) => {
        element.classList.remove(typeClass);
    }
    /**
     * @description Función 
    */ 
    const removeAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.remove(typeClass);
        });
    }

    /**
     * @description Función para hace un scroll a una seccion del index (Blog, Podcast)
    */ 
    const scrollSection = (element, numTop) => {
        let scrollElement =  element.offsetTop;
        let posicionElement = String(scrollElement - numTop);
            window.scroll({
                            top: posicionElement,
                            behavior: 'smooth'
                            });
    }
    /**
     * @description Función 
    */ 
    const parseoTexto = (cadena) => {
        let txt = String(cadena);
        let textParser = txt.replaceAll(' ', '-');
              textParser = textParser.toLowerCase();
              textParser = eliminarAcentos(textParser);
        return eliminarCaracteres(textParser);
    }
    /**
     * @description Función 
    */ 
    const eliminarAcentos = (cadena) => {
        var chars={
            "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
            "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
            "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
            "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}
        var expr = /[áàéèíìóòúùñ]/ig;
        var res = cadena?.replace(expr,function(e){return chars[e]});
        return res; 
    }
    /**
     * @description Función 
    */     
    const eliminarCaracteres = (cadena) => {
        var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;
    }
    /**
     * @description Función 
    */     
    const fadeLoader = () => {
        const status =  true
        setTimeout(function(){
            return false;
        }, 1500);   
    }
    return{
        getElement,
        addAllClass,
        removeClass,
        scrollSection,
        getAllElement,
        removeAllClass,
        addClassElement,    
        eliminarCaracteres,
    }
});