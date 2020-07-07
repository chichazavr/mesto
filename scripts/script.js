const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__info-editbutton')
const popupCloseButton = popup.querySelector('.popup__close')
const header = document.querySelector('.popup_opened')

const popupToggle = function (event) {
  console.log('button clicked')
  event.stopPropagation()
  popup.classList.toggle('popup_opened')
}

const closePopupByClickingOverlay = function (event) {
  if (event.target !== event.currentTarget) { return }
  popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupByClickingOverlay)

header.addEventListener('click', function () {
  console.log('header clicked')
})