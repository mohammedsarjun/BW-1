class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.items = {};
  }

  addRear(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  addFront(value) {
    this.front--;
    this.items[this.front] = value;
  }

  removeFromFront() {
    if (this.rear == this.front) return "queue is empty";
    const removed = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return removed;
  }

  removeFromRear() {
    if (this.rear == this.front) return "queue is empty";
    this.rear--;
    const removed = this.items[this.rear];
    delete this.items[this.rear];

    return removed;
  }
}

const queue = new Queue();
queue.addRear(50);
queue.addRear(60);
queue.addRear(700);
queue.addRear(1000);
console.log(queue.removeFromFront());
console.log(queue.removeFromRear());
console.log(queue.removeFromFront());
console.log(queue.removeFromRear());

//Applications

// 1.Sliding Window Problem
// 2.Browser History (Undo / Redo)
// 3.Palindrome Checking


//Time Complexity

//Operation	    Description	        Time Complexity

//addFront	    Insert at front	    O(1)
//addRear	    Insert at rear	    O(1)
//removeFront	Remove from front	O(1)
//removeRear	Remove from rear	O(1)
//peekFront 	View front element	O(1)
//peekRear	    View rear element	O(1)