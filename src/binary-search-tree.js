const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  add(data) {
    let node = new Node(data);
    if (!this.base) {
      this.base = node;
    } else {
      this._insertNode(this.base, node);
    }
  }
  has(data) {
    return Boolean(this.find(data));
  }
  find(data) {
    return this._search(this.base, data);
  }
  min() {
    return this._findMin(this.base);
  }
  max() {
    return this._findMax(this.base);
  }
  _findMax(node) {
    if (node.right) {
      return this._findMax(node.right);
    } else {
      return node.data;
    }
  }

  _findMin(node) {
    if (node.left) {
      return this._findMin(node.left);
    } else {
      return node.data;
    }
  }
  _search(node, data) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else if (data > node.data) {
      return this._search(node.right, data);
    } else {
      return node;
    }
  }

  _insertNode(place, node) {
    if (node.data < place.data) {
      !place.left ? (place.left = node) : this._insertNode(place.left, node);
    } else {
      !place.right ? (place.right = node) : this._insertNode(place.right, node);
    }
  }

  root() {
    return this.base;
  }
}

module.exports = {
  BinarySearchTree
};