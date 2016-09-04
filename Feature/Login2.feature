Feature: Test Login User

  @Login2
  Scenario Outline: As a registered user I want to Login successfully
    Given I am on the Homepage
    And I click on My Account icon
    And I see a Welcome message banner
    When I enter a "<email>" detail
    And I enter "<passw>" for the user
    And click the Sign In button
    Then I should be logged in
    And I log out

    Examples: 
      | email                | passw       |
      | adebolaa@hotmail.com | password7   |
      | adebola432@gmail.com | password123 |
      | adebola470@gmail.com | password123 |

  @Login2
  Scenario Outline: An error message is displayed when invalid details are entered
    Given I am on the Homepage
    And I click on My Account icon
    And I see a Welcome message banner
    When I enter a "<email>" detail
    And I enter "<passw>" for the user
    And click the Sign In button
    Then I should see an error message

    Examples: 
      | email                | passw       |
      | adebolaa@hotmail.com | word        |
      | zyx@gmail.com        | password123 |
      | london1@gmail.com    | p222        |
      |                      |             |
