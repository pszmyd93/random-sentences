const collection1 = {
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
const collection2 = {
  id: "żyrcie",
  sentences: [
    {id: 1, sentence: "muszynianka"},
    {id: 2, sentence: "banany"},
    {id: 3, sentence: "orzechy nerkowca"}
  ]
};
const collection3 = {
  id: "kawa",
  sentences: [
    {id: 1, sentence: "z mlekiem"},
    {id: 2, sentence: "bez mleka"},
  ]
};

const collection4 = {
  id: "ukryta",
  sentences: [
    {id: 1, sentence: "tajemnica"},
    {id: 2, sentence: "sekret"},
    {id: 3, sentence: "zagadka"},
  ]
}

const data = [collection1, collection2, collection3, collection4]

class Collection {
  constructor() {
    this.sentenceContent = document.querySelector('.collectionContent__collectionObject')
    this.collectionChosen = [];
    this.currentSentenceIndex = 0;
    this.toggleOrder = false;
  }
  setCollectionTitle(name) {
    const title = document.querySelector('.collectionContent__title')
    title.textContent = name;
  }

  displaySentence(indexChange) {
    switch (indexChange) {
      case "first":
        this.currentSentenceIndex = 0;
        break;
      case "next":
        if(this.currentSentenceIndex < this.collectionChosen.sentences.length - 1) {
          this.currentSentenceIndex++;
        }
        console.log(this.currentSentenceIndex);
        break;
      case "prev":
        if(this.currentSentenceIndex > 0) {
          this.currentSentenceIndex--;
        }
        console.log(this.currentSentenceIndex);
        break;
      default:
        this.currentSentenceIndex = Math.floor(Math.random() * this.collectionChosen.sentences.length);
        break;
    }
    this.sentenceContent.textContent = this.collectionChosen.sentences[this.currentSentenceIndex].sentence;
  }

  toggleDisplayOrder(randomSentenceButton, nextSentenceButton, prevSentenceButton) {
    this.toggleOrder = !this.toggleOrder;
    if (this.toggleOrder == true) {
      randomSentenceButton.disabled = true;
      nextSentenceButton.disabled = false;
      prevSentenceButton.disabled = false;
      this.displaySentence("first")
    } else {
      randomSentenceButton.disabled = false;
      nextSentenceButton.disabled = true;
      prevSentenceButton.disabled = true;
      this.displaySentence()
    }
    console.log(this.toggleOrder);
  }

  getCollection(e, radioButtons, textInput) {
    e.preventDefault()
    if(textInput.value != "") { 
      console.log(textInput.value);
      const collectionChosen = data.find(collection => {
        return collection.id == textInput.value;
      })
      // if() dorobić sprawdzanie czy znajduje jakąś kolekcję
      this.setCollectionTitle(textInput.value)
      this.collectionChosen = collectionChosen;
      this.displaySentence("first")
      return collectionChosen
    } else {
      const radioChecked = radioButtons.find(radio => {
        return radio.checked;
      })
      const collectionChosen = data.find(collection => {
        return collection.id == radioChecked.id;
      })
      console.log(collectionChosen);
      this.setCollectionTitle(collectionChosen.id)
      this.collectionChosen = collectionChosen;
      this.displaySentence("first")
      return collectionChosen;
    }
  }

}
export default Collection;