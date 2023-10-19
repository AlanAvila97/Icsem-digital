<template>
    <form id="contactGeneral" class="form-contact wow animate__animated animate__fadeInDown" 
          @submit.prevent="sendMail"  
          data-wow-delay="0.1s" data-wow-offset="10">
        <div class="covert-preload loader">
            <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
            <div class="alert alert-success d-none" role="alert">
                A simple success alert—check it out!
            </div>
        </div>
        <p class="title">Contacto 1 </p>
        <div class="d-flex text-desc">
            <p class="sinopsis ">
                Resuelve tus dudas
            </p>
        </div>
        <div class="d-flex text-desc">            
            <p class="message">
                Estas por contactarnos al correo  
            </p>
            <p class="mail">demo@prueba.com</p>
        </div>
        <div class="d-flex text-desc">            
            <p><Icon name="ic:baseline-local-phone" size="1rem" /></p>
            <p class="phone">
                55-55-55-55-55
            </p>
        </div>
        <label>
            <span>*Nombre Completo</span>
            <input id="Nombre" name="Nombre" required placeholder type="text" class="input">
        </label>
        <label class="d-none">
            <span>*Correo Nuestro</span>
            <input id="EmailIcsem" name="EmailIcsem" required placeholder type="text" value="demo@prueba.com" class="input">
        </label> 
        <div class="flex">                                                                                                    
            <label class="w-50">
                <span>*Correo Electrónico</span>
                <input id="Email" name="Email" required="" placeholder="" type="email" class="input">
            </label> 
            <label class="w-50">
                <span>*Número de Celular</span>
                <input id="Phone" name="Phone" required="" placeholder="" type="number" class="input">
            </label> 
        </div>  
        <div class="flex">                                                                                                    
            <label class="w-50">
                <span>*Estado</span>
                <select id="Estado" name="Estado" required  class="input select">
                    <template v-for="item in dataEstados" :key="item?.clave">
                        <option :value="item?.clave">{{ item?.nombre }}</option>
                    </template>
                </select>
            </label> 
            <label class="w-50">
                <span>*Empresa / Razón Social</span>
                <input id="Company" name="Company" required="" placeholder="" type="text" class="input">
            </label> 
        </div>  
        <label>
            <span>*Asunto</span>
            <textarea id="Asunto" name="Asunto" class="input textarea" required="" cols="30" rows="10"></textarea>
        </label>                
        <button class="submit">Enviar</button>

    </form>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    // 
    const { getElement, fetchInfoIcsem } = DataGlobal; 
    // 
    const jsonEstados = await fetchInfoIcsem('Estados');
    // 
    const { data: dataEstados } = await useFetch(jsonEstados)
    // 
    const scriptURLFormation = '';
    // 
    const sendMail = (e) => {
        e.preventDefault();    
        // 
        let sendData = new FormData();            
        let Name = e.srcElement[0].value; 
        let MailIcsem = e.srcElement[1].value; 
        let Mail = e.srcElement[2].value; 
        let Phone = e.srcElement[3].value; 
        let Estate = e.srcElement[4].value; 
        let Company = e.srcElement[5].value; 
        let Asunto = e.srcElement[6].value; 

        sendData.append("Nombre", Name);
        sendData.append("CorreoIcsem", MailIcsem);
        sendData.append("Correo", Mail);
        sendData.append("Phone", Phone);
        sendData.append("Estate", Estate);
        sendData.append("Company", Company);
        sendData.append("Asunto", Asunto);

        console.log(Name);
        console.log(MailIcsem);
        console.log(Mail);
        console.log(Phone);
        console.log(Estate);
        console.log(Company);
        console.log(Asunto);  
        
        // fetch(scriptURLFormation, { method: 'POST', body: sendData })
        
        // .then(function(response){
        //     console.log(message);
        // }).catch(
        //     // error => alertify.error("Ocurrio un error en el registro")
        // );
    }
        
    onMounted(() => {

    });

</script>

<style scoped>
.covert-preload{
    width: 100%;
    background: #8a8a8a7d;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    border-radius: 20px;
}
.loader {
    --path: #2a3a41;
    --dot: #0d8184;
    --duration: 3s;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}
.loader:before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--green-light-color);    
    transform: translate(-18px, 0px);
    animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.loader svg {
    display: block;
    width: 44px;
    height: auto;
}
.loader svg rect, 
.loader svg polygon, 
.loader svg circle {
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
}
.loader svg circle {
    stroke-dasharray: 150 50 150 50;
    stroke-dashoffset: 75;
    animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
@keyframes dotRect {
    25% {
        transform: translate(0, 18px);
    }

    50% {
        transform: translate(18px, 0px);
    }

    75% {
        transform: translate(0, -18px);
    }
    
    100% {
        transform: translate(-18px, 0px);
    }
}
@keyframes pathCircle {
    25% {
      stroke-dashoffset: 125;
    }
  
    50% {
      stroke-dashoffset: 175;
    }
  
    75% {
      stroke-dashoffset: 225;
    }
  
    100% {
      stroke-dashoffset: 275;
    }
}
</style>