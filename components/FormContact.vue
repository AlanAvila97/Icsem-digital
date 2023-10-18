<template>
    <form id="contactGeneral" class="form-contact wow animate__animated animate__fadeInDown" 
          data-wow-delay="0.1s" data-wow-offset="10">
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
        <button class="submit">Submit</button>
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
    onMounted(() => {
        getElement('#contactGeneral').addEventListener('submit', (e) => {
            e.preventDefault();
            let sendData = new FormData();            
            let Name = e.srcElement[0].value; 
            let MailIcsem = e.srcElement[1].value; 
            let Mail = e.srcElement[2].value; 
            let Phone = e.srcElement[3].value; 
            let Estate = e.srcElement[4].value; 
            let Company = e.srcElement[5].value; 
            let Asunto = e.srcElement[6].value; 

            sendData.append("Nombre", Nombre);
            sendData.append("CorreoIcsem", CorreoIcsem);
            sendData.append("Correo", Correo);
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
        });
    });

</script>

<style scoped>

</style>