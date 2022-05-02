const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeTree = null;
    this.arratTest = [];
  }

  root() {
    return this.nodeTree;
  }

  add(data) {
    this.nodeTree = addNodeTree(this.nodeTree, data);

    function addNodeTree(nd, data) {
      if (!nd) {
        return new Node(data);
      }
      else if (nd.data > data) {
        nd.left = addNodeTree(nd.left, data);
        return nd;
      }
      else if (nd.data === data) {
        return nd;
      }
      nd.right = addNodeTree(nd.right, data);
      return nd;
    }
  }

  has(data) {
    return hasNodeTree(this.nodeTree, data);

    function hasNodeTree(node, data) {
      if (!node) {
        return false;
      }
      if (node.data > data) {
        return hasNodeTree(node.left, data);
      }
      if (node.data === data) {
        return true;
      }


      return hasNodeTree(node.right, data);
    }
  }

  find(data) {
    return findNodeTree(this.nodeTree, data);

    function findNodeTree(node, data) {
      if (!node) {
        return null;
      }

      else if (node.data == data) {
        return node;
      }

      else if (node.data > data) {
        return findNodeTree(node.left, data);
      }
      return findNodeTree(node.right, data);
    }
  }

  min() {
    let temp = this.nodeTree;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }

  max() {
    let temp = this.nodeTree;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }

  remove(data) {
    const del = (data, node) => {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if (!node.right && !node.left) {
          return null;
        }
        else if (!node.left) {
          return node.right;
        }
        else if (!node.right) {
          return node.left;
        }
        let prev = null;
        let next = node.right;
        while (next.left) {
          prev = next;
          next = next.left;
        }
        node.data = next.data;
        if (prev) {
          // if()
          prev.left = next.right ? next.right : null;
          console.log(prev.left)
        } else {
          node.right = node.right.right ? node.right.right : null;
          console.log(node.right)
        }
        return node;
      }
      if (data < node.data) {
        node.left = del(data, node.left);
      } else {
        node.right = del(data, node.right);
      }
      return node;
    };
    this.nodeTree = del(data, this.nodeTree);
  }
}

module.exports = {
  BinarySearchTree
};