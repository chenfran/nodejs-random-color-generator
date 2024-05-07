# Node.js Random Color Generator

Create an application that will return a random color in the command line.

It should work like this:

- When a user enters `node index.js` in the command line, a block of 31x9 `#` characters colored with a random color (using hex code, e.g. `#ff0000`) should be generated.

```
node index.js
###############################
###############################
###############################
#####                     #####
#####       #ff72d2       #####
#####                     #####
###############################
###############################
###############################
```

In addition to `node index.js`, it should also be able to accept the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

... and then generate random colors that match those choices.

```
node index.js red
###############################
###############################
###############################
#####                     #####
#####       #b72d42       #####
#####                     #####
###############################
###############################
###############################
```

When you believe you are done, set up a test (instruction described in the issue).
