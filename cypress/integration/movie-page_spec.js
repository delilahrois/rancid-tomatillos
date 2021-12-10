describe('Movie page tests', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 200, fixture: 'movieData.json'})

    cy.visit('http://localhost:3000')

  })

  it('should allow user to click on individual movie poster and be directed to that page', () => {

    cy.get('[href="/694919"]').click().url().should('include', '/694919')

  })

  it('should allow user to navigate back to home page from movie page', () => {

    cy.get('[href="/694919"]').click().url().should('include', '/694919')
      .get('button').click().url().should('eq', 'http://localhost:3000/')
  
  })
})