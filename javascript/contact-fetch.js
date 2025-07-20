SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
SHEET_TITLE = 'Contact';

FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

function extractSrcFromIframeString(iframeString) {
  const regex = /<iframe.*?src="(.*?)".*?>/i;
  const match = iframeString.match(regex);
  return match ? match[1] : null;
}

let sheetInstagramUsername;

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        let embed_maps = document.getElementById('id-embed-maps');
        let lokasi = document.getElementById('lokasi-id');
        let instagram = document.getElementById('instagram-account');
        let whatsapp = document.getElementById('whatsapp-number');

        const iframeString = data.table.rows[1].c[0].v;
        const src = extractSrcFromIframeString(iframeString);

        embed_maps.src = src;
        lokasi.innerHTML = data.table.rows[1].c[1].v;
        instagram.innerHTML = data.table.rows[1].c[2].v;
        whatsapp.innerHTML = data.table.rows[1].c[3].v;

        sheetInstagramUsername = formatInstagramProfile(data.table.rows[1].c[2].v);
        instagram.onclick = () => openInstagramProfile(sheetInstagramUsername);
        whatsapp.onclick = sendMessageContact;

    });

function openInstagramProfile(sheetInstagramUsername) {
  const url = `https://www.instagram.com/${sheetInstagramUsername}/`;
  window.open(url, '_blank');
}

function sendMessageContact() {
  const phoneNumber = sheetPhoneNumber; 
  const message = `Halo, Saya tertarik dengan produk - produk anda.`; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

function formatInstagramProfile(instagramUsername){
  if (instagramUsername.startsWith('@')) {
    return instagramUsername.slice(1);
  } 
  return instagramUsername;
}