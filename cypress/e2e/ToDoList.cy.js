describe("ToDoList", () => {
  it("AddToDo should add new entry to list", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Learn React");
    cy.get("button").click();
    cy.contains("Learn React").should("exist");
  });
});
