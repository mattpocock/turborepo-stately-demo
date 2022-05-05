// HomePage.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Home Page", () => {
  it("Should have a button named 'Boop'", () => {
    cy.visit("/");

    cy.get("button").should("have.text", "Boop");
  });

  it("Should have a header named 'Web'", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Web");
  });
});
