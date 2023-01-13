class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // for an empty tree, create node with value of val
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    //search for correct spot and insert node
    let currNode = this.root;
    while (true) {
      //check left branch
      if (val < currNode.val) {
        if (!currNode.left) {
          currNode.left = new Node(val);
          return this;
        } else currNode = currNode.left; 
      }
      //check right branch
      if (val > currNode.val) {
        if (!currNode.right) {
          currNode.right = new Node(val);
          return this;
        } else currNode = currNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */




  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, curr = this.root) {

    if (!this.root) return undefined;

    while (true) {
      if (val < curr.val) {
        if (!curr.left) return undefined;
        curr = curr.left;
      }
      if (val > curr.val) {
        if (!curr.left) return undefined;
        curr = curr.right;
      }
      if (val === curr.val) return curr;
      else return undefined;
    }
  }
    
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {

    if (!this.root) return undefined;

    if (val === curr.val) return curr;

    if (val < curr.val) {
      if (!curr.left) return undefined;
      return this.findRecursively(val, curr.left);
    }
    if (val > curr.val) {
      if (!curr.right) return undefined;
      return this.findRecursively(val, curr.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    if (!this.root) return arr;
    let node = this.root;
    function traverse(node) {
      arr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    if (!this.root) return arr;
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      arr.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    if (!this.root) return arr;
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.val);
    }
    traverse(node);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];
    let queue = [];
    let node = this.root;
    if (!node) return arr;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      arr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
