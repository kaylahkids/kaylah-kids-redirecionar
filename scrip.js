
function redirectToWhatsApp(phoneNumber) {
    // Codifique o número de telefone usando encodeURIComponent
    var encodedPhoneNumber = encodeURIComponent(phoneNumber);

    // Crie a URL do WhatsApp com o número codificado
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + encodedPhoneNumber;

    // Abra a URL do WhatsApp em uma nova janela (ou aba)
    window.open(whatsappUrl, '_blank');
  }