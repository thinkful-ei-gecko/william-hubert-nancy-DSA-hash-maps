const HashMap = require('./HashMap');

function main() {
  const lor = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  console.log(lor.get('Maiar')); // Sauron...Since keys are the exact same the hash will point to the same memory address and since the keys are the same, the value will be overriden
  console.log(lor.get('Hobbit')); //Frodo...Since keys are the exact same the hash will point to the same memory address and since the keys are the same, the value will be overriden

  // Capacity is 24 which is 3 * the initial capacity size, because our length is 9. Once it reached length of 3, the max load ratio was greater than 0.5, which means we needed to resize our capacity by x3;
  return lor;
}
// console.log(main());

//2. WhatDoesThisDo
// In both hash maps, the keys are the same, so whatever value is placed second, it overrides the value of the first .set, again since the keys are identical.

//3. Demonstrate understanding of hash maps