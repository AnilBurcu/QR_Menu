//* Diğer dosylaradan alınan veriler
import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById('buttons');
//* Datayı global scope'da tanımla
let data;

//* Menü verilerini json dosyasından çeken fonk
async function fetchMenu() {
    //* api'den verileri al
    const res = await fetch("./db.json");

    //* json verisini js'e çevirme
    data = await res.json();
}

//* Olay izle
// DomContentLoaded html yüklendiğinde çalışır ve fetch yapmak için en doğru zaman odur.
// Yalnızca load kullanırsak tüm içeriklerin yüklenmesini bekler.(ikon,resim vs)
document.addEventListener('DOMContentLoaded', async () => {
    //Ekrana butonlari bas
    renderButtons('');
    //Verileri çeken fonk çalıştır
    fetchMenu()
        // Fonksiyon başarılı olursa ekrana kartları basan fonk. çalıştır
        .then(() => renderMenuItems(data.menu));
});

//* Butonlara tıklanma olayı izle
buttonsArea.addEventListener('click', (e) => {
    // Tıklanılan butonu belirleme ve sadece butonlara tıklanınca çalışır.
    if (e.target.id == 'buttons') return;

    // active olan butonu belirlemek icin butonlari tekrar ekrana bas
    renderButtons(e.target.innerText);

    // Filtrelenecek kategori ismini belirleme
    const selectedCategory = e.target.dataset.id;

    if (selectedCategory === 'all') {
        // Bütün menü elemanlarını filtrelemeden ekrana bas
        renderMenuItems(data.menu);
    } else {
        // Ürünlerin arasından kategori isme bizim seçtiğimize eşit olanları al.
        const filtered = data.menu.filter((item) => item.category === selectedCategory);
        // Filtrelenen verileri ekrana bas
        renderMenuItems(filtered);
    }
})

