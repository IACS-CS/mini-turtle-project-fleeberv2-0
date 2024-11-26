[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17332866)
This is a very simple interface for creating text and turtle programs.

You can read [text interface documentation](https://thinkle-iacs.github.io/Text-Interface-Sandbox/) here.
You can read [turtle documentation](https://thinkle-iacs.github.io/think-js/way_of_the_program.html#turtle-documentation) here.

## Your Assignment
Your assignment is to create of a simple drawing that the user can customize with commands.

In addition to creating a working program that uses user input to customize a drawing as output,
you are also working to make sure you understand how to use *procedures* and *parameters* in this project,
which we also call "functions" and "arguments."

You and your group will then be responsible for breaking the parts of the drawing into pieces 
and implementing each piece with a function (or "procedure," in AP parlance).

You then will complete your entire drawing with a function that draws all of the pieces together.

So, for example, let's say you were drawing a *person*, you might create functions for...

drawHead
drawTorso
drawLegs
drawArms

Or, if you were creating a house, you might create functions for...

drawRoof
drawRectangle
drawDoor
drawWindow

For each of these functions, you should think about what *parameters* your function
would take. For example, a `drawWindows` function might take parameters for
the `width` and `height` of the windows, OR for the `numberOfPanes` of glass.

If that were the case, the code might look like this:

```javascript
const drawWindows = (width, height, npanes) => {
            /* drawing code here ... */
} 
```


## Requirements

Your overall program needs to include:

- User Input which customizes the drawing.
- A drawing which makes use of at least 3 functions.
- At least one function *with* meaningful parameters written per group member.

## Environment

You can either complete this in a **GitHub Codespace** or in **CodePen**. Here is my pro/con list for the two environments:

| Platform          | Pros                                   | Cons                                          |
|--------------------|---------------------------------------|-----------------------------------------------|
| **GitHub Codespace** | Version control, professional-grade editor, good autocomplete  | Complexity, slower to load in browser, harder to manage |
| **CodePen**         | Ease of getting started, More user friendly             | Easier to lose track of work, no version control, no autocomplete |

- If you want to work in a codepen (or just use a codepen to play around) there are two starters:

   - [Synchronous (if you'll do all of your text input and *then* do the drawing all at once)](https://codepen.io/thinkle-iacs/pen/rNXEbzz)
   - [Asynchronous (if you want to mix commands and drawing as you go)](https://codepen.io/thinkle-iacs/details/OJKerRK)

- If you want to work in Codespaces, accept the Github Classroom assignment.
