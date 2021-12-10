describe('Main page', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 200, fixture: 'movieData.json'})

    cy.visit('http://localhost:3000')

  })

  it('should allow user to visit page and render elements', () => {

      cy.get('[data-cy=page-title]').contains('Rancid Tomatillos')
        .get('[data-cy=movie-grid]')
        .get('[data-cy=poster-img]')
        // .get('input[type="text"]')
        // .get('input[type="select"]')
  })


  it('should allow user to click on individual movie poster and be directed to that page', () => {

    cy.get('[href="/694919"]').click().url().should('include', '/694919')

  })

})




// cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 200, fixture: 'movieData.json'})

// cy.fixture('movieData.json')
//   .then((allMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//     statusCode: 200,
//     body: allMovies
//   })
// })
