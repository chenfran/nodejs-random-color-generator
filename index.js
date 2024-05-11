import { argv } from 'node:process'; // store users input
import chalk from 'chalk'; // import colors to node.js - the package is called 'chalk'
import randomColor from 'randomcolor'; // return random color in hex code

const usersLuminosity = argv[3]; // declaring users input for luminosity
const usersColor = argv[2]; // declaring users input for color
const finalColor = randomColor({
  luminosity: usersLuminosity,
  hue: usersColor,
});

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

console.log(chalk.hex(finalColor)(hashtagPattern(finalColor)));
