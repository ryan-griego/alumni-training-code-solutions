// interface FormElements {
//   name: HTMLInputElement;
//   email: HTMLInputElement;
//   message: HTMLTextAreaElement;
// };

function handleFocus(event: Event): void {
  console.log('The handleFocus was fired');
  const eventTarget: HTMLInputElement = event.target;
  console.log('Logs eventTarget.name in handleFocus', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('The handleBlur was fired');
  const eventTarget: HTMLInputElement = event.target;
  console.log('Logs eventTarget.name in handleBlur', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget: HTMLInputElement = event.target;
  console.log('Logs eventTarget.name', eventTarget.name);
  console.log('Logs eventTarget.value', eventTarget.value);
}

const form: HTMLFormElement = document.getElementById('contact-form');
const $formElements = document.getElementById('contact-form').elements;
const name = $formElements.name;
const email = $formElements.email;
const message = $formElements.message;

name.addEventListener('focus', (event) => {
  handleFocus(event);
});
name.addEventListener('blur', (event) => {
  handleBlur(event);
});
name.addEventListener('input', (event) => {
  handleInput(event);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const allElements: { [key: string]: any } = {};

  for (let i = 0; i < $formElements.length; i++) {
    const element = $formElements[i];
    if (element.name) {
      allElements[element.name] = element.value;
    }
  }
  form.reset();
});

email.addEventListener('focus', (event) => {
  handleFocus(event);
});
email.addEventListener('blur', (event) => {
  handleBlur(event);
});
email.addEventListener('input', (event) => {
  handleInput(event);
});

message.addEventListener('focus', (event) => {
  handleFocus(event);
});
message.addEventListener('blur', (event) => {
  handleBlur(event);
});
message.addEventListener('input', (event) => {
  handleInput(event);
});
