

const profileInfo = document.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__open-popup-editor');
const profileName = profileInfo.querySelector('.profile__name');
const profileCaption = profileInfo.querySelector('.profile__caption');


const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-popup-editor');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__name')
const captionInput = popup.querySelector('.popup__caption')
const overlay = popup.querySelector('.popup__overlay')



function popupOpen() {
  popup.classList.add('popup_opened')
}

function popupClose() {
  popup.classList.remove('popup_opened')
}

function popupBio(userName, userCaption) {
  nameInput.value = userName;
  captionInput.value = userCaption;

  console.log("popupBio " + userName)
  console.log("popupBio " + userCaption)

  popupOpen();
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileCaption.textContent = captionInput.value;

  popupClose();
}


editButton.addEventListener('click', () => popupBio(profileName.textContent, profileCaption.textContent));

closeButton.addEventListener('click', () => popupClose());
overlay.addEventListener('click', () => popupClose());

formElement.addEventListener('submit', formSubmitHandler);