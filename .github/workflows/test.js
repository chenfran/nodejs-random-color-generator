import { argv } from 'node:process'; // store users input
import chalk from 'chalk'; // import colors to node.js - the package is called 'chalk'
import randomColor from 'randomcolor'; // return random color in hex code

// print anything in a specified color
// console.log(chalk.hex('#ff0000')('#'));
// console.log(chalk.red('#'));

// print anything in a random color
// console.log(chalk.hex(randomColor())('#'));

// console.log(colorFromUser); // output: colorFromUser but we want the string to be colored [x]

const colorFromSystem = randomColor(); // declaring a variable for the function
const usersLuminosity = argv[3]; // declaring users input for luminosity
const usersColor = argv[2]; // declaring users input for color

// print the pattern
function hashtagPattern(anyColor) {
  const fullOfHashtags = '#'.repeat(31);
  const someHashtags = '#'.repeat(5);
  const noHashtags = ' '.repeat(21);
  const hexCodeColor = ' '.repeat(7) + anyColor + ' '.repeat(7);

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

hashtagPattern(usersColor);

const finalColor = randomColor({
  luminosity: usersLuminosity,
  hue: usersColor,
});

if (argv.length < 3) {
  console.log(chalk.hex(colorFromSystem)(hashtagPattern(colorFromSystem)));
} else if (finalColor) {
  console.log(chalk.hex(finalColor)(hashtagPattern(finalColor)));
} else {
  console.log('Color does not exist.'); // I will never get this message because it will always be converted to a hex code?
}
