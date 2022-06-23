const unorderedArray = [6,0,3,21,4,5,10,9,23,8,30]

const quickSort = (arr: number[]): number[] => {
    if(arr.length < 2) return arr

    const pivot = arr.shift()

    const smallerThanPivot = arr.filter((number) => number < pivot!)
    const biggerThanPivot = arr.filter((number) => number > pivot!)

    return quickSort(smallerThanPivot).concat([pivot!]).concat(quickSort(biggerThanPivot))
}

console.log(quickSort(unorderedArray))