Feature: Test Change Password

@ChangePassword
  Scenario: As a registered user I want to Change my Password
    Given I am on the Homepage
    And I click on My Account icon
    And I see a Welcome message banner
    When I enter a valid Username
    And I enter a valid Password
    And click the Sign In button
    And I should be logged in
    And I click on Change my account password
    And I see a My Password banner
    When I enter my valid Password
    And I enter a new Password
    And I enter a Password confirmation
    And I click the Continue button
    Then I should see a My Account Information banner
