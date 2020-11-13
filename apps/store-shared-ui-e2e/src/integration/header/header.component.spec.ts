describe('store-shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary&knob-title='));

  it('should render the component', () => {
    cy.get('nx-shopping-system-header').should('exist');
  });
});
