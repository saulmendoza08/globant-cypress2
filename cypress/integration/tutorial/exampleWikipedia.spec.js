/// <reference types='cypress'/>

context('Wikipedia',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.visit('/');
    })

    //haciendo el caso de prueba
    it('Test #1 - BDD Expectations',()=>{
        cy.get('#www-wikipedia-org #searchInput').type('Globant {enter}');

        cy.get(".infobox img").eq(0).should("be.visible");

        cy.get(".mediawiki #firstHeading").should('be.visible');

        cy.get(".mediawiki #firstHeading").should("contain","Globant");
    });


    it('Test #1 - implicit wait',()=>{
        cy.get('#www-wikipedia-org #searchInput').type('Globant {enter}');

        cy.wait(6000);

        cy.get(".mediawiki #firstHeading").should('be.visible');

        cy.get(".mediawiki #firstHeading").should("contain","Globant");
    });
});