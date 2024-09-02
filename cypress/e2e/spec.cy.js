describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://bluelsony17.github.io/')

    cy.get('p').should('contain', 'Hello World!')

  })
})