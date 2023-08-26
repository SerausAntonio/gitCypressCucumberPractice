Feature: Login functionality
 
    This feature will do the login test
 
    Scenario: Login with valid credentials
    Given I am on the Login page
    When I login with valid credentials and clicked on sign in
    |username             | password    |
    |cypressdemo@gmail.com| cypressdemo |
    And I click on settings button
    And I click on Logout button
    Then I routed back to login page