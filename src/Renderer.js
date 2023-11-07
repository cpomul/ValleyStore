export class Renderer {
  constructor(content, items) {
    this.content = content;
    this.items = items;
  }

  render() {
    this.content.innerHTML = "";
    const existingListContent = this.content.querySelector(".list-content");

    if (!existingListContent) {
      const listContent = document.createElement("div");
      listContent.classList.add("list-content");
      listContent.textContent = ` ${this.items.join(", ")}`;
      this.content.appendChild(listContent);
    }
  }
}
