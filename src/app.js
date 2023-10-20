/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our", "their"];
let adj = ["great", "big", "gigantic"];
let noun = ["jogger", "racoon", "toreto"];
let dom = [".pt", ".com", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let i = 0; i < adj.length; i++) {
    for (let i = 0; i < noun.length; i++) {
      console.log(pronoun[i], adj[i], noun[i], dom[i]);
    }
  }
}
