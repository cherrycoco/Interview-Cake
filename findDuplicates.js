const findDuplicates = (arr) => {
  let floor = 1; 
  let ceiling = arr.length - 1;

  while (floor < ceiling) {
    let mid = Math.floor((ceiling - floor) / 2 + floor);
    let lowerFloor = floor;
    let lowerCeil = mid;
    let upperFloor = mid + 1;
    let upperCeil = ceiling;
    let distinctLowerNums = lowerCeil - lowerFloor + 1; 
    let count = 0;

    arr.forEach(item => {
      if (item <= lowerCeil && item >= lowerFloor) {
        count++;
      }
    });

    if (count > distinctLowerNums) {
      floor = lowerFloor;
      ceiling = mid; 
    } else {
      floor = upperFloor;
      ceiling = upperCeil;
    }
  }

  return floor; 
}

console.log(findDuplicates([2, 2, 5, 5, 5, 3, 4]));