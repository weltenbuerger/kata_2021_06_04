const digitalRoot = (n: number): number => {
    const reduced: number = n
      .toString()
      .split('')
      .reduce((acc: number, cur: string) => (acc += parseInt(cur)), 0);
    return reduced >= 10 ? digitalRoot(reduced) : reduced;
  };
  
  digitalRoot(456);
  
  // assert.equal(solution.digitalRoot(16), 7);
  // assert.equal(solution.digitalRoot(456), 6 );

// alternative
 const digitalRoot2 = (n:number):number => {
    while (n >= 10) {
      n = n.toString()
        .split('')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b, 0)
    }
    return n
  };