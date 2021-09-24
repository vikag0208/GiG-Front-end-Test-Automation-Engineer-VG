# GiG-Front-end-Test-Automation-Engineer
This is test task  for  Front-end-Test-Automation-Engineer

## Overview 
This is my readme file for the project created for GIG Code  Challenge

### Prerequisites 
Cypress Installation and Project Set Up
1. Download Node and NPM
2. Set NODE_ NPM
3. Create Cypress Working Folder
4. Generate  package.json
5. Install Cypress
6. Download Visual Studio Code Editor
7. Test Runner-We can write testcases and  execute testcases in Cypress

#### Writing Test Cases
Cypress just automate the browser.If the user managed test cases and test suits, her or she has to integrate some framework . 
For example Mocha. It is default in Cypress 

#### Locating Elements-Capturing CSS Selectors
 Cypress supports only CsS as a locator.
 1. Right click on Element->inspect->copy->copy selector
 2. ChroPathy extension for Chrome automatecally get CSS selector
 3. Selector  Playground from Test Runner
 
###### Running the tests
1. Write the test cases in Visual Studio Code
2. Save the file
3. Execute it ->launch  test runner
4. Go to terminal and run the following command 
node_modules/.bin/cypress open
5. To run all the test under directory ->following comand
node_modules/.bin/cypress run

###### Tasks
Write automated tests for the following features against the website
www.automationpractice.com.

Task 1 - Testing the Sign-in feature.
1. Load the homepage
2. Click on the ‘Sign in’ button
3. Input value in ‘Email address’ text box
4. Input value in ‘Password’ text box
5. Click on the ‘Sign in’ button
Create tests to cover the Sign-in functionality.

Task 2 - Testing that the Shopping Cart tracks items correctly.
1. Load the homepage
2. Search for ‘black dress’
3. Add to cart the first dress
4. Add to cart the second dress
5. Click on ‘Proceed to checkout’
6. Change the quantity of the second dress to ‘2’.
7. Remove the first dress from the cart
8. Click on ‘Proceed to checkout’
Create tests to cover the above user journey


###### Difficulties
1. When the user first time rusn the comand in Visual Comand Code, error message is displayed. 
This issue is possible to solve if the user verified the Cypress via
\AppData\Local\Cypress\Cache
2.  When  I was  writing  scypts for Task 2 ->step  5. Click on ‘Proceed to checkout’
I was getting the  following error "Timed out retrying after 4050ms: cy.click() failed because this element is not visible"
.click({force: true}) worked for me.
