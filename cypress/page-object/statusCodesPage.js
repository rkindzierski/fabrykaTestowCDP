const url200 = "#200siteAnchor"
const url305 = "#305siteAnchor"
const url404 = "#404siteAnchor"
const url500 = "#500siteAnchor"


class StatusCodesPage {

    getStatus200() {
        cy.get(url200).invoke('attr', 'href').then((myHref) => {
            cy.request(myHref).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq('200 OK')
            })
        })
    }
    getStatus305() {
        cy.get(url305).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                followRedirect: false
            })
                .then((response) => {
                    expect(response.status).to.eq(305)
                    expect(response.body).to.eq('305 Use Proxy')
                })
        })
    }
    getStatus404() {
        cy.get(url404).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                failOnStatusCode: false
            })
                .then((response) => {
                    expect(response.status).to.eq(404)
                    expect(response.body).to.eq('404 Not Found')
                })
        })

    }
    getStatus500() {
        cy.get(url500).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                failOnStatusCode: false
            })
                .then((response) => {
                    expect(response.status).to.eq(500)
                    expect(response.body).to.eq('500 Internal Server Error')
                })
        })
    }
}

export default StatusCodesPage;