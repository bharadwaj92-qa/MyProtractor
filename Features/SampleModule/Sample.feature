Feature: To test sample

Scenario Outline: Verify user is able to login into Google site

Given user launches Google search engine
When user enters any text "<text>" and hits enter
Then user should see the results

Examples:
| text      |
| Inflation |


