describe('Navigation', () => {
	it('should return 404 if page does not exist', () => {
		// Go to a 404 page
		cy.request({
			url: `${Cypress.env('baseUrl')}/super-long-page-title-will-never-exist`,
			failOnStatusCode: false
		})
			.its('status')
			.should('equal', 404);
		cy.visit(`${Cypress.env('baseUrl')}/super-long-page-title-will-never-exist`, {
			failOnStatusCode: false
		});
	});

	it('should go to my personal website', () => {
		// Go on main app
		cy.visit(`${Cypress.env('baseUrl')}/`);

		// Test if link exists
		cy.get('#test-id-about-me').should('not.be.empty');

		// Click "about me" link (remove attribute target to properly test)
		// cy.get('#test-id-about-me').invoke('removeAttr', 'target').click();

		// The new url should be my personal website
		// cy.url().should('eq', 'https://valerisabev.com/');

		// Test if a h1 element exists
		// cy.get('#home').should('not.be.empty');
	});

	it('should change to transactions UI after click', () => {
		// Go on main app
		cy.visit(`${Cypress.env('baseUrl')}/`);

		// Test if transactions button exists
		cy.get('#nav-test-id-transactions').should('not.be.empty');

		// Should be on main page
		cy.url().should('not.include', '/?nav=transactions');

		// Click button (should change url)
		cy.get('#nav-test-id-transactions').click();

		cy.url().should('include', '/?nav=transactions');
	});
});
