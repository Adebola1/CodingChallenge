Feature: Register Test

  @Register
  Scenario: As a new user I want to register
    Given I am on the Homepage
    And I click on My Account icon
    And I see a Welcome message banner
    When I enter all the user data in the registration form
    Then I should see Your Account Has Been Created! banner
    #And I log out
