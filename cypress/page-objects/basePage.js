export default class basePage {
    static VisitPage(url) {
        let visitingUrl = url;
    
        cy.visit(visitingUrl, {
          failOnStatusCode: false,
          auth: { username: 'sprint', password: '19' }
        });
        cy.wait(1 * 1000);
    }
}
