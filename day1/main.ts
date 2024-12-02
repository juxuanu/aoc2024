const input = Deno.readTextFileSync("day1/input.txt");

const col1: number[] = [];
const col2: number[] = [];
let sum: number = 0;

input.split("\n").filter((line) => !!line.trim()).forEach((line) => {
  console.info(line);
  const [c1, c2] = line.split("   ");
  col1.push(+c1);
  col2.push(+c2);
});

col1.sort((a, b) => b - a);
col2.sort((a, b) => b - a);

for (let i = 0; i < col1.length; i++) {
  sum += Math.abs(col1[i] - col2[i]);
}

console.log(sum);