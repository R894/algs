class Node<Type> {
    data: Type;
    next: Node<Type> | null;
    constructor(data: Type, next: Node<Type> | null=null) {
        this.data = data;
        this.next = next;
    }
}
export default Node;