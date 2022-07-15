const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const removeHandlerButton = document.querySelector('.remove-handlers-btn');
const attatchHandlerButton = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const addEventList = () => {
  divElem.addEventListener('click', logGreyDiv, { capture: true });
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
addEventList();

const pushAttatchHandlerBt = addEventList;
attatchHandlerButton.addEventListener('click', pushAttatchHandlerBt);

const removeEventList = () => {
  divElem.removeEventListener('click', logGreyDiv, { capture: true });
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

const pushRemoveHandlerBt = removeEventList;
removeHandlerButton.addEventListener('click', pushRemoveHandlerBt);

const clearEventList = () => {
  document.querySelector('.events-list').innerHTML = '';
};
const pushClearBt = clearEventList;
clearButton.addEventListener('click', pushClearBt);
