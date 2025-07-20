SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
SHEET_TITLE = 'Contact';

FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

let sheetPhoneNumber;

fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    sheetPhoneNumber = formatPhoneNumber(data.table.rows[1].c[3].v);


  });

function sendMessage(productTitle, productPrice) {
  const phoneNumber = sheetPhoneNumber; 
  const message = `Halo, Saya tertarik dengan produk ${productTitle} dengan harga ${productPrice}.`; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

function sendMessageBuyback(productTitle, productPrice) {
  const phoneNumber = sheetPhoneNumber; 
  const message = `Halo, Saya tertarik menjual produk ${productTitle} dengan harga ${productPrice}.`; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

function formatPhoneNumber(phoneNumber) {
  let cleaned = phoneNumber.replace(/[^+\d]/g, '');

  if (cleaned.startsWith('0')) {
    cleaned = '+62' + cleaned.slice(1);
  } else if (cleaned.startsWith('+62')) {

  } else if (!cleaned.startsWith('+')) {
    cleaned = '+62' + cleaned;
  }

  return cleaned;
}