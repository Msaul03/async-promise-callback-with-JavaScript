  function* iterate(array) {
    for (let value of array) {
      yield value
    }
  }
  
  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);