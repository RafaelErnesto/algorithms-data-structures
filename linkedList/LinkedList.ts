import { Node } from './Node'

export class LinkedList {

	private head?: Node
  
  constructor() {
  	this.head = undefined
  }
  
 	init(head: Node) {
 		this.head = head
 	}
  
  listInitialized() {
  	if(this.head === undefined) {
    	throw new Error('Linked List is empty')
    }
  }
  
  add(newNode: Node, currentNode = this.head): any {
  	this.listInitialized()
  	if(currentNode!.next === undefined) {
    	currentNode!.next = newNode
      return
    }
    
    return this.add(newNode, currentNode!.next)
  }
  
  printList() {
  	let currentNode = this.head
  	this.listInitialized()
      
    do{
    	console.log(currentNode!.data)
    	currentNode = currentNode!.next
    }while(currentNode!== undefined)
  }
}
