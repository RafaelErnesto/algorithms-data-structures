export class Node {
	data: number
  next?: Node
  
  constructor(data: number) {
  	    this.data = data
        this.next = undefined
    }
}