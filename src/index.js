import "./style.css";
import { Renderer } from "./Renderer.js";
const navBar = document.querySelector("#navBar");
const linkBar = document.createElement("div");
const content = document.querySelector("#content");
linkBar.classList = "linkBar";
navBar.appendChild(linkBar);

const list = document.createElement("ul");
const ingredients = document.createElement("li");
const recipes = document.createElement("li");
const contact = document.createElement("li");

linkBar.appendChild(list);

ingredients.textContent = "Ingredients";
recipes.textContent = "Recipes";
contact.textContent = "Contact";
list.classList = "list";
list.append(ingredients, recipes, contact);

const ingredientsRenderer = new Renderer(content, [
  "Pumpkin",
  "Sugar",
  "Eggs",
  "Milk",
]);
ingredients.addEventListener("click", () => {
  ingredientsRenderer.render();
});

const recipesRenderer = new Renderer(content, ["Pumpkin Pie"]);
recipes.addEventListener("click", () => {
  recipesRenderer.render();
});

const contactRenderer = new Renderer(content, ["Contact "]);
contact.addEventListener("click", () => {
  contactRenderer.render();
});
