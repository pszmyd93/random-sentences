import Collection from './Collection.js'

const collections = new Collection()


const form = document.querySelector('.collectionChoice__form')

const name = "selected value"

form.addEventListener('submit', (e) => collections.getCollection(e, "kawa"))