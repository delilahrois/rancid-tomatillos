describe('Navigation tests', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 200, fixture: 'movieData.json'})

    cy.visit('http://localhost:3000')

  })

  it('should be able to search using the search bar', () => {

    cy.get('input[type="text"]').type('Money Plane')
      .get('button').click().url().should('include', '/694919')

  })

})