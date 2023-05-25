it('Cypress commands for performing actions elements', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1').type('mail@mail.com');

    cy.get('#email1').clear().type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay: 50});
    
    cy.get('textarea[disabled]').type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay: 50, force: true});

    cy.get('#password1').focus().prev().should('have.attr', 'style').and('eq', 'color: orange;');

    cy.get('#fullName1').click().blur().prev().should('have.css', 'color').and('eq', 'rgb(255, 0, 0)');

    cy.get('.action-form')
    .should('not.contain', 'Your form has been submitted!')
    .find('#couponCode1')
    .type('qwe qwe')
    .closest('form')
    .submit()
    .siblings() // [elm1, ....]
    .should('contain', 'Your form has been submitted!');

    cy.get('#action-canvas').click();
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click('bottom');

    cy.get('#action-canvas').click(10, 10);
    cy.get('#action-canvas').click(10, 100);

    cy.get('.action-checkboxes [type="checkbox"]')
    .not('[disabled]')
    .check()
    .should('be.checked')

    cy.get('input[type="radio"]').check('radio3', {force: true}); // .check('radio3') елемент має містити атрибут [value="radio3"]
    cy.get('input[type="radio"]').check('radio2');

    cy.get('.action-select').select('fr-apples')
    cy.get('.action-select').select('oranges')

    cy.get('#scroll-horizontal .btn.btn-danger')
    .should('not.be.visible')
    .scrollIntoView()
    .should('be.visible')

    
    cy.get('#scroll-vertical .btn.btn-danger')
    .should('not.be.visible')
    .scrollIntoView()
    .should('be.visible')

    cy.get('.trigger-input-range')
    .invoke('val', 99)
    .trigger('change')
    .siblings('p')
    .should('contain', '99')
})