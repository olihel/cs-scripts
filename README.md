
# cs-scripts

Collection of JavaScripts for automating Adobe Creative Suite applications (actually just one script for InDesign at this time)

## Overview

#### InDesign
**update-prices-in-selected-cells.jsx**  
Iterate over all currently selected table cells. Assume selected cells are prices and update content as defined in the <code>calculatePrice()</code> function. Formatting as defined in the <code>formatPrice()</code> function. Empty cells are being ignored, cells must not contain currency e.g.

## Setup

[Grunt-JS](http://gruntjs.com) is required for building the final scripts. Have [Node.js](http://nodejs.org) installed and type

```Bash
npm install
```

for installing all required dependencies and then type

```Bash
npm start
```

for generating all scripts into the "dist" folder.

<br>
<sub>**License**</sub>  
<sub>The MIT License (MIT)</sub>  
<sub>Copyright (c) 2013 Oliver Hellebusch</sub>

<sub>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</sub>

<sub>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</sub>

<sub>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</sub>
