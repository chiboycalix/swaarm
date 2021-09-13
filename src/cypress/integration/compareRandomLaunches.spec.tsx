export {};

describe("compare random launches and redirect back to the /launches pages", () => {
  after(() => {
    cy.visit("http://localhost:3000/launches");
  });
  it("should work", () => {
    cy.visit("http://localhost:3000/compare");
    cy.get("#checkbox-2").check();
    cy.get("#checkbox-3").check();
    cy.get(".secondary").click();
    cy.wait(5000);
  });
});
