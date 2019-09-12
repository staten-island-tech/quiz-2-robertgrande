/* John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score) */

const teamJ1Score = 89;
const teamJ2Score = 120;
const teamJ3Score = 103;

const teamM1Score = 116;
const teamM2Score = 94;
const teamM3Score = 123;

let teamJAverage = (teamJ1Score + teamJ2Score + teamJ3Score) / 3;
let teamMAverage = (teamM1Score + teamM2Score + teamM3Score) / 3;

let winner;

if (teamJAverage > teamMAverage){
    console.log(`Johns Team Wins`);
} else {
    console.log(`Mikes Team Wins`);
}

console.log(`Johns team average: ${teamJAverage}`);
console.log(`Mikes team average: ${teamMAverage}`);


