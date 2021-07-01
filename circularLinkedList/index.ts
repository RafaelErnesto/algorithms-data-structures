import { CircularLinkedList } from "./CircularLinkedList"
import { Node } from './Node'

const linkedList = new CircularLinkedList()

linkedList.init(new Node(1))

linkedList.add(new Node(2))
linkedList.add(new Node(3))
linkedList.add(new Node(4))
linkedList.add(new Node(5))
linkedList.add(new Node(6))
linkedList.add(new Node(7))
linkedList.add(new Node(8))
linkedList.add(new Node(9))

linkedList.deleteNode(1)
linkedList.deleteNode(10)


linkedList.printList()