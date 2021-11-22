/* eslint-disable no-undef */
describe("Login", () => {
    it("should login successfully", () => {
        cy.visit("http://localhost:3000/login");

        cy.get("input[type=email]").type("usuario@email.com");
        cy.get("input[type=password").type("123qweASD@");
        cy.get("button[type=submit]").click();

        cy.url().should("equal", "http://localhost:3000/planos");
    });
});
