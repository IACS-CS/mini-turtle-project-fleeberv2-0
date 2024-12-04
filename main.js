import "./style.css";
import RealTurtle from "real-turtle";
import { TextInterface } from "text-interface";
import { runDemo } from "./demo";

const canvas = document.querySelector("#real-turtle");
const textDiv = document.querySelector("#app");

// Initialize turtle and text interface objects
const turtle = new RealTurtle(canvas, {
  /* set async to false if you will do all
   * of your drawing at once. If so, you don't have
   * to "await" at the end of each turtle command,
   * but you *will* have to add a turtle.start()
   * call at the end. */
  async: true,
  autoStart: false,
});

const ti = new TextInterface(textDiv, "Draw a paper bag!");

/* Comment out the line below once you're writing
 * your own code -- you can also take a look at the
 * code in demo.js for an example. */
runDemo(turtle, ti);

/* We need a separate "start" command
 * if we are NOT in async mode.
 * uncomment if you change out of async mode */
// turtle.start();
