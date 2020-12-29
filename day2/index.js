const input = `1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0`;

const example = `1,1,1,4,99,5,6,0,99`;

const expectedOutput = 19690720;

// part1
// const map = createMap();
// map.set(1, 12);
// map.set(2, 2);
// runProgram(map);

function createMap() {
  const map = new Map();
  input.split(',').map((item, index) => map.set(index, parseInt(item)));
  return map;
}

// part2
const map = createMap();
const { noun, verb } = searchNounAndVerb();
const result = 100 * noun + verb;
console.log('Resultado', result);

function searchNounAndVerb() {
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const map = createMap();
      map.set(1, i);
      map.set(2, j);
      if (runProgram(map) === expectedOutput) {
        console.log('Encontrados', { noun: map.get(1), verb: map.get(2) });
        return { noun: map.get(1), verb: map.get(2) };
      }
    }
  }
}

function runProgram(map) {
  for (let i = 0; i < map.size; i += 4) {
    let stop = false;
    switch (map.get(i)) {
      case 1:
        one(map, map.get(i + 1), map.get(i + 2), map.get(i + 3));
        break;
      case 2:
        two(map, map.get(i + 1), map.get(i + 2), map.get(i + 3));
        break;
      case 99:
        stop = true;
        // console.log('stop!', map.get(0));
        break;
    }
    if (stop) {
      return map.get(0);
    }
  }
}

function one(currentMap, index1, index2, targetIndex) {
  currentMap.set(targetIndex, currentMap.get(index1) + currentMap.get(index2));
}

function two(currentMap, index1, index2, targetIndex) {
  currentMap.set(targetIndex, currentMap.get(index1) * currentMap.get(index2));
}
