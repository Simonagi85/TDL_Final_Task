Feature: SwagLabs Feature File

    Background:
        Given User has opened SwagLabs website

    Scenario Outline: Login in SwagLabs profile
        Given User inputs username  - "<username>"
        And User inputs pasword - "<password>"
        When User presses the Login button
        Then User is on SwagLabs product page
        And This is the usage of data table using array
            | a | b | c |
        And This is the usage of data table using object
            | Tax   | 11.30 |
            | Total | 80    |

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
    #    | problem_user  | secret_sauce |

    Scenario: Login in with locked out Swaglabs profile credentials
        Given User inputs username  - "locked_out_user"
        And User inputs pasword - "secret_sauce"
        When User presses the Login button
        Then User sees an error message - "Epic sadface: Sorry, this user has been locked out."

    Scenario: User sorts product list by Price (low to high)
        Given User inputs username  - "standard_user"
        And User inputs pasword - "secret_sauce"
        When User presses the Login button
        Then User is on SwagLabs product page
        When User sorts product list by "Price (low to high)"
        Then User sees product - "Sauce Labs Onesie" with price - "$7.99"

    Scenario: Logout from SwagLabs profile
        Given User inputs username  - "standard_user"
        And User inputs pasword - "secret_sauce"
        When User presses the Login button
        Then User is on SwagLabs product page
        When User opens the side navigation button
        And User clicks the Logout button
        Then User is redirected to login page

    @WIP
    Scenario: User orders a product from the SwagLabs store
        Given User has opened SwagLabs website
        And User inputs username  - "standard_user"
        And User inputs pasword - "secret_sauce"
        When User presses the Login button
        Then User is on SwagLabs product page
        When User adds Sauce Labs Fleece Jacket to the shopping cart
        #  TO DO When User adds - "Sauce Labs Fleece Jacket" to the shopping cart
        # (The for loop should be used until we identify the right product (click the 6th ADD button))
        And User opens shopping cart
        # TO DO Then User sees product - "Sauce Labs Fleece Jacket" with price - "$49.99"
        # (Get text and price from the cart item list)
        When User presses checkout button
#TO DO And User fills the checkout information
# (Data table with inputs. Send keys to the input fields.)

#And User press button to continue with the order
#And User sees correct product details in checkout overview
#And User press finish order button
#Then User sees that order has been completed
#And User goes back to the products page
#And User is on SwagLabs products page
