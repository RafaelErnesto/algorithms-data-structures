export class Node {
	data: number
  previous: Node | null
  next: Node | null
  
  constructor(data: number) {
  	    this.data = data
        this.next = null
        this.previous = null
    }
}