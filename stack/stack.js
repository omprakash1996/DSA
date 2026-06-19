// Stack data structure
function stackDS() {
  const data = [];
  let currentSize = data.length;
  let max = 5;
  function push(newVal) {
    if (currentSize >= max) {
      alert("stack is full" + newVal);
    }
    data[currentSize] = newVal;
    currentSize += 1;
  }
  function pop() {
    if (currentSize > 0) {
      currentSize -= 1;
      data.length = currentSize;
    } else {
      alert("stack is already empty");
    }
  }
  push(20);
  push(30);
  push(10);
  push(2);
  pop();
  pop();
  pop();
  push(0);
  push(267);
  push(200);
  console.warn(data);
}
stackDS();
