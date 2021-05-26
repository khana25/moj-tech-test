/// <reference types="cypress" />


/*
Scenario # 1: Navigating to the Risk Assessment application
    Given I navigate to the Risk Assessment page
    When I start the Assessmanet application 
    Then I should be landed on the assessment progress
    And I am on the assessment progress page

 
Scenario # 2: Accessing the assessment progress of an individual    
    Given I am on the assessment progress page of an individual candidate
    And I expect a candidate personal heading bar present on the page
    When I select on of the 'Not started' progress step
    Then I am taken to the particular application section
    And I should be able to select any of the option
    And I should be able to select 'Save and continue' or 'Back to assessment page' of the application

*/

import basePage from '../../page-objects/basePage';
import landingPage from '../../page-objects/pages/landingPage'

describe('Test the Assessment landing page', () => {
    it('I should be able to access the Assessment Progress of an individual ', () => {
        basePage.VisitPage('https://risk-assessment-sprint-19.herokuapp.com/')

        landingPage.expectTheDetailsBarPresent();

        landingPage.clickStartAssessmentBtn();

        landingPage.selectSourcesOfInformation();

        landingPage.backToAssessmentProgress();

        landingPage.selectSourcesOfInformation();

        landingPage.selectServiceRecord();

        landingPage.selectSaveAndContinue();

        landingPage.backToAssessmentProgress();

        landingPage.expectTheAssessmentProgressHeadingPresent();

    })
})