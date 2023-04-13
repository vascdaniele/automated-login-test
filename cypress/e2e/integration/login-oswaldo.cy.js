describe('Login', function() {

  beforeEach(() => {
    cy.visit('https://oswaldo.beepsaude.com.br/')
  })  
  
  it('valida se o campo login é um input do tipo texto.', function(){
    cy.get('#username').should('have.attr', 'type', 'text')
  })
  
  it('verifica se o título da aplicação está correto.', function() {
    cy.get('h2').should('have.text', 'Bem vindo ao OSWALDO!')
  })

  it('verifica se o campo de senha é um input do tipo password', function(){
    cy.get('#password').should('have.attr',  'type', 'password')
  })
})