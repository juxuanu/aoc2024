const file = Deno.readTextFileSync("day3/input.txt");

function part1() {
  let sum: number = 0;

  const regexResult = file.matchAll(
    /mul\(([0-9]{0,3}),([0-9]{0,3})\)/g,
  );

  for (const item of regexResult) {
    console.log(item[0], +item[1], +item[2]);
    sum += +item[1] * +item[2];
  }

  console.log(sum);
}

part1();
