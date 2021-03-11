# Futuri: a React Pattern Maker

Futuri is a React SVG Framework that lets you develope Neomorphic interface without hassle.
It gives you the abilty to make infinite variations of patterns (periodic, aperiodic and quasi periodic tiling are all possibile) based on any SVG component.
It will let you give light to your site (dinamically calculated shadows and highlithgs of buttons etc..)
It takes advantages of React, SVG and Framer Motion to make the most simple while cool and fluid animated graphics on the web. All scalable, interactable and fine-tunable.

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
