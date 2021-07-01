import { Node } from './Node'

export class CircularLinkedList {

	private head?: Node
  
  constructor() {
  	this.head = undefined
  }
  
 	init(head: Node) {
 		this.head = head
 	}
  
  listInitialized() {
  	if(this.head === undefined) {
    	throw new Error('Circular Linked List is empty')
    }
  }
  
  add(newNode: Node, currentNode = this.head): any {
  	this.listInitialized()
  	if(currentNode!.next === undefined || currentNode!.next === this.head) {
    	currentNode!.next = newNode
      newNode.next = this.head
      return
    }
    
    return this.add(newNode, currentNode!.next)
  }

  deleteNode(targetNode: number, currentNode = this.head): any {
    this.listInitialized()

    if(currentNode!.next === this.head) {
      console.log('Target not found on list')
      return
    }

    if(currentNode!.data === targetNode && currentNode === this.head) {
      if(this.head!.next) {
        this.head!.data = this.head!.next!.data
        this.head!.next = this.head!.next!.next
      } else {
        this.head = undefined
      }
      return
    }

    if(currentNode!.next!.data === targetNode) {
      currentNode!.next = currentNode!.next!.next
      return
    }

    return this.deleteNode(targetNode, currentNode!.next)
  }
  
  printList() {
  	let currentNode = this.head
  	this.listInitialized()
      
    do{
    	console.log(currentNode!.data)
    	currentNode = currentNode!.next
      if(currentNode === this.head) {
        console.log(`---> HEAD(${currentNode?.data})`)
      }
    }while(currentNode !== this.head)
  }
}
