# Notes Application

Using reactJS as a framework I have been lately enjoying creating use states and trying to code and simplify as to how can I acheive this state not by using JavaScript, but by simple usage of ReactJS as a framework. In the notes application, the first thought that hit me was to create useStates to change the visibility of notes container once the delete button is toggled. 

I have created two use States, one for notes and the other one to check whether my display of notes is active or not. The notes useState is an array to store other notes containers as well whereas the isActive one is of boolean data type. In my buttons.jsx file I have created a function to handle click of add notes button where in I have used the spread operator to append notes in the previous list. Next I have mapped the index for every note in notes in another Notes.jsx file. Here I have added in the code that if my isActive is true, that is, my event handler is being called then create a container to add notes. If not then let there be an empty string of paragraph tag. Also, if I'll click on my delete button, the target's parent element will be removed.

## Saving to Local Storage
To save the local storage on every rendering of notes, I have used useEffect to save the notes which will show up the previous ones even after reloading the website.