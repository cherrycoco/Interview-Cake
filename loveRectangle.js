const convertRect = (obj) => {
  let x1 = obj.leftX;
  let x2 = x1 + obj.width;
  let y1 = obj.bottomY;
  let y2 = y1 + obj.height;
  return [x1, x2, y1, y2];
}

const loveRectangle = (r1, r2) => {
  let rec1 = convertRect(r1);
  let rec2 = convertRect(r2);

  let x1 = Math.max(rec1[0], rec2[0]);
  let x2 = Math.min(rec1[1], rec2[1]);
  let y1 = Math.max(rec1[2], rec2[2]);
  let y2 = Math.min(rec1[3], rec2[3]);

  if (x2 <= x1 || y2 <= y1) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  } else {
    return {
      leftX: x1,
      bottomY: y1,
      width: x2 - x1,
      height: y2 - y1,
    }
  }
}

var myRectangle = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,
  // width and height
  width: 10,
  height: 4,
};

var herRectangle = {
  // coordinates of bottom-left corner
  leftX: 2,
  bottomY: 1,
  // width and height
  width: 5,
  height: 2,
};

// console.log(convertRect(myRectangle));
console.log(loveRectangle(myRectangle, herRectangle));

