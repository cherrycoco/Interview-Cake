const singleRiffleShuffle = (half1, half2, shuffledDeck) => {
  let pointer1 = 0;
  let pointer2 = 0;

  for (let pointer3 = 0; pointer3 < shuffledDeck.length; pointer3++) {
    let currentCard = shuffledDeck[pointer3];
    let half1Card = half1[pointer1];
    let half2Card = half2[pointer2];

    if (currentCard === half1Card) {
      pointer1++;
    } else if (currentCard === half2Card) {
      pointer2++;
    } else {
      return false; 
    }
  }

  return true;
}

console.log(singleRiffleShuffle([1, 3, 5], [2, 4, 7], [1, 3, 5, 2, 4, 7]));