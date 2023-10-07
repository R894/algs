import Node from "./Node";

class Queue {
  private first: Node<any> | null = null;
  private last: Node<any> | null = null;

  isEmpty(): boolean {
    return this.first === null;
  }

  enqueue(item: any) {
    const last = new Node(item, null);
    if (this.isEmpty()) {
      this.first = last;
    }else {
        if(this.last){
            this.last.next = last;
        }
    }

    this.last = last;
  }

  dequeue() {
    if(this.first){
        const data = this.first.data;
        const first = this.first.next;
        if(this.isEmpty()){
            this.last = null;
        }
        return data;
    }
  }
}

export default Queue;
