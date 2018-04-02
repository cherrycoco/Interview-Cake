// const tree = require('./bst');

// Write a function to  find the 2nd largest element in
// a binary search tree

const findLargestNode = (tree) => {
  if (tree.right) {
    return findLargestNode(tree.right);
  } else {
    return tree;
  }
}

// const secondLargestNode = (tree) => {
//   // if the tree has a right node
//   let savedNode = null; 
//   let largestNode = findLargestNode(tree);

//   const search = (node) => {
//     if (node.right) {
//       // save the current node and recurse the function on the right node
//       savedNode = node;
//       search(node.right);
  
//     // if the node does not have a right node
//     } else {
//       // if there's a saved node
//       if (savedNode) {
//         // return the saved node
//         return savedNode;
//       } else {
//         // recurse through with the left node and save the current node 
//         // if node.left exist
//         if (node.left) {
//           savedNode = node.left;
//           // recurse through on the left node
//           search(node.left);
//         } else {
//           // or else return root value
//           return;
//         }
//       }
//     }
//   } 

const findSecondLargest = (node) => {
  if (!node || (!node.left && !node.right)) {
    return null;
  }

  let currentNode = node;

  while(currentNode) {
    if (currentNode.left && !currentNode.right) {
      return findLargestNode(currentNode.left);
    }

    if (currentNode.right && !currentNode.right.left && !currentNode.right.right) {
      return currentNode;
    }

    currentNode = currentNode.right;
  }
}

const tree = 
{
  value: 10,
  left: {
    value: 5,
    left: null,
    right: null,
  },
  right: {
    value: 20,
    left: {
      value: 15, 
      left: null,
      right: null,
    },
    right: null,
  }
}

console.log(findLargestNode(tree));
console.log(findSecondLargest(tree));

