# Queue Implementation

A simple and efficient implementation of a queue data structure in TypeScript. This package provides a generic Queue class which can be used in various JavaScript and TypeScript applications where queue functionality is needed.

## Features

- Simple and intuitive API
- Generic implementation supporting different data types
- Methods for enqueueing, dequeueing, peeking, checking length, and verifying if the queue is empty

## Installation

To install the package, run the following command in your project directory:

```bash
npm install queue
```

## Usage Exampls
```
import { Queue } from 'queue';

// Creating a new queue
const queue = new Queue<number>();

// Enqueueing elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Dequeueing elements
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2

// Peeking at the front element
console.log(queue.peek()); // 3

// Checking if the queue is empty
console.log(queue.isEmpty()); // false

// Checking the length of the queue
console.log(queue.length()); // 1
```
