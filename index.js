import Collection from './Collection.js'

const collection = new Collection()

const form = document.querySelector('.collectionChoice__form')
const radioButtons = [...form.querySelectorAll('input[type="radio"]')]

form.addEventListener('submit', (e) => collection.getCollection(e, radioButtons))