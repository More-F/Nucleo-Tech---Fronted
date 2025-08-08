const axios = require('axios');

const token = 'TU_TOKEN_DE_ACCESO';
const numeroTel = 'TU_PHONE_NUMBER_ID';
const to = '573162686155';

axios.post(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
  messaging_product: "whatsapp",
  to: to,
  type: "text",
  text: { body: "Hola, gracias por contactarnos 😊" }
}, {
  headers: { Authorization: `Bearer ${token}` }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));