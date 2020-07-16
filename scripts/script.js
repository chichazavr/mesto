
//элементы popup
const popup = document.querySelector('.popup');
// // форма popup
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__item_name')
const captionInput = popup.querySelector('.popup__item_caption')

//элементы profile
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__info-name');
const profileCaption = profileInfo.querySelector('.profile__info-caption');

//подъехали кнопки
const editButton = profileInfo.querySelector('.profile__info-editbutton');
const closeButton = popup.querySelector('.popup__close');
const overlay = popup.querySelector('.popup__overlay')


//открытие окна
function popupOpen() {
    popup.classList.add("popup_opened");

    //переменные
    let name = profileName.textContent
    let caption = profileCaption.textContent
    
    nameInput.value = name;
    captionInput.value = caption;   

}

//закрытие окна
function popupClose() {
    popup.classList.remove("popup_opened");
}

//не понял что это, но это надо
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileCaption.textContent = captionInput.value

    popupClose()
}


//исполнение функции
overlay.addEventListener('click', popupClose);
closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);