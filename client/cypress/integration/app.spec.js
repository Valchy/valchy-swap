describe('Navigation', () => {
	it('should navigate to the next.js page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Find a link with an href attribute containing "about" and click it
		cy.get('#test-link').click();

		// The new url should include "/about"
		cy.url().should('include', '/about');

		// The new page should be a 404 page
		cy.get('h1').contains('404');
	});
});
