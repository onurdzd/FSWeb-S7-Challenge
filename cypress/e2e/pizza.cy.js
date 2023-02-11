describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 768);
  });

  it("isim inputa Onur yaz", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("[data-cy=name-input]")
      .type("Onur")
      .should("have.value", "Onur");
  });

  it("2 adet malzeme seç", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("[data-cy=checkbox-misir]")
      .check()
      .should("be.checked");
    cy.get("[data-cy=checkbox-sucuk]")
      .check()
      .should("be.checked");
  });

  it("Siparişleri ekle butonu gerekli yerde akktif oluyormu", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("[data-cy=name-input]").type("Onur");
    cy.get("[data-cy=size-dropdown]").select("orta");
    cy.get("[data-cy=özel]").type("Mayonez istiyorum");
    cy.get("[data-cy=siparis-button]").should("be.enabled");
  });

  it("Submit denemesi", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("[data-cy=name-input]").type("Onur");
    cy.get("[data-cy=size-dropdown]").select("orta");
    cy.get("[data-cy=özel]").type(`Mayonez istiyorum{enter}`);
    cy.get("[data-cy=form-submit]").submit();
    cy.get("[data-cy=name-input]").should("");
  });
});
