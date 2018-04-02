class Node {
  constructor (value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  insert (value) {
    // if !this.root 
    if (!this.root) {
      // this.root = new Node(value);
      this.root = new Node(value);
      return;
    } 
    
    let currentNode = this.root;
    let newNode = new Node(value);

    while (currentNode) {
      if (newNode.value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return;
        }
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(15);
tree.insert(7);

exports = tree;

// console.log(tree);