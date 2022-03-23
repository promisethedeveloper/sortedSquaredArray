function sortedSquaredArray(array) {
  const squaredArray = new Array(array.length).fill(0);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let leftValue = array[leftIdx];
    let rightValue = array[rightIdx];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      squaredArray[i] = leftValue * leftValue;
      leftIdx++;
    } else {
      squaredArray[i] = rightValue * rightValue;
      rightIdx--;
    }
  }
  return squaredArray;
}