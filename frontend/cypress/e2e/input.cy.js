/// <reference types="cypress" />

describe("test countries first button", () => {
  before(() => {
    cy.visit("/");
  });

  it("checks button click works", () => {
    cy.get("[datatestid=country-button-0]").click();
    cy.get("[datatestid=country-name]").should("contain", "United States");
  });
});
