describe('Error Handling', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 401,
      body: {
        message: 'Oops! Something went wrong. Refresh and try again.'
      }
    })
    cy.visit('http://localhost:3000')



  })

  it('should display an error message if the server is down', () => {
    cy.get('[data-cy=error-message]').should('contain', 'Oops! Something went wrong. Refresh and try again.')
  })


})
