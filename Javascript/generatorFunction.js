//Generator-Based Reverse Counter

function generatorBasedReverseCounter(i) {

  function* print(i) {
    while (true) {
      yield i--;
    }
  }

  const gen = print(i);

  const printInterval = setInterval(() => {
    const value = gen.next().value;
    if (value <= 5) {
      clearInterval(printInterval);
    }
    console.log(`${value} * 5 = ${value * 5}`);
  }, 1000);
}

generatorBasedReverseCounter(1000)
