describe('Login', function() {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  
    cy.visit('https://oswaldo-staging.beepapp.com.br')
   
  }); 
  
  it('valida se o campo login é um input do tipo texto.', function(){
    cy.get('#username').should('have.attr', 'type', 'text')
  });
  
  it('verifica se o título da aplicação está correto.', function() {
    cy.get('h2').should('have.text', 'Bem vindo ao OSWALDO!')
  });

  it('verifica se o campo de senha é um input do tipo password', function(){
    cy.get('#password').should('have.attr',  'type', 'password')
  });

  it('preenche campo com usuario e senha existentes e verifica se o login é efetuado', () => {
    cy.login()
    
    cy.get('h4').should('be.visible')
  });

  it('valida o login  com campo "Usuario" em branco.', () => {
    const password = Cypress.env('user_password')

    cy.get('#username').should('have.text', '')
    cy.get('#password').type(password, { log: false } )
    cy.get('.btn[type="submit"]').click()

    cy.get('.alert').should('be.visible')  

  });

  it('valida login com o campo "Senha" em branco.', () => {
    const user = Cypress.env('user_name')

    cy.get('#username').type(user)
    cy.get('#password').should('have.text', '')
    cy.get('.btn[type="submit"]').click()

    cy.get('.alert').should('be.visible')   
    
  });

  it('preenche campos usuario e senha que não existem.', () => {
    cy.get('#username').type('daniele@beepsaude.com.br')
    cy.get('#password').type('123456')
    cy.get('.btn[type="submit"]').click()

    cy.get('.alert').should('be.visible')

  });

  it('vefica se há um botão do tipo "submit" com o texto "entrar".', () => {
    cy.get('.btn').should('have.attr', 'type', 'submit')
  });

})