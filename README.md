# Futuri: a React SVG Animated Pattern Maker

Futuri is an SVG Pattern Maker made from people for the people.
It gives you the possibility to make infinite variations of patterns (periodic, aperiodic and quasi periodic tiling are all possibile)
It takes advantages of React, SVG and Framer Motion to make the most simple cool and fluid animated patterns on the web. All scalable, interactable and fine-tunable.

## Installation
Open the folder with VisualStudio Code and type in the Terminal

```bash
npm install
```
or
```bash
yarn install
```

## Usage

```jsx
let patternSettings = {
    horizontal: {
      spacing: 0, //space between lines
      atoms: 20, //number of logos per line
      quasiPeriodicHorizontalFlip: true, //ordered chaos 
      evenOddVerticalFlip: true, //flip every other logo
      phase: //can be 'periodic' or 'quasiperiodic'
    },
    vertical: {
      spacing: 0, //space between columns
      atoms: 20, //number of logos per column
      quasiPeriodicHorizontalFlip: true, //ordered chaos 
      evenOddVerticalFlip: true, //flip every line
      phase: false //can be 'periodic' or 'quasiperiodic'
    }
  }
  return(<svg><PatternMaker set={patternSettings} /></svg>)


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
