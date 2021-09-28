describe('Task 1', function() {
    it('Visit the Site', function() {
      cy.visit('http://www.automationpractice.com.')		//opens URL in chrome browser 
      cy.wait(1000)

      cy.get('.login').click()							// finds the Sign in and clicks on it
      cy.get("#email").type('vikag@yopmail.com')		// fills the email field
      cy.wait(1000)
      
      cy.get('[data-validate="isPasswd"]').type('Welcome1') // fills the password field
      cy.wait(1000)
      
      cy.get('[name=SubmitLogin]').click()				// clicks on Submit login button
        
    })
  })
