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
//https://sketch.io/render/sk-fc0daadd942d0db628e45b74f2265020.jpeg

function deleteDup(string) { //google
  let result = ''
  let hashMap = new HashMap() 
  for(let i = 0; i < string.length; i++) {

    if(!hashMap.get(string[i].toLowerCase())) {
      hashMap.set(string[i], string[i])
      result += string[i]
    }
  }
  return result
}

// console.log(deleteDup('google'))

function palindrome(string){// input: acecarr, output: true;
  if(string.length % 2 === 1) {
     midpoint = string[Math.floor((string.length - 1) /2)]
  }
  let dupeCount = 0
  let hashMap = new HashMap()
  for(let i = 0; i < string.length; i++) { 
    if(!hashMap.get(string[i].toLowerCase())) {
      hashMap.set(string[i], string[i])
    }
    else dupeCount++
  }

  if(string.length % 2 === 1 && dupeCount % 2 === 1) {
    return true;
  }
  if(string.length % 2 === 0 && dupeCount % 2 === 0) {
    return true;
  }
  return false

} 
// console.log(palindrome('bavxsab'))

// input:['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
function anagram(arr) {
  let result = []
  let idx = 0;
  let hashMap = new Map();

  for(let word in arr) {
    const sortedWord = arr[word].split('').sort().join('');

    if(!hashMap.has(sortedWord)) {
      hashMap.set(sortedWord, idx)
      result.push([arr[word]])
      idx++
    } else {
      const index = hashMap.get(sortedWord);
      result[index].push(arr[word])
    }
  }
  return result
}
console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

function anagram2(arr) {
  const groups = new HashMap()
  arr.forEach(word => {
    const sorted = word.split('').sort().join('')
    const group = groups.get(sorted) || [] 
    groups.set(sorted, [...group, word])
  })
  return groups._hashTable
}

console.log(anagram2(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));