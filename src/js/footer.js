

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
  modal.classList.remove('.is-open')
})

const closeModal = () => {
  footer-modal.classList.add("is-open");
  footer-backdrop.classList.add("is-open");
};

closeModalBtn.addEventListener('click', closeModal);

footer-backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

/*const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",

    message: ""
};

populateForm();

// Відстеження подій на формі
form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

// Функція для обробки введення даних у форму
export function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();

    formData[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    console.log(key, value);
}

export function populateForm() {
  let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
      form.elements[key].value = savedFeedbackData[key];
      formData[key] = savedFeedbackData[key];
  }
}

export function handleFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
      return;
    }
    localStorage.removeItem(STORAGE_KEY)

    event.currentTarget.reset()
}*/
/*відкрити модальне вікно*/
/*openModalBtn.addEventListener("click", function () {
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
});*/
  
  










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


