const texts = ["programmer", "teammate", "student", "friend"];
let currentIndex = 0;
let currentText = "";
let currentLetterIndex = 0;
let typingSpeed = 60;
let deletingSpeed = 75;
let pauseDuration = 2000;

function type(element) {
  const fullText = texts[currentIndex];

  if (currentLetterIndex < fullText.length) {
    currentText += fullText.charAt(currentLetterIndex);
    element.textContent = currentText;
    currentLetterIndex++;
    setTimeout(() => type(element), typingSpeed);
  } else {
    setTimeout(() => deleteText(element), pauseDuration);
  }
}

function deleteText(element) {
  const fullText = texts[currentIndex];

  if (currentLetterIndex > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    element.textContent = currentText;
    currentLetterIndex--;
    setTimeout(() => deleteText(element), deletingSpeed);
  } else {
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(() => type(element), typingSpeed);
  }
}

document.querySelectorAll('.auto-type').forEach(element => {
  type(element);
});