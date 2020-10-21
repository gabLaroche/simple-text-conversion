const textarea = document.getElementById('conversion');
const upperCaseBtn = document.getElementById('upperCaseBtn');
const lowerCaseBtn = document.getElementById('lowerCaseBtn');
const sentenceCaseBtn = document.getElementById('sentenceCaseBtn');
const capitalizedCaseBtn = document.getElementById('capitalizedCaseBtn');

const copyTextBtn = document.getElementById('copyBtn');

const numCharsElem = document.getElementById('numChars');
const numWordsElem = document.getElementById('numWords');
const numSentencesElem = document.getElementById('numSentences');

const toUpperCase = () => {
    textarea.value = textarea.value.toUpperCase();
};

const toLowerCase = () => {
    textarea.value = textarea.value.toLowerCase();
};

const capitalizeChars = splitter => {
    const initialText = textarea.value.split(splitter);
    let capitalizedText = [];

    for(let i = 0; i < initialText.length; i++){
        capitalizedText.push(initialText[i].charAt(0).toUpperCase()+initialText[i].slice(1));
    }

    return capitalizedText.join(splitter);
};

const toSentenceCase = () => {
    toLowerCase();
    textarea.value = capitalizeChars('. ');
    textarea.value = capitalizeChars('.');
};

const toCapitalizedCase = () => {
    toLowerCase();
    textarea.value = capitalizeChars(' ');
};

const countChars = () => {
    numCharsElem.innerText = textarea.value.length.toString();
};

const countWords = () => {
    const textContent = textarea.value.split(" ");

    numWordsElem.innerText = textarea.value === "" ? "0" : textContent.length.toString();
};

const countSentences = () => {
    const textContent = textarea.value.split(". ");

  numSentencesElem.innerText = textarea.value === "" ? "0" : textContent.length.toString();
};

const copyToClipboard = () => {
    if (textarea.value !== "") {
        textarea.select();
        document.execCommand("copy");
    }
};

const init = () => {
    upperCaseBtn.addEventListener('click', toUpperCase);
    lowerCaseBtn.addEventListener('click', toLowerCase);
    sentenceCaseBtn.addEventListener('click', toSentenceCase);
    capitalizedCaseBtn.addEventListener('click', toCapitalizedCase);

    copyTextBtn.addEventListener('click', copyToClipboard);
    textarea.addEventListener('input', countChars);
    textarea.addEventListener('input', countWords);
    textarea.addEventListener('input', countSentences);
};

(function () {
    init();
}());
