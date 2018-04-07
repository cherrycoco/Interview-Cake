// const isBST = (node) => {
//   let upperBound = node.value;
//   let lowerBound = node.value; 
//   let result = true;

//   const depthFirstLeft = (tree) => {
//     lowerBound = tree.value;
//     if (tree.left) {
//       if (tree.left.value < lowerBound) {
//         depthFirstLeft(tree.left);
//       } else {
//         result = false;
//         return;
//       }
//     }

//     if (tree.right) {
//       if (tree.right.value > lowerBound && tree.right.value < upperBound) {
//         depthFirstLeft(tree.right);
//       } else {
//         result = false;
//         return;
//       }
//     }
//   }

//   const depthFirstRight = (tree) => {
//     upperBound = tree.value;
//     if (tree.left) {
//       if (tree.left.value > lowerBound && tree.left.value < upperBound) {
//         depthFirstRight(tree.left);
//       } else {
//         result = false;
//         return;
//       }
//     }

//     if (tree.right) {
//       if (tree.rigth.value > upperBound) {
//         depthFirstRight(tree.right);
//       } else {
//         result = false;
//         return; 
//       }
//     }
//   }

//   if (tree.left) {
//     if (tree.left.value < upperBound) {
//       depthFirstLeft(tree.left);
//     } else {
//       return false;
//     }
//   } 

//   lowerBound = tree.value;

//   if (tree.right) {
//     if (tree.right.value > lowerBound) {
//       depthFirstRight(tree.right);
//     } else {
//       return false;
//     }
//   }

//   return result; 
// }

const isBST = (node, lowerBound = -Infinity, upperBound = Infinity) => {
  if (!node) {
    return true;
  }

  if (node.value < lowerBound || node.value > upperBound) {
    return false;
  }

  return (
    isBST(node.left, lowerBound, node.value) && 
    isBST(node.right, node.value, upperBound)
  )
}

const tree = 
{
  value: 50,
  left: {
    value: 30,
    left: {
      value: 20,
      left: null,
      right: null,
    },
    right: {
      value: 40,
      left: null,
      right: null,
    },
  },
  right: {
    value: 100,
    left: {
      value: 75, 
      left: null,
      right: null,
    },
    right: null,
  }
}

console.log(isBST(tree));



