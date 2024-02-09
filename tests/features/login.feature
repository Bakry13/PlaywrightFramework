Feature: login to OrangeHRM

Scenario: Verify that we login button has the correct test
    Given I visit OrangeHRM portal
    Then I should see login button has the correct text

Scenario Outline: Verify that we can login to OrangeHRM with valid credentials
    Given I visit OrangeHRM portal
    When I login with "<username>" and "<password>"
    Then I should see home page
    Examples: 
      | username | password |
      | Admin    | admin123 |