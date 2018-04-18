const shuffle = (arr) => {
  let pointer = 0; 

  while (pointer < arr.length) {
    let randomIdx = Math.floor(Math.random() * (arr.length - 1 - pointer)) + pointer; 
    console.log(randomIdx);
    [arr[pointer], arr[randomIdx]] = [arr[randomIdx], arr[pointer]];
    pointer++;
  }

  return arr;
}

console.log(shuffle([3,4,1,6,7]));
