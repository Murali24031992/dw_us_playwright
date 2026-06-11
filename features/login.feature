Feature: Practice Test Login
  As a user
  I want to log in to the practice test site
  So that I can verify correct login behavior

  Background:
    Given I open the login page

  Scenario: Successful login with valid credentials from Excel
    When I login with valid credentials from the Excel sheet
    Then I should be redirected to the logged in page
    And I should see a logout button

  Scenario: Login fails with invalid username
    When I login with username "Master" and password "Password123"
    Then I should see an invalid username error

  Scenario: Login fails with invalid password
    When I login with username "student" and password "Master123"
    Then I should see an invalid password error
