class Queue {
  constructor() {
    this.items = {}
    this.front = 0
    this.rear = 0
  }

  enqueue(value) {
    this.items[this.rear] = value
    this.rear++
  }

  dequeue() {
    if (this.front === this.rear) return "Queue is empty"

    const removed = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return removed
  }

  size() {
    return this.rear - this.front
  }

  isEmpty() {
    return this.front === this.rear
  }

  peek() {
    return this.items[this.front]
  }
}


//Applications
// 1.Breadth First Search (BFS) in Graphs
// 2.Call Center Systems
// 3.Callback Queue (Task Queue) (in js eventloop)
// 4.Microtask Queue (in js eventloop)

//Time Complexity

// Operation	Description	                Time Complexity
// Enqueue	    Insert element at rear	    O(1)
// Dequeue	    Remove element from front	O(1)
// Peek/Front	View first element	        O(1)
// isEmpty	    Check if queue empty	    O(1)
// Size	        Number of elements	        O(1)

