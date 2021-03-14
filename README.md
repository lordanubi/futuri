# Futuri: a React SVG Framework

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

import React from 'react';
import RVG from '../Atlantide/SvgRender/RVG' //might be a npm package in the future

function Circle({x, y, ...props}) {
        return <circle r={20} cx={x} cy={y} {...props} />
        //id should be added even if not explicit here
}
Circle.css = `circle {
    transform-box: fill-box;
    transform-origin: center;
    stroke: white;
    stroke-width: ${variable};
    fill: none;`
Circle.width = 20
Circle.height = 20

//config
Button.useShadow = true //if set true on big components may ease the performance

export default RVG(Button)


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
