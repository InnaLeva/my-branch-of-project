

import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.form-comments');
const message = document.getElementById('emailSuccessMessage');

const openModalBtn = document.querySelector('.footer-form-button');
const charCount = document.getElementById('charCount');


const closeModalBtn = document.querySelector('.footer-close-button');
const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');
const modalTitle = document.querySelector('.footer-backdrop-title');
const modalText = document.querySelector('.footer-backdrop-text');


emailInput.addEventListener('blur', validateEmail);


commentsInput.addEventListener('input', () => {
  const currentLength = commentsInput.value.length;

  if (window.matchMedia('(min-width: 768px)').matches) {
    charCount.style.display = 'block';
  }

  charCount.textContent = `${currentLength}`;

  validateEmail();
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  charCount.style.display = 'none';

  modalContent.classList.remove('is-open');
  footerModal.classList.remove('is-open');

  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

  axios.post('/requests', {
    email: emailInput.value.trim(),
    comment: commentsInput.value.trim()
  })
    .then(response => {
      modalTitle.textContent = response.data.title;
      modalText.textContent = response.data.message;
    })
    .catch((error) => {
      iziToast.show({
          message: error.response?.data?.message || error.message || 'An error occurred',
          backgroundColor: "#ef4040",
          position: "topRight",
          messageSize: 16,
          messageColor: '#fff',
          messageLineHeight: "150%",

          timeout: 4000
        });
    })
    .finally(() => {
      form.reset();
      charCount.textContent = '0';
      emailInput.classList.remove('error');
      emailInput.classList.remove('success');
      message.textContent = '';
      openModalBtn.disabled = true;
    })

})



function validateEmail() {
  if (emailInput.checkValidity() && emailInput.value.trim() !== "") {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    message.textContent = 'Success!';
    message.style.color = '#3cbc81';

    }  else  {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    message.textContent = 'Invalid email, try again';
    message.style.color = '#e74a3b';
  }

    const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== "";
    const isCommentFilled = commentsInput.value.trim() !== "";
    openModalBtn.disabled = !(isEmailValid && isCommentFilled);
}


openModalBtn.addEventListener('click', () => {
  modalContent.classList.remove('.is-open')
})

const closeModal = () => {
  modalContent.classList.add("is-open");
  footerModal.classList.add("is-open");
};

closeModalBtn.addEventListener('click', closeModal);

footerModal.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

