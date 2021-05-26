import basePage from '../../page-objects/basePage';

export default class landingPage extends basePage {

    static expectTheDetailsBarPresent() {
        cy.get('.key-details-bar').should('be.visible');
    }
    
    static clickStartAssessmentBtn() {
        cy.get('.govuk-grid-row .govuk-button--start').should('be.visible');
        cy.get('.govuk-grid-row .govuk-button--start').click();
    }

    static selectSourcesOfInformation() {
        cy.get('.app-task-list__item .app-task-list__task-name').contains('Select sources').click();
    }

    static backToAssessmentProgress() {
        cy.get('.govuk-button--secondary').contains('Back to assessment progress').click();
    }

    static selectServiceRecord() {
        cy.get('.govuk-checkboxes .govuk-checkboxes__item [value="service records"]').click();
    }

    static selectSaveAndContinue() {
        cy.get('.govuk-button').contains('Save and continue').click();
    }

    static expectTheAssessmentProgressHeadingPresent() {
        cy.contains('Assessment progress').should('be.visible');
    }
 }    