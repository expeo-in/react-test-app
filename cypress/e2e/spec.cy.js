describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("Utilities").click();
    cy.contains("Cypress.Promise").should("exist");
  });
});
