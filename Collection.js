class Collection {
  constructor() {
    this.data = this.fetchCollections()
    this.sentenceContentText = document.querySelector('.collectionContent__collectionObject')
    this.titleContentText = document.querySelector('.collectionContent__title')
    this.collectionChosen = [];
    this.currentSentenceIndex = 0;
    this.toggleOrder = false;
  }

  fetchCollections() {
    const adress = "./data.json"
    let dataObject = {}
    fetch(adress)
      .then(res => res.json())
      .then(data => Object.assign(dataObject, data))
    return dataObject
  }

  setCollectionTitle(name) {
    this.titleContentText.textContent = name;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.collectionChosen.sentences.length)
  }

  switchSentenceIndex(indexChange) {
    switch (indexChange) {
      case "first":
        this.currentSentenceIndex = 0;
        break;
      case "next":
        if(this.currentSentenceIndex < this.collectionChosen.sentences.length - 1) {
          this.currentSentenceIndex++;
        }
        break;
      case "prev":
        if(this.currentSentenceIndex > 0) {
          this.currentSentenceIndex--;
        }
        break;
      default:
        this.currentSentenceIndex = this.getRandomIndex();
        break;
    }
    return this.currentSentenceIndex;
  }

  displaySentence(indexChange) {
    const newSentenceIndex = this.switchSentenceIndex(indexChange);
    const newSentence = this.collectionChosen.sentences[newSentenceIndex].sentence
    this.sentenceContentText.textContent = newSentence;
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
    }
  }

  findCollection(name) {
    const collectionChosen = this.data.collections.find(collection => (collection.id == name))
    return collectionChosen
  }

  setCollection(collectionChosen) {
      this.setCollectionTitle(collectionChosen.id)
      this.collectionChosen = collectionChosen;
      this.displaySentence("first")
  }

  getCollection(e, radioButtons, textInput) {
    e.preventDefault()

    const radioChecked = radioButtons.find(radio => radio.checked)
    const collectionFoundFromTextInput = this.findCollection(textInput.value);
    
    if(collectionFoundFromTextInput) {
      this.setCollection(collectionFoundFromTextInput) 
      return
    }
    if(radioChecked) {
      const collectionChosen = this.findCollection(radioChecked.id)
      this.setCollection(collectionChosen)
      return
    }
    console.log("nie znaleziono");
  }

}
export default Collection;