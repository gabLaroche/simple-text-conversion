const textarea = document.getElementById('conversion');
const upperCaseBtn = document.getElementById('upperCaseBtn');
const lowerCaseBtn = document.getElementById('lowerCaseBtn');
const sentenceCaseBtn = document.getElementById('sentenceCaseBtn');
const capitalizedCaseBtn = document.getElementById('capitalizedCaseBtn');

const copyTextBtn = document.getElementById('copyBtn');
const clearTextBtn = document.getElementById('clearBtn');

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
    textarea.value = capitalizeChars('. ');
    textarea.value = capitalizeChars('.');
};

const toCapitalizedCase = () => {
    textarea.value = capitalizeChars(' ');
};

const copyToClipboard = () => {
    if (textarea.value !== "") {
        textarea.select();
        document.execCommand("copy");
    }
};

const clearTextarea = () => {
    textarea.value = "";
};

const popupInfo = () => {
    console.log('popupInfo');
    // https://stackoverflow.com/questions/18359193/plain-javascript-tooltip
};

const addEvents = () => {
    upperCaseBtn.addEventListener('click', toUpperCase);
    lowerCaseBtn.addEventListener('click', toLowerCase);
    sentenceCaseBtn.addEventListener('click', toSentenceCase);
    capitalizedCaseBtn.addEventListener('click', toCapitalizedCase);

    // infoBubble.addEventListener('click', popupInfo);
    clearTextBtn.addEventListener('click', clearTextarea);
    copyTextBtn.addEventListener('click', copyToClipboard);
};

const init = () => {
    addEvents();
};

(function () {
    init();
}());