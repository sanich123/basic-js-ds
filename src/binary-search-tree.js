const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  add(data) {
    let node = { left: null, data, right: null };

    if (!this.base) {
      this.base = node;
    } else {
      this._insertNode(this.base, node);
    }
  }
  has(data) {
    return Boolean(this._search(this.base, data));
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
  remove(data) {
    this.base = this._removeNode(this.base, data); // helper method below
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
      if (!place.left) {
        place.left = node;
      } else {
        this._insertNode(place.left, node);
      }
    } else {
      if (!place.right) {
        place.right = node;
      } else {
        this._insertNode(place.right, node);
      }
    }
  }
  _removeNode(node, data) {
    if (!node) {
      return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
      // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      // удаляем узел с одним потомком
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this._findMin(node.right);
      node.data = newNode.data;
      node.right = this._removeNode(node.right, newNode.data);
      return node;
    }
  }

  root() {
    return this.base;
  }
}

module.exports = {
  BinarySearchTree
};