import { Node } from './Node'

export class DoublyLinkedList {

	private head: Node | null 

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
  
  addAtTail(newNode: Node, currentNode = this.head): any {
  	this.listInitialized()
  	if(currentNode!.next === null) {
      newNode.previous = currentNode
    	currentNode!.next = newNode
      return
    }
    
    return this.addAtTail(newNode, currentNode!.next)
  }

  addAtPosition(targetPosition:number, newNode: Node, currentNode = this.head): any {
  	this.listInitialized()
  	if(currentNode!.data === targetPosition) {
      newNode.next = currentNode
      newNode.previous = currentNode!.previous
      newNode.previous!.next = newNode
      currentNode!.previous = newNode
      return
    }
    
    return this.addAtPosition(targetPosition, newNode, currentNode!.next)
  }

  deleteAtPosition(targetPosition:number, currentNode = this.head): any {
  	this.listInitialized()
  	if(currentNode!.data !== targetPosition) {

      if(currentNode!.next === null) {
        console.log('Target not found on list')
        return
      }
      
      return this.deleteAtPosition(targetPosition, currentNode!.next)
    }

    const previousNode = currentNode!.previous
    const nextNode = currentNode?.next

    //it's the head
    if(previousNode === null) {
      if(nextNode){
        nextNode.previous = null
        this.head = nextNode
        return
      }

      this.head = null
      return
    }

    previousNode!.next = nextNode!

    if(nextNode) {
      nextNode.previous = previousNode
    }
    
    return
  }
  
  printList() {
  	let currentNode = this.head
  	this.listInitialized()
      
    do{
    	console.log(currentNode!.data)
    	currentNode = currentNode!.next
    }while(currentNode!== null)
  }
}
