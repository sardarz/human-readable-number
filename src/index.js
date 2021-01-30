module.exports = function toReadable (number) {
  const map = { 0: ["zero"],
                1: ["one"], 
                2: ["two", "twenty"],
                3: ["three", "thirty"],
                4: ["four", "forty"],
                5: ["five", "fifty"],
                6: ["six", "sixty"],
                7: ["seven", "seventy"],
                8: ["eight", "eighty"],
                9: ["nine", "ninety"],
                10: ["ten"],
                11: ["eleven"],
                12: ["twelve"],
                13: ["thirteen"],
                14: ["fourteen"],
                15: ["fifteen"],
                16: ["sixteen"],
                17: ["seventeen"],
                18: ["eighteen"],
                19: ["nineteen"],

              }

  if (String(number).length === 1) return map[number][0];
  let result = []
  let str = String(number);
  if (str.length === 3) {
      result.push(`${map[str[0]][0]} hundred`);
      if (str[1] >= 2 && str[2] !== "0") {
        result.push(`${map[str[1]][1]} ${map[str[2]][0]}`)
      } else if (str[1] >= 2) {
        result.push(`${map[str[1]][1]}`)
      } else if (str[1] === "0" && str[2] === "0") {
        return result[0];
      } else if (str[1] === "0") {
        result.push(map[str[2]][0]);
      } else {
        let rest = str.slice(1);
        result.push(map[rest]);
      }
  } else {
    if (str[0] >= 2 && str[1] !== "0") {
      return map[str[0]][1] + " " + map[str[1]][0];
    } else if (str[0] >= 2) return map[str[0]][1];
    else return map[str];
  }
  return result.join(' ')
}
