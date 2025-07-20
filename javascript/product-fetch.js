SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
SHEET_TITLE = 'LM_Antam';

FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

//LM_Antam
fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    let lm_antam_wrapper = document.getElementById('lm-antam-wrapper');
    
    let product_grid = document.createElement('div');
    product_grid.className = 'product-grid swiper-slide';
    lm_antam_wrapper.appendChild(product_grid);

    let product_count = 0;

    let length = data.table.rows.length;

    for(let i = 0; i<length; i++){
      let row = data.table.rows[i];
      
      if(row.c[0] && row.c[0].v && row.c[1] && row.c[1].v && row.c[2] && row.c[2].v){
        let sheet_image_link = data.table.rows[i].c[2].v;

        let regex = /\/d\/(.*?)\//;
        let match = sheet_image_link.match(regex);
        let image_id;

        if (match && match[1]) {
          image_id = match[1];
        }
        
        //create element
        let product_card = document.createElement('div');
        product_card.className = 'product-card';

        let product_image = document.createElement('img');
        product_image.className = 'product-image';
        product_image.src = `https://drive.google.com/thumbnail?id=${image_id}&sz=s4000`;
        
        let product_title = document.createElement('p');
        product_title.className = 'product-title';
        product_title.innerHTML = data.table.rows[i].c[0].v;

        let product_price = document.createElement('p');
        product_price.className = 'product-price';
        const formattedPrice = formatCurrency(data.table.rows[i].c[1].v);
        product_price.innerHTML = formattedPrice;

        let buy_button = document.createElement('button');
        buy_button.className = 'product-buy-button';
        buy_button.onclick = () => sendMessage(data.table.rows[i].c[0].v, formattedPrice);

        let whatsapp_icon = document.createElement('img');
        whatsapp_icon.className = 'product-whatsapp-icon';
        whatsapp_icon.src = 'assets/whatsapp-icon.svg';

        let button_text = document.createElement('p');
        button_text.innerHTML = 'Buy Now';

        //appendChild
        product_card.appendChild(product_image);
        product_card.appendChild(product_title);
        product_card.appendChild(product_price);

        buy_button.appendChild(whatsapp_icon);
        buy_button.appendChild(button_text);
        product_card.appendChild(buy_button);
        
        product_grid.appendChild(product_card);
        product_count++;

        
        if(product_count >= 6){  
          if(length > 7){
            product_grid = document.createElement('div');
            product_grid.className = 'product-grid swiper-slide';
            lm_antam_wrapper.appendChild(product_grid);
            product_count = 0;
          }
        }

        document.querySelectorAll('.swiper-slide img').forEach(image=>{
          image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
          }
        });
        
      }
    }
  });