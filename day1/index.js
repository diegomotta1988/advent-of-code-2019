const input = `113373
132031
104150
65914
81792
148723
94982
117511
89533
114335
128953
53970
52522
146264
89614
90375
114054
110582
91958
64811
58692
138427
81558
132987
138904
75785
99259
113640
84250
83134
80260
116018
76186
81457
107235
108657
98110
69048
63806
57223
65387
73452
80704
55250
116562
120546
145999
146063
100858
90460
72073
126926
131708
131592
104792
91527
128114
139831
99430
97397
129211
102181
118278
97812
119580
100912
66865
99460
128493
76092
139993
57749
83111
127747
101243
100619
79018
81946
146650
142257
139882
52795
76248
62824
137418
60898
108234
55589
132193
51191
56727
84285
131930
123750
62959
120799
86276
111156
124185
105008`;

const example = `12
14
1969
100756`;

// part1
const sum = input.split('\n').reduce((acc, current) => {
  const mass = parseInt(current);
  acc += Math.floor(mass / 3) - 2;
  return acc;
}, 0);

console.log(sum);

//part2

// const fuel = [];
const neededFuelArray = input.split('\n').map((mass) => {
  let neededFuel = parseInt(mass);
  let sum = 0;
  while (neededFuel > 0) {
    neededFuel = calculateNeededFuel(neededFuel);
    sum += neededFuel;
  }
  return sum;
});

console.log(neededFuelArray);

const sumFuel = neededFuelArray.reduce((acc, current) => (acc += current), 0);

console.log(sumFuel);
function calculateNeededFuel(mass) {
  const result = Math.floor(mass / 3) - 2;
  return result > 0 ? result : 0;
}
