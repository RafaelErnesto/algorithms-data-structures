import { Node } from './Node'

export class LinkedList {

	head: Node
  
  constructor() {
  	this.head = null
  }
  
 	init(head: Node) {
 		this.head = head
 	}
  
  listInitialized() {
  	if(this.head === null) {
    	throw new Error('Linked List is empty')
    }
  }
  
  add(newNode: Node, currentNode = this.head) {
  	this.listInitialized()
  	if(currentNode.next === null) {
    	currentNode.next = newNode
      return
    }
    
    return this.add(newNode, currentNode.next)
  }
  
  printList() {
  	let currentNode = this.head
  	this.listInitialized()
      
    do{
    	console.log(currentNode.data)
    	currentNode = currentNode.next
    }while(currentNode!== null)
  }
}
