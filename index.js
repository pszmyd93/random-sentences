import Collection from './Collection.js'

const collection = new Collection()

const form = document.querySelector('.collectionChoice__form')
const radioButtons = [...form.querySelectorAll('input[type="radio"]')]
const randomSentenceContent = document.querySelector('.collectionContent__collectionObject')
const randomSentenceButton = document.querySelector('.collectionContent__nextButton')

form.addEventListener('submit', (e) => collection.getCollection(e, radioButtons))
randomSentenceButton.addEventListener('click', () => collection.displaySentence(randomSentenceContent))