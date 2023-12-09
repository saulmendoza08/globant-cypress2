/// <reference types='cypress'/>

context('Variables',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.visit('/');
    })

    //haciendo el caso de prueba
    it('Test #1',()=>{
        cy.get('.new-todo').type("Algo ....{enter}");
        cy.get('.todo-list li').as('items');

        cy.get('@items').should('have.length',3);
        cy.get('.todo-list li').should('have.length',3);
    })

    it.only('Test #2',()=>{
        cy.fixture('todos').as("todos");

        cy.get("@todos").then(todos => {
            todos.todos.forEach(todo=>{
                cy.get('.new-todo').type(todo + "{enter}");
            });
        });
    });

})