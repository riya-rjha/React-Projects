## Stop Watch Project
## Using custom hooks


### Intuitions : 

1. To start with I first created routes in main file using react router dom.
2. Next I created a header file to add title of stop watch and add responsivess using useWindowSize() hook.
3. To move on further with the project, I thought to create a separate file for the box of stop watch, then timing of the stop watch, then three buttons file and one file to hold their functionalities. 
4. I have used Use State.


### Functionalities :

1. I created a header file to store title and a box to store the container box and a time file to show timings.
2. In the container I created use states for time and check active or check for interval.
3. Then I checked after initially giving the value of activity to be false, if the stop watch is inactive then set the activity to true. Then run a setInterval function and after every 60 miliseconds, add on to the seconds value. 
4. After the interval setIntervalId to the calculated value.
5. On clicking on the stop button the activity of stop watch is set to false and the interval calculated before is cleared using the function "clearInterval()".
6. On clicking reset button, again the activity of the stop watch is set to false and time is set to zero again.


### Jsx Files : 
Two elements are passed on further - Time & Buttons. Time holds the calculated value of time and Buttons hold the three buttons and their functionalities.

Time.jsx : The components passed here are time={time}. A div is created which holds three paragraph tags that signify minutes, seconds and miliseconds. Then formulaes are used to calculate minutes, seconds and miliseconds.

For minutes : Math.floor((time/60000)%60).slice(-2)
For seconds : Math.floor((time/1000)%60).slice(-2)
For miliseconds : ((time/10)%100).slice(-2)

1. time/60000 : Calculates the total time in miliseconds 
2. (time/60000)%60 : Returns the remainder giving us the total remaining time. (This is how the stop watch functions giving us the remaining time from the time when it started)

Each time the Time component renders with an extra 60 miliseconds after every single iteration. For eg. If you want to run the stop watch for 3 seconds, the total value of Time would be 180 miliseconds, and the total number of iterations would be 3.

For eg. If the stop watch runs for 3 seconds, initially time is zero. Then at first iteration in becomes 60 and then 120 and finally 180. Then by mathematical functions, first 60 is divided by 60000 giving 0.001 as the remainder after modulus division by 60. Then the floating number is sliced by 2 digits, finally giving the answer first 1, then 2, then 3, and so on.