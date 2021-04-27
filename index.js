import Collection from './Collection.js'

const collection = new Collection()

const form = document.querySelector('.collectionChoice__form')
const radioButtons = [...form.querySelectorAll('input[type="radio"]')]
const textInput = form.querySelector('.collectionChoice__textInput')
const randomSentenceButton = document.querySelector('.collectionContent__nextButton')
const nextSentenceButton = document.querySelector('.displayMode__displaySentenceNext')
const prevSentenceButton = document.querySelector('.displayMode__displaySentencePrev')
const toggleOrderButton = document.querySelector('.displayMode__toggleButton')

form.addEventListener('submit', (e) => collection.getCollection(e, radioButtons, textInput))
randomSentenceButton.addEventListener('click', () => collection.displaySentence())
nextSentenceButton.addEventListener('click', () => collection.displaySentence("next"))
prevSentenceButton.addEventListener('click', () => collection.displaySentence("prev"))
toggleOrderButton.addEventListener('click', () => collection.toggleDisplayOrder(randomSentenceButton, nextSentenceButton, prevSentenceButton))