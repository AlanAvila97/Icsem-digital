import {defineStore} from 'pinia'
// 
export const dataGlobal = defineStore('dataGlobal', () => {
    /**
    * @description Funcion que obtiene un elemento html
    */   
    const getElement = (element) => {
        return document.querySelector(element);
    }  
    /**
     * @description Función agrega una clase varios elementos html
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
     * @description Función que remueve una clase de varios elementos html
    */ 
    const addAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.add(typeClass);
        });
    }
    /**
     * @description Función remueve una clase de un elemento html
    */ 
    const removeClass = (element, typeClass) => {
        element.classList.remove(typeClass);
    }
    /**
     * @description Función que remueve una clase de varios elementos html
    */ 
    const removeAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.remove(typeClass);
        });
    }
    /**
     * @description Función para hace un scroll a una seccion del index (Contacta, Experiencias)
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
     * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
     * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
     * @return {textParser} Retorna la cadena parseada
    */
    const parseoTexto = (cadena) => {
        let txt = String(cadena);
        let textParser = txt.replaceAll(' ', '-');
              textParser = textParser.toLowerCase();
              textParser = eliminarAcentos(textParser);
        return eliminarCaracteres(textParser);
    }
    /**
     * @description Función que parsea una cadena eliminando acentos
     * @param cadena Contiene la cadena con caracteres acentos
     * @return {res} Retorna la cadena parseada
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
     * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
     * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
     * @return {textParser} Retorna la cadena parseada
    */ 
    const eliminarCaracteres = (cadena) => {
        var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;
    }
    /**
     * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
     * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
     * @return {textParser} Retorna la cadena parseada
    */ 
   const initializationWow = () => {
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animate__animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow.init();
   }    
    return{
        getElement,
        addAllClass,
        removeClass,
        scrollSection,
        getAllElement,
        removeAllClass,
        addClassElement,    
        initializationWow,
        eliminarCaracteres,
    }
});