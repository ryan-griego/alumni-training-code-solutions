const phrase = document.querySelectorAll('span');
const dialog = document.querySelector('dialog');
const dismissDialog = document.querySelector('.dismiss-modal');
const acceptDialog = document.querySelector('.accept-modal');
const accuracy = document.querySelector('h3');
const percent = document.querySelector('h4');

dismissDialog.addEventListener('click', handleDismissClick);
acceptDialog.addEventListener('click', handleAcceptClick);

function handleDismissClick(): void {
  return dialog.close();
}

let keyToPress = 0;
phrase[keyToPress].className = 'underline-black';

let errorCount = 0;

function resetTutor(): void {
  keyToPress = 0;
  errorCount = 0;
  phrase.forEach((span) => {
    span.className = 'black';
  });
  phrase[0].className = 'black underline-black';
}

function handleAcceptClick(): void {
  resetTutor();
  return dialog.close();
}

function checkLetter(typedLetter: string): number {
  if (keyToPress === phrase.length) {
    return 0;
  }
  const currentKeyToPress = phrase[keyToPress].innerText;
  if (typedLetter === currentKeyToPress) {
    return 1;
  } else {
    return 0;
  }
}

document.addEventListener('keydown', (event: KeyboardEvent) => {
  const typedLetter = event.key;
  const isCorrectLetter = checkLetter(typedLetter);
  if (isCorrectLetter === 1) {
    keyToPress = keyToPress + 1;
    if (keyToPress === phrase.length) {
      const amountCorrect = phrase.length - errorCount;
      const percentageCorrect = (amountCorrect / phrase.length) * 100;
      const formattedPercentage = percentageCorrect.toFixed(2) + '%';
      accuracy.innerText = `You typed ${errorCount} errors out of the total of ${phrase.length} letters with a success rate of ${formattedPercentage}.`;
      percent.innerText = `Would you like to play again?`;
      dialog.showModal();
    }
    phrase[keyToPress - 1].className = 'underline-black';
    phrase[keyToPress - 1].className = 'green';
  }
  if (typedLetter === ' ' && event.keyCode === 32) {
    keyToPress = keyToPress + 1;
    phrase[keyToPress].className = 'underline-black';
    phrase[keyToPress - 1].className = 'green';
  } else if (isCorrectLetter === 0) {
    errorCount++;
    phrase[keyToPress].className = 'underline-red red';
  }
});
