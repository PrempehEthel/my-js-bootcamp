// switch: another alternative if you have too many else if statements

/* let day = "pizza";

switch (day) {
  case 1:
    console.log(`Today is Monday`);
    break;

  case 2:
    console.log(`Today is Tuesday`);
    break;

  case 3:
    console.log(`Today is Wednesday`);
    break;

  case 4:
    console.log(`Today is Thursday`);
    break;

  case 5:
    console.log(`Today is Friday`);
    break;

  case 6:
    console.log(`Today is Saturday`);
    break;

  case 7:
    console.log(`Today is Sunday`);
    break;
 
  default:
    console.log(`${day} is not a day`);
}
 */

// another example

let textScore = 45;
let Gradescore;

switch (true) {
  case textScore >= 90:
    Gradescore = "A";
    break;

  case textScore >= 80:
    Gradescore = "B";
    break;

  case textScore >= 70:
    Gradescore = "C";
    break;

  case textScore >= 60:
    Gradescore = "D";
    break;

  default:
    Gradescore = "F";
}
console.log(Gradescore);
