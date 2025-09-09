function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getFormattedGoldPrice() {
  try {
      const response = await fetch('https://logam-mulia-api.vercel.app/prices/anekalogam', {
          method: 'GET',
          mode: 'cors', // Explicitly request CORS
          headers: {
              'Content-Type': 'application/json',
          }
      });
      
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      const sellValue = data.data[0].sell;
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = currentDate.getFullYear();
      

      const formattedDate = `${day}/${month}/${year}`;

      const numberFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });

      const formattedSellValue = numberFormat.format(sellValue);

      const formattedString = `Harga Emas ${formattedDate}: ${formattedSellValue}/g`;

      
      console.log(formattedString);
      
      let harga_emas = document.getElementById('harga-emas-text');
      harga_emas.innerHTML = formattedString;
    
  } catch (error) {
      console.error('Error fetching or processing data:', error);
      // Fallback content
      let harga_emas = document.getElementById('harga-emas-text');
      harga_emas.innerHTML = 'Harga emas tidak dapat dimuat saat ini';
  }
}

getFormattedGoldPrice();


