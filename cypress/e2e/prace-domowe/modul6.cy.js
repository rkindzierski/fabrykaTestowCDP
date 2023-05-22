const url = 'https://jsonplaceholder.typicode.com/posts'
const urlPut = 'https://jsonplaceholder.typicode.com/posts/1'
const urlDelete = 'https://jsonplaceholder.typicode.com/posts/2'

describe('praca domowa do modułu 6, dodanie PUT i DELETE', () => {
    
    it('should test json placeholder API', function () {
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request(
            {
                method: 'POST',
                url: url,
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userID: 1
                }),
                headers: {'Content-type': 'application/json'}
            }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
            expect(response.body).to.have.property('title', 'foo')
            expect(response.body).to.have.property('body', 'bar')
            expect(response.body).to.have.property('userID', 1)
        })

        cy.request(
            {
                method: 'PUT',
                url: urlPut,
                body: JSON.stringify({
                    id: 1,
                    title: 'PUT',
                    body: 'method',
                    userID: 1
                }),
                headers: {'Content-type': 'application/json'}
            }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('title', 'PUT')
            cy.log(body)
        })

        cy.request(
            {
                method: 'DELETE',
                url: urlDelete
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.empty
        })
    })
})