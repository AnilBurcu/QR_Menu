import { buttonData } from './constants.js';


const buttonsArea = document.getElementById('buttons')
//menuList divini çağırma
const menuList = document.getElementById('menu-list')


//* Arayüz değişikliği yapan bütün fonksiyonları burada kullanacağız
export const renderMenuItems = (data) => {
  //* Data dizisindeki her bir obje için 1 tane card html'i oluşturma(div)
  //* Oluşturulan Cardlaro #menuList divinin içine aktar/


  // join metodu dizi'yi string'e çevirmemizi sağladı
  const cardsHTML = data.map(
    (item) => `
    <a
        id="card"
        href="/detail.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div >
    <p class="lead">
        ${item.desc}
    </p>
        </div >
      </a >
    `
  ).join('');

  menuList.innerHTML = cardsHTML;
};

// Dizideki her bir eleman icin ekrana buton basan fonk
//activeText ile hangisinin secildigini belirleme
export const renderButtons = (activeText) => {
  //eskiden olusturulan butonlari kaldiran fonk.
  buttonsArea.innerHTML = '';
  // butonlarin her biri icin asagidaki adimlari izliyoruz
  buttonData.forEach((btn) => {
    // 1-buton elementi olustur
    const buttonElement = document.createElement("button");
    // 2-class belirle
    buttonElement.className = "btn btn-outline-dark";
    // 3-data-id degerini tanimla
    buttonElement.setAttribute("data-id", btn.value)
    // 4-icindeki yaziyi belirle
    buttonElement.innerText = btn.text
    // 5-eger butonun yazisi aktif yazi ile eslesirse arkaplani siyah yap
    if (btn.text === activeText) {
      buttonElement.classList.add('btn-dark', 'text-white')
    }
    // 6-butonu html'e gonder
    buttonsArea.appendChild(buttonElement)
  })
}


/* 
<button data-id="breakfast" class="btn btn-outline-dark">Kahvaltı</button>
*/