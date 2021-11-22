import { API_URL } from "../../src/services/API/baseUrl";

/* eslint-disable no-undef */
describe("Login", () => {
    it("should login successfully", () => {
        cy.visit(API_URL);

        cy.get("input[type=email]").type("usuario@email.com");
        cy.get("input[type=password").type("123qweASD@");
        cy.get("button[type=submit]").click();

        cy.url().should("equal", "http://localhost:3000/planos");
    });
});
