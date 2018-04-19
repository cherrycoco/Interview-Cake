const mergeMeetings = (arr) => {
  let sortedArr = arr.slice(0).sort((a, b) => {
    a.startTime - b.startTime;
  });
  let temp = sortedArr[0];
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let event = sortedArr[i];

    if (event.startTime <= temp.endTime) {
      temp.endTime = Math.max(event.endTime, temp.endTime);
    } else {
      result.push(temp);
      temp = event;
    }
  
    if (i === arr.length - 1) {
      result.push(temp);
    }
  }

  return result;
}

let cal = [
  {startTime: 1, endTime: 2},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
]

console.log(mergeMeetings(cal));