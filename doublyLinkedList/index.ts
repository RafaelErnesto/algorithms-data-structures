import { DoublyLinkedList } from "./DoublyLinkedList"
import { Node } from './Node'

const linkedList = new DoublyLinkedList()

linkedList.init(new Node(1))

linkedList.addAtTail(new Node(2))
linkedList.addAtTail(new Node(3))
linkedList.addAtTail(new Node(4))
linkedList.addAtTail(new Node(5))
linkedList.addAtTail(new Node(6))
linkedList.addAtTail(new Node(7))
linkedList.addAtTail(new Node(8))
linkedList.addAtPosition(8,new Node(9))
linkedList.printList()
linkedList.deleteAtPosition(1)
console.log('\n')
linkedList.printList()