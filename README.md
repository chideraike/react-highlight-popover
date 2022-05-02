# react-highlight-popover
> React component to show popover for text that is selected/highlighted.

![npm](https://img.shields.io/npm/v/react-highlight-popover?logo=npm&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/chideraike/react-highlight-popover/Node.js%20CI?logo=github&style=flat-square)
![npm](https://img.shields.io/npm/dw/react-highlight-popover?style=flat-square)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

A highly customizable text highlight react component with zero dependencies.

![Demo](https://user-images.githubusercontent.com/42821245/166227004-25300342-1da1-4552-a8cf-6f6a7154bff2.gif)

## Installation
```bash
npm install react-highlight-popover
```
or
```bash
yarn add react-highlight-popover
```

## Usage
1. Import `HighlightableTextArea` after installation
```js
import { HighlightableTextArea } from 'react-highlight-popover';
```
2. Wrap the text you want to be highlightable with `HighlightableTextArea`
```js
function App() {
    return (
        <HighlightableTextArea>
            <p>This is a sample text that can be highlighted. Select some text from here to see.</p>
        </HighlightableTextArea>
    )
}
```

### Customize your popover item
You can define a custom popover item by defining the `popoverItem` prop, whose value is a function that returns a react node. It also takes `HighlightedText` & `setPopoverState` as optional arguments.

Example
```js
function App() {
    return (
        <HighlightableTextArea 
            popoverItem={(HighlightedText, setPopoverState) => {
                return (
                    <div onClick={() => setPopoverState(false)}>
                        <p>{HighlightedText}</p>
                    </div>
                )}}
        >
            <p>This is a sample text that can be highlighted. Select some text from here to see.</p>
        </HighlightableTextArea>
    )
}
```

# API
## Props
Name|Default value|Description|Required
---|---|---|---
children||The part in which text that is selected/highlighted will render a popover.|Yes
popoverItem||The item to be rendered as popover when user has selected/highlighted text.|No
onHighlightText||The callback function that is fired when the popover shows, or hides.|No
xOffset|0|Positions the popover along the x-axis of the selected text.|No
yOffset|10|Positions the popover along the y-axis of the selected text.|No
zIndex|10|Sets the z-order of the popover and its descendants or flex items.|No

> Need new features? Create an issue [here](https://github.com/chideraike/react-highlight-popover/issues/new)

## Contribute
1. Fork the repo 
2. Create your feature branch (`git checkout -b my-awesome-feature`)
3. Make changes to the index file `src/index.tsx`
4. Write test for changes/features added in `tests/blah.test.tsx`
5. Commit your changes (`git add . && npm run commit`)
6. Push to the branch (`git push origin my-awesome-feature`)
7. Raise a Pull Request

## License
**react-highlight-popover** is licensed under [MIT](https://github.com/chideraike/react-highlight-popover/blob/main/LICENSE)