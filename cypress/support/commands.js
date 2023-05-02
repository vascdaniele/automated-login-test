Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.visit('https://oswaldo-staging.beepapp.com.br/sessions/new')

    cy.get('#username').type(user)
    cy.get('#password').type(password, { log: false })
    cy.get('.btn[type="submit"]').click()
  }

  login()

})