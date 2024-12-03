const file = Deno.readTextFileSync("day3/input.txt");

function part1() {
  let sum: number = 0;

  const regexResult = file.matchAll(
    /don't\(\)|do\(\)|mul\(([0-9]{0,3}),([0-9]{0,3})\)/g,
  );

  let enabled = true;
  for (const item of regexResult) {
    const isMul = item[0][0] === "m";

    const isDo = item[0] === "do()";
    const isDont = item[0] === "don't()";

    console.log(item[0], isMul, isDo, isDont);

    if (isDo) enabled = true;
    if (isDont) enabled = false;
    if (isMul && enabled) sum += +item[1] * +item[2];
  }

  console.log(sum);
}

part1();
