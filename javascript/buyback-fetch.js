let SHEET_ID = '1EnPypH2qQl_f64K1KiDkrhRgYlz3BOpoJ9VzYGIFVhU';
let SHEET_TITLE = 'Buyback_Table';

let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        let buyback_product_title = document.getElementById('buyback-product-title');
        let buyback_product_price_title = document.getElementById('buyback-product-price-title');
        let buyback_table = document.getElementById('buyback-table');

        let length = data.table.rows.length;

        buyback_product_title.innerHTML = data.table.cols[0].label;
        buyback_product_price_title.innerHTML = data.table.cols[1].label;


        console.log(data.table.cols[0].label);
        

        for (let i = 0; i < length; i++) {
            let row = data.table.rows[i];

            if (row.c[0] && row.c[0].v && row.c[1] && row.c[1].v) {
                let newRow = document.createElement('tr');
                newRow.id = "box" + i;

                let productBox = document.createElement('td');
                productBox.innerHTML = row.c[0].v;

                let priceBox = document.createElement('td');
                const formattedPrice = formatBuybackCurrency(row.c[1].v);
                priceBox.innerHTML = formattedPrice;

                newRow.appendChild(productBox);
                newRow.appendChild(priceBox);

                buyback_table.appendChild(newRow);
            }
        }

       

    });


function formatCurrency(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);
}

 
function formatBuybackCurrency(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value) + "/g";
}