import Collection from './Collection.js'

const collection = new Collection()

const colletion1 = [
  {id: 1,
  sentence: "rób swoje i nie patrz się na innych jak ci coś nie wyjdzie to nie szukaj winnych"},
  {id: 2,
  sentence: "tylko to zostaje mi to po każdej zawleczki nakrętki i kapsle"},
  {id: 3,
  sentence: "duchy mierzą mnie swoimi pustymi ślepami patrzymy na siebie wiec długimi minutami"}
];
const colletion2 = [
  {id: 1, sentence: "muszynianka"},
  {id: 2, sentence: "banany"},
  {id: 3, sentence: "orzechy nerkowca"}
];

const form = document.querySelector('.collectionChoice__form')

form.addEventListener('submit', collection.displayCollection)