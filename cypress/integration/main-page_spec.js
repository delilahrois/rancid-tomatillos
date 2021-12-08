// describe('Main page', () => {

//     beforeEach(() => {
//       cy.visit('http://localhost:3000')
//     })

//     it('should allow user to visit page and render elements', () => {
//       cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//         body: {
//           'id': 539885,
//           'poster_path': 'https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
//           'backdrop_path': 'https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
//           'title': 'Ava',
//           'average_rating': 5,
//           'release_date': '2020-07-02'
//         }
//       })
//       .get('main').contains('h1')
//     })
// });