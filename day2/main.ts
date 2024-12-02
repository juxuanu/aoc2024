const file = Deno.readTextFileSync("day2/input.txt");

function part1() {
  let safeReports: number = 0;

  file.split("\n").filter((line) => !!line).forEach((report) => {
    const levels = report.split(" ").map((level) => +level);
    const direction: "asc" | "desc" = levels[0] > levels[1] ? "desc" : "asc";

    for (let i = 0; i < levels.length - 1; i++) {
      const curr: number = levels[i];
      const next: number = levels[i + 1];

      if (Math.abs(next - curr) > 3 || Math.abs(next - curr) === 0) return;
      if (direction === "asc" && curr > next) return;
      if (direction === "desc" && curr < next) return;
    }

    safeReports++;
  });

  console.log(safeReports);
}

part1();

const areTwoLevelsSafe = (
  curr: number,
  next: number,
  direction: "asc" | "desc",
): boolean => {
  if (Math.abs(curr - next) > 3 || Math.abs(curr - next) === 0) return false;
  if (direction === "asc" && curr > next) return false;
  if (direction === "desc" && curr < next) return false;

  return true;
};

const areLevelsSafe = (levels: number[]): boolean => {
  const direction: "asc" | "desc" = levels[0] > levels[1] ? "desc" : "asc";

  for (let i = 0; i < levels.length - 1; i++) {
    if (!areTwoLevelsSafe(levels[i], levels[i + 1], direction)) return false;
  }

  return true;
};

const isReportSafe = (levels: number[]): boolean => {
  let localLevels = structuredClone(levels);
  if (areLevelsSafe(localLevels)) return true;

  for (let i = 0; i < levels.length; i++) {
    localLevels = structuredClone(levels);
    localLevels.splice(i, 1);
    if (areLevelsSafe(localLevels)) return true;
  }

  return false;
};

function part2() {
  let safeReports: number = 0;

  file.split("\n").filter((line) => !!line).forEach((report) => {
    const levels = report.split(" ").map((level) => +level);

    if (isReportSafe(levels)) safeReports++;
  });

  console.log(safeReports);
}

part2();
