Feature: Pecode Software - AQA internship Login

  Scenario Outline: As User I want to log into the site using Invalid credentials

    Given I navigate to 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php'
    When I enter '<username>' in the 'Username' input
    And I enter '<password>' in the 'Password' input
    And I click the 'Login' button
    Then I expect to see '<username error message>' and '<password error message>'

    Examples:
      | username | password | username error message               | password error message      |
      | user1    | pass1    | No account found with that username. |                             |
      |          | pass2    | Please enter username.               |                             |
      | user3    |          |                                      | Please enter your password. |
      |          |          | Please enter username.               | Please enter your password. |