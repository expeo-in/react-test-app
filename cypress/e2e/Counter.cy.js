describe("template spec", () => {
  // it("passes", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.get("h1").should("have.text", "Counter");
  // });
  // it("should render initial value", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.get("p").should("have.text", "0");
  // });
  it("should increase count value when increment is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Increment").click();
    cy.get("p").should("have.text", "1");
    cy.contains("Increment").click();
    cy.get("p").should("have.text", "2");
  });
});
