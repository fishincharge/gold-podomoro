SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
SHEET_TITLE = 'Bukti_Transaksi';

FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    let card_wrapper = document.getElementById('card-wrapper');

    length = data.table.rows.length;

    for(let i = 1; i<length; i++){
      let row = data.table.rows[i];
      
      if(row.c[0] && row.c[0].v){
        let sheet_image_link = data.table.rows[i].c[0].v;

        let regex = /\/d\/(.*?)\//;
        let match = sheet_image_link.match(regex);
        let image_id;

        if (match && match[1]) {
          image_id = match[1];
        }
        
        //create element
        let product_card = document.createElement('div');
        product_card.className = 'card swiper-slide';

        let product_image = document.createElement('img');
        product_image.className = 'bukti-transaksi-image';
        product_image.src = `https://drive.google.com/thumbnail?id=${image_id}&sz=s4000`;

        //appendChild
        product_card.appendChild(product_image);
        card_wrapper.appendChild(product_card);

        document.querySelectorAll('.swiper-slide img').forEach(image=>{
          image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
          }
        });

      }
    }
  });