SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
SHEET_TITLE = 'Buyback_Grid';

FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

//Buyback Grid
fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    let buyback_wrapper = document.getElementById('buyback-grid');

    length = data.table.rows.length;

    let buyback_price_update = document.getElementById('price-update');
    buyback_price_update.innerHTML = `Perubahan Terakhir: ${data.table.rows[0].c[4].f}`;

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
        product_card.className = 'buyback-block';

        let buyback_group = document.createElement('div');
        buyback_group.className = 'buyback-group';
        
        

        let background_card = document.createElement('img');
        background_card.className = 'buyback-background';
        background_card.src = 'assets/buyback-background-vertical.svg';

        let product_image = document.createElement('img');
        product_image.className = 'buyback-product-image';
        product_image.src = `https://drive.google.com/thumbnail?id=${image_id}&sz=s4000`;
        
        let product_title = document.createElement('p');
        product_title.className = 'buyback-title';
        product_title.innerHTML = data.table.rows[i].c[0].v;

        let product_price = document.createElement('p');
        product_price.className = 'buyback-text';
        const formattedBuybackPrice = formatBuybackCurrency(data.table.rows[i].c[1].v);
        product_price.innerHTML = formattedBuybackPrice;

        let buy_button = document.createElement('button');
        buy_button.className = 'buyback-button';
        buy_button.onclick = () => sendMessageBuyback(data.table.rows[i].c[0].v, formattedBuybackPrice);

        let whatsapp_icon = document.createElement('img');
        whatsapp_icon.className = 'buyback-whatsapp';
        whatsapp_icon.src = 'assets/whatsapp-icon.svg';

        let button_text = document.createElement('p');
        button_text.className = 'buyback-text-button';
        button_text.innerHTML = 'Jual Sekarang!';

        //appendChild
        buyback_group.appendChild(product_image);
        buyback_group.appendChild(product_title);
        buyback_group.appendChild(product_price);

        buy_button.appendChild(whatsapp_icon);
        buy_button.appendChild(button_text);

        buyback_group.appendChild(buy_button);

        product_card.appendChild(background_card);

        product_card.appendChild(buyback_group);
        buyback_wrapper.appendChild(product_card);

        document.querySelectorAll('.buyback-product-image').forEach(image=>{
          image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
          }
        });

      }
    }
  });

  