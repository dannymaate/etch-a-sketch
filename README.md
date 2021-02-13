# Etch-A-Sketch
This project is about creating a browser version of something between a sketchpad and an Etch-A-Sketch. Drawing happens when you hover over a gridsquare, changing the colour of it. 

## Purpose
The purpose of the project is to practice DOM manipulation skills and the application of JavaScript methods. It is encouraged that any other relevant concepts be applied (especially if they haven't been taught yet).

## Reflection
Etch-A-Sketch was an opportunity to further strengthen the concepts applied to the Rock-Paper-Scissors project. When I first read this project's requirements, my first step was to plan out my approach. I broke the requirements down into smaller steps and was then able to write out the pseudo code for these. As the project progressed, I had to create additional functions to ensure that each function only performed one task. Planning out the project allowed me to think about each upcoming problem. This meant that I had the time to consider a few solutions on a subproblem before actually solving it. Some of the more significant subproblems that took longer than I had anticipated are addressed below. 


### EventListeners
A subproblem I encountered early on was trying to change the colour of the squares on hover. I decided to approach this by running a loop over each grid square as the mouse hovers over. What I tried to do was use the Array.forEach() method. However, this cannot be used because it only iterates over a list of elements. Initially, I tried to use this function over a set of divs, inside a div container, but it didn't work. Instead, I managed to solve the problem with a for loop that would run up to the number of squares inside the grid. 

A simple, but valuable mental note to remember is if two event listeners call the same function, then just make a separate function for it. It reduces repetitive code, and allows changes to the function to be recognised for both event listeners. 

### Commenting
Comment complicated code. When I took breaks from working on this project, each time I returned I had to spend time trying to remember the purpose of a function. A simple one line comment could have saved me a lot of time. So, remember to comment when you finish a function.

### Problems
 When you get stuck, take a break for a few hours and come back to it fresh. I look at problems very differently after a break and often manage to identify a straightforward solution

### Conclusion
I'm pleased with how the Etch-A-Sketch turned out and am proud of what I have achieved. I feel that I have strengthened my application of event listeners, loops and pseudo coding, and aim to build on these in the next project. 
