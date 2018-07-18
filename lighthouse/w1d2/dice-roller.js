var argument = process.argv.slice(2);
var dices = argument[0];
var results = [];
debugger;

function rollingDices(argumentArgv) {
  for (var i = 0; i < dices; i++) {
    results[i] = Math.floor((Math.random()*6) + 1);

  } return results.join(", ");
}

console.log(rollingDices(argument));