const colletion1 = {
  id: "rapcytaty",
  sentences: [
  {id: 1,
  sentence: "rób swoje i nie patrz się na innych jak ci coś nie wyjdzie to nie szukaj winnych"},
  {id: 2,
  sentence: "tylko to zostaje mi to po każdej zawleczki nakrętki i kapsle"},
  {id: 3,
  sentence: "duchy mierzą mnie swoimi pustymi ślepami patrzymy na siebie wiec długimi minutami"}
  ]
};
const colletion2 = {
  id: "żyrcie",
  sentences: [
    {id: 1, sentence: "muszynianka"},
    {id: 2, sentence: "banany"},
    {id: 3, sentence: "orzechy nerkowca"}
  ]
};
const colletion3 = {
  id: "kawa",
  sentences: [
    {id: 1, sentence: "z mlekiem"},
    {id: 2, sentence: "bez mleka"},
  ]
};

const data = [colletion1, colletion2, colletion3]

class Collection {
  constructor() {
    
  }
  getCollection(e, name) {
    e.preventDefault()
    const collectionChosen = data.find(collection => {
      return collection.id == name;
    })
    console.log(e.target);
    return collectionChosen;
  }
}
export default Collection;