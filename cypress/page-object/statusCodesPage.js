const url200 = "a[href='http://httpstat.us/200']"
const url305 = '#305siteAnchor'
const url404 = '#404siteAnchor'
const url500 = '#500siteAnchor'


class StatusCodesPage{
    
    getStatus200(){
        cy.get(url200).click()
        .then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.body).to.eq('200 OK')
        })
    }
    getStatus305(){
        cy.request({url: url305, followRedirect: false}).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.body).to.equal('305 Use Proxy')
        })
    }
    getStatus404(){
        cy.get(url404).click().then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.eq({})
        })
    }
    getStatus500(){
        cy.request(url500).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq('500 Internal Server Error')
        })
    }
}

export default StatusCodesPage;

