Feature: Checkout Test

  @Checkout
  Scenario: As a registered user I want to order an item
    Given I am on the Homepage
    And I click on My Account icon
    And I see a Welcome message banner
    When I enter a valid Username
    And I enter a valid Password
    And I click the Sign In button
    And I am logged in
    And I click on the Gadgets Link
    And I click on Buy Now button
    And I click on Checkout button
    And I see Delivery Information banner
    And I click Continue button
    And I click on Cash on Delivery button
    And I click Continue button
    And I click on Confirm Order
    Then I should see Your Order Has Been Processed banner
    And I log out
