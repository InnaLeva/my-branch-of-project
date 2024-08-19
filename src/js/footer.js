
import SimpleLightbox from "simplelightbox";
 import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.footer-form');
const input = document.querySelector('.footer-form-label-input');
const openModalBtn = document.querySelector('.footer-form-button');
const closeModalBtn = document.querySelector('.footer-close-button');

const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');



const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};

populateForm();

// Відстеження подій на формі
form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

// Функція для обробки введення даних у форму
function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();

    formData[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    console.log(key, value);
}

function populateForm() {
  let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
      form.elements[key].value = savedFeedbackData[key];
      formData[key] = savedFeedbackData[key];
  }
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
      return;
    }
    localStorage.removeItem(STORAGE_KEY)

    event.currentTarget.reset()
}
/*відкрити модальне вікно*/
openModalBtn.addEventListener('click', function () {
    footerModal.classList.add("is-open")
})
//закрити модільне вікно
closeModalBtn.addEventListener('click', function () {
    footerModal.classList.remove('is-open')
})
//закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
    footerModal.classList.remove('is-open')
    }
})
//закрити модальне вікно при натисканні поза ним
document.querySelector('.footer-backdrop .footer-modal').addEventListener('click', event => {
    event._isClickWithInModal = true;
});

footerModal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('is-open');
});
  
  










/*else {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
  }*/

/*sendBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    modalContent.classList.add('is-open');
});

closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendBtn.classList.remove('is-open');
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
})*/



/*const footerModal = () => {
    const refs = {
        openModalBtn: document.querySelector('.footer-form-button'),
        closeModalBtn: document.querySelector('.footer-close-button'),
        modal: document.getElementById('modal'),
        modalContent: document.querySelector('footer-modal'),
    };

    refs.openModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  }
    );
    window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (!refs.modal.classList.contains('is-hidden')) {
        toggleModal();
      }
    }
    });
    function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
    }
    
    const form = document.querySelector('.footer-form');
    const inputs = form.querySelector('.footer-form-label-input');

    inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      validateInput(input);
      checkFormValidity();
    });
    });
    function validateInput(input) {
    if (input.checkValidity()) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  }
  function checkFormValidity() {
    let isValid = true;

    inputs.forEach(function (input) {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });

    if (isValid) {
      sendBtn.removeAttribute('disabled');
    } else {
      sendBtn.setAttribute('disabled', 'disabled');
    }
    }
    form.addEventListener('submit', function (event) {
    event.preventDefault();

        if (form.checkValidity()) {
            const formData = {
                email: form.email.value.trim(),

                comment: form.comment.value.trim(),

                comment: form.comment.value.trim()
            };
        
            if (
                formData.name === '' ||
                formData.phone === '' ||
                formData.email === ''
            ) {
                Notiflix.Report.failure('Please fill out all required fields.');
                return;
            }
        
            form.reset();

            setTimeout(() => {
                toggleModal();
            }, 1000);
            } else {
      Notiflix.Report.failure('Please enter valid data.');
    }
  });
    
        // Збереження даних у localStorage
  function saveFormDataToLocalStorage(formData) {
    const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    storedData.push(formData);
    localStorage.setItem('storedData', JSON.stringify(storedData));
  }
};

orderModal();
export default orderModal;*/


