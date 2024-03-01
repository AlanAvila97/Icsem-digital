<template>
  <form
    id="contactGeneral"
    class="form-contact wow animate__animated animate__fadeInDown"
    @submit.prevent="sendMail"
    data-wow-delay="0.1s"
    data-wow-offset="10"
  >
    <div class="covert-preload loader d-none">
      <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32"></circle>
      </svg>
      <div id="alert_mail" class="alert alert-dismissible fade show d-none" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> -->
      </div>
    </div>
    <p class="title">{{ props?.info?.nombre }}</p>
    <div class="d-flex text-desc">
      <p class="sinopsis">
        {{ props?.info?.puesto }}
      </p>
    </div>
    <div class="d-flex text-desc">
      <p class="message">Estas por contactarnos al correo</p>
      <p class="mail">{{ props?.info?.correo }}</p>
    </div>
    <div class="d-flex text-desc">
      <p><Icon name="ic:baseline-local-phone" size="1rem" /></p>
      <p class="phone">
        {{ props?.info?.numero }}
      </p>
    </div>
    <label>
      <span>*Nombre Completo</span>
      <input
        id="Nombre"
        name="Nombre"
        required
        placeholder
        type="text"
        class="input"
      />
    </label>
    <label class="d-none">
      <span>*Correo Nuestro</span>
      <input id="EmailIcsem" name="EmailIcsem" required placeholder type="text" :value="props?.info?.correo" class="input" />
      <input id="AsuntoCorreo" name="AsuntoCorreo" required placeholder type="text" :value="props?.info?.nombre" class="input" />
    </label>
    <div class="flex">
      <label class="w-50">
        <span>*Correo Electrónico</span>
        <input
          id="Email"
          name="Email"
          required=""
          placeholder=""
          type="email"
          class="input"
        />
      </label>
      <label class="w-50">
        <span>*Número de Celular</span>
        <input
          id="Phone"
          name="Phone"
          required=""
          placeholder=""
          type="number"
          class="input"
        />
      </label>
    </div>
    <div class="flex">
      <label class="w-50">
        <span>*Estado</span>
        <select id="Estado" name="Estado" required class="input select">
          <template v-for="item in dataEstados" :key="item?.clave">
            <option :value="item?.clave">{{ item?.nombre }}</option>
          </template>
        </select>
      </label>
      <label class="w-50">
        <span>*Empresa / Razón Social</span>
        <input
          id="Company"
          name="Company"
          required=""
          placeholder=""
          type="text"
          class="input"
        />
      </label>
    </div>
    <label>
      <span>*Asunto</span>
      <textarea
        id="Asunto"
        name="Asunto"
        class="input textarea"
        required=""
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <button class="submit">Enviar</button>
  </form>
</template>

<script setup>
// Vue
import { onMounted } from "vue";
// Global Data (Pinia)
import { dataGlobal } from "@/store/globalData";
import {infoGlobal} from '@/store/jsonData'
//
const DataGlobal = dataGlobal();
const InfoGlobal = infoGlobal();
//
const { getElement, fetchInfoIcsem, removeClass, addClassElement } = DataGlobal;
const { fetchEstados } = InfoGlobal; 
//
const props = defineProps({ info: Object });
//
const dataEstados = await fetchEstados();
//
// const scriptURLFormation = "./Admin/admin/assets/php/email/index.php";
const scriptURLFormation = "https://icsem.mx/Admin/admin/assets/php/email/index.php";
// const scriptURLFormation = 'https://icsem.mx/json/correo.php';
//
const sendMail = async (e) => {
  e.preventDefault();
  //
  let sendData = new FormData();
  let Name = e.srcElement[0].value; // Nombre del usuario
  let MailIcsem = e.srcElement[1].value; // Nuestro correo al que se le va a enviar
  let Asunto = e.srcElement[2].value; // Asunto
  let Mail = e.srcElement[3].value; // Correo del usuario
  let Phone = e.srcElement[4].value; // Numero del usuario
  let Estate = e.srcElement[5].value; // Estado del usuario
  let Company = e.srcElement[6].value; // Compañia del usuario
  let Mensaje = e.srcElement[7].value; // Asunto
  sendData.append("Nombre", Name);
  sendData.append("CorreoIcsem", MailIcsem);
  sendData.append("Correo", Mail);
  sendData.append("Phone", Phone);
  sendData.append("Estate", Estate);
  sendData.append("Company", Company);
  sendData.append("Asunto", Asunto);
  sendData.append("Mensaje", Mensaje);
  let preloader = getElement('.covert-preload');
      removeClass(preloader, 'd-none');
  try {
    await $fetch(scriptURLFormation, {
      method: "POST",
      body: sendData,
    })
      .then((response) => alertSendMail(response))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
const alertSendMail = (response) => {
  console.log(response)
  let alerta = getElement('#alert_mail')
  let preloader = getElement('.covert-preload');
  let preloader_svg = getElement('.covert-preload svg'); 
  var json_info = JSON.parse(response);
      addClassElement(preloader_svg, 'd-none');
      removeClass(alerta, 'd-none');      
  if(json_info.status) {
    addClassElement(alerta, json_info.type);
    alerta.innerText = json_info.message;    
    alertify.success(json_info.message);    
  }
  else {
    addClassElement(alerta, json_info.type);
    alerta.innerText = json_info.message;
    alertify.error(json_info.message);
  }
  window.setTimeout(function () {       
    addClassElement(preloader, 'd-none');
    removeClass(preloader_svg, 'd-none');      
    removeClass(alerta, 'alert-success');      
    removeClass(alerta, 'alert-danger');      
    addClassElement(alerta, 'd-none');
    document.getElementById("contactGeneral").reset();
  }, 2000);
}
onMounted(() => {});
</script>

<style scoped>
.covert-preload,
.covert-alert {
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
}
.loader:before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  display: block;
  background: var(--green-light-color);
  transform: translate(-18px, 0px);
  animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
    infinite;
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
  animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
    infinite;
}
.covert-alert{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.alert-success-mail{
  width: 100%;
  border-radius: 1rem;
  text-align: center;
  background: #d1e7dd;
  color: #75b798;
  border: 1px solid #7dffc4;
}
.alert-success-mail h4{
  font-size: calc(1rem + 1vh);
  margin: 0;
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