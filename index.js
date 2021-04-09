import Collection from './Collection.js'

const collections = new Collection()

const form = document.querySelector('.collectionChoice__form')
const radioButtons = [...form.querySelectorAll('input[type="radio"]')]

form.addEventListener('submit', (e) => collections.getCollection(e, radioButtons))