class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  private head: QueueNode<T> | null = null;
  private tail: QueueNode<T> | null = null;
  private count = 0;

  enqueue(value: T): void {
    const newNode = new QueueNode(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.count--;

    if (!this.head) {
      this.tail = null;
    }
    return value;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  length(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}