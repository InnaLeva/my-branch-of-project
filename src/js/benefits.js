
const benefitsCards = [
  {
svgroot:
 './img/',
topic:
'Expertise',
text:
'As a highly experienced developer, I have deep knowledge of programming and website development.',
},
  {
svgroot:
 './img/',
topic:
'Communication',
text:
'Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
    },
  {
svgroot:
 './img/',
topic:
'Art',
text:
'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. ',
    },
  {
svgroot:
 './img/' ,
topic:
'Urgent execution',
text:
'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
},
]; 


const benefitsCardEl = document.querySelector('.benefits-list'); 

//створення картки

export function createCardMarkup(cards) {
    return cards.map(
        ({ svgroot, topic, text }) => `<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${svgroot}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${topic}</h5>
            <p class="benefits-text">${text}</p>
          </div>
        </li>`
    )
    .join("");
}

benefitsCardEl.insertAdjacentHTML("beforeend", createCardMarkup(benefitsCards)); 

export function handleCardClick(event) {
    const card = event.target.closest('.benefits-list-item');
    if (card) {
        const topic = card.querySelector('.benefits-topic').textContent;
        alert(`You clicked on: ${topic}`);
    }
}

benefitsCardEl.addEventListener("click", handleCardClick);