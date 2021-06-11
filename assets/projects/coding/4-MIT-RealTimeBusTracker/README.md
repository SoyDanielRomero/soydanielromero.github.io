## Real Time Bus Tracker 👨‍💻
<img src='./img/bostonbus.jpg'>

This is an exercise developed during MIT xPro Professional Certificate in Coding: Full Stack Development with MERN. 

The goal of this exercise is to fetch data from an API and use it to animate a map.

I implemented a function to update MBTA Route 1 buses geolocation in real time every 15 seconds, and I attached to them their own markers with the bus number to identify them. I added the buses' geolocation to an array and create markers with their positions. I also wrote a function to get rid of previous markers.

## How to use 🔧

To install this proyect in your machine, follow these steps:

1. Download or clone the project
2. Go to content folder and add it to your code editor tool
3. Go to MapBox and get an API Token, in mapanimation.js fille, replace mapboxgl.accessToken = "THIS VALUE"; with your own API token
4. Open index.html

## Usage 🚀

To see this project running in live action please go to [Index.html](https://soydanielromero.github.io/assets/projects/coding/4-MIT-RealTimeBusTracker/index.html) and follow the instructions.

## Support 🦸‍♂️️

If you have any question please send an email to: [hola@soydanielromero.com](mailto:hola@soydanielromero.com).

## Roadmap 🗺

This is a coding exercise and there won't be any fixes or improvements.

## License information 👨‍⚖️

Copyright (c) 2021 Daniel Romero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Files 📁

- Root
    - index.html
    - LICENSE
    - README.md
    - project details.html
- /img
    - bostonbus.jpg
- /scripts
    - mapanimation.js
- /styles
    - styles.css