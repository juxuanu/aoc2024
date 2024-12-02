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
