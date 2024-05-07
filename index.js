import { argv } from 'node:process'; // store users input
import chalk from 'chalk'; // import colors to node.js - the package is called 'chalk'
import randomColor from 'randomcolor'; // return random color in hex code

// print anything in a specified color
// console.log(chalk.hex('#ff0000')('#'));
// console.log(chalk.red('#'));

// print anything in a random color
// console.log(chalk.hex(randomColor())('#'));

// print anything in a color that a user give us
const colorFromUser = argv[2];
// console.log(colorFromUser); // output: colorFromUser but we want the string to be colored [x]
// if (colorFromUser === 'red') {
//   console.log(chalk.red('#'));
// } else if (colorFromUser === 'blue') {
//   console.log(chalk.blue('#'));
// } else if (colorFromUser === 'black') {
//   console.log(chalk.black('#'));
// } else if (colorFromUser === 'green') {
//   console.log(chalk.green('#'));
// } else if (colorFromUser === 'yellow') {
//   console.log(chalk.yellow('#'));
// } else if (colorFromUser === 'magenta') {
//   console.log(chalk.magenta('#'));
// } else if (colorFromUser === 'cyan') {
//   console.log(chalk.cyan('#'));
// } else if (colorFromUser === 'gray') {
//   console.log(chalk.gray('#'));
// } else {
//   console.log('Color does not exist.');
// }

// I think I have to declare a variable for the function otherwise I get 2 different random colors below
const colorFromSystem = randomColor();

// combine everything from above - oi
if (argv.length < 3) {
  console.log(chalk.hex(colorFromSystem)(hashtagPattern(colorFromSystem)));
} else if (colorFromUser === 'red') {
  console.log(chalk.red(hashtagPattern('#ed2b28')));
} else if (colorFromUser === 'blue') {
  console.log(chalk.blue(hashtagPattern('#4cb9fa')));
} else if (colorFromUser === 'black') {
  console.log(chalk.black(hashtagPattern('#000000')));
} else if (colorFromUser === 'green') {
  console.log(chalk.green(hashtagPattern('#2a3f29')));
} else if (colorFromUser === 'yellow') {
  console.log(chalk.yellow(hashtagPattern('#f4cf0f')));
} else if (colorFromUser === 'magenta') {
  console.log(chalk.magenta(hashtagPattern('#f653a6')));
} else if (colorFromUser === 'cyan') {
  console.log(chalk.cyan(hashtagPattern('#00a2d3')));
} else if (colorFromUser === 'gray') {
  console.log(chalk.gray(hashtagPattern('#84857d')));
} else if (colorFromUser === 'white') {
  console.log(chalk.white(hashtagPattern('#ffffff')));
} else {
  console.log('Color does not exist.');
}

// print the pattern
function hashtagPattern(colorFromUser) {
  const fullOfHashtags = '#'.repeat(31);
  const someHashtags = '#'.repeat(5);
  const noHashtags = ' '.repeat(21);
  const hexCodeColor = ' '.repeat(7) + colorFromUser + ' '.repeat(7);

  const pattern = `${fullOfHashtags}
${fullOfHashtags}
${fullOfHashtags}
${someHashtags}${noHashtags}${someHashtags}
${someHashtags}${hexCodeColor}${someHashtags}
${someHashtags}${noHashtags}${someHashtags}
${fullOfHashtags}
${fullOfHashtags}
${fullOfHashtags}`;

  return pattern;
}

hashtagPattern(colorFromUser);

// accept luminosity
const UsersLumi = argv[3];
