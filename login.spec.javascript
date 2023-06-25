describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://sakshingp.github.io/assignment/login.html');
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type('valid_username');
    cy.get('#password').type('valid_password');
    cy.get('#loginButton').click();
    cy.get('#welcomeMessage').should('be.visible');
    // Add additional assertions or actions as needed for a successful login
  });

  it('should show an error message for invalid login', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('#loginButton').click();
    cy.get('#errorMessage').should('be.visible');
    // Add additional assertions or actions as needed for an invalid login
  });
});