describe('Home Page', () => {
  beforeEach(() => {
    // Perform login before each test or navigate to the home page if already logged in
    // ...
  });

  it('should sort the transaction table by amount', () => {
    cy.contains('AMOUNT').click();
    cy.get('table')
      .find('td.text-right')
      .then(($amounts) => {
        const amounts = Array.from($amounts, (el) =>
          parseFloat(el.innerText.replace('$', '').replace(',', ''))
        );
        const sortedAmounts = [...amounts].sort((a, b) => a - b);
        expect(amounts).to.deep.equal(sortedAmounts);
        // Add additional assertions or actions as needed for the sorting test
      });
  });
});