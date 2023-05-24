describe('Add spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/todo-project/');
    

    cy.get('todo__text').type('Gör allt du kan')
    cy.get('todo__name').type('Allan')
    cy.get('todo__button').click();

  })
});