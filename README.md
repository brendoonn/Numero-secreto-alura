## Projeto Criado para prática do uso do Git e GitHub

projeto original fornecido pela plataforma de curso <a href="https://cursos.alura.com.br">Alura</a> para aprendizado do curso de <a href="https://cursos.alura.com.br/course/git-github-dominando-controle-versao-codigo">Git e GitHub</a> 

## Projeto

O projeto inicial tinha o propósito de ensinar o básico de programação, onde o código tinha como objetivo gerar um número aleatório e o usuário deveria inserir um número
em um campo para adivinhar o número gerado pelo sistema, funcionando como um jogo.

Com base nesse projeto, modifiquei-o para que, ao invés de digitar um número, o usuário selecionasse um número de uma matriz com 25 números e submetesse a escolha ao 
clicar em um botão para tentar adivinhar. Além disso, foi inserido um contador para registrar o número de tentativas.

O projeto inicial também foi atualizado para incluir uma API fornecida pelo ResponsiveVoice, que, ao iniciar a aplicação, faz com que uma voz produzida por IA leia o
texto na tela. Essa API deve ser configurada, pois é gratuita e, após 30 dias a partir da geração da chave, deixará de funcionar, e o código apresentará um erro. 
Para mais informações, visite a documentação no site https://responsivevoice.org.

## Anotações do curso

Principais comandos para revisar e uma breve descrição de cada

### **1. git init**
- **Descrição:** Inicializa um novo repositório Git vazio no diretório atual.
- **Uso:** `git init`

### **2. git clone**
- **Descrição:** Cria uma cópia local de um repositório remoto.
- **Uso:** `git clone <URL-do-repositório>`

### **3. git add**
- **Descrição:** Adiciona arquivos ao índice (stage) para preparação antes do commit.
- **Uso:** `git add <arquivo>` ou `git add .` (para adicionar todos os arquivos modificados)

### **4. git commit**
- **Descrição:** Salva as mudanças preparadas no repositório local com uma mensagem de commit.
- **Uso:** `git commit -m "Mensagem do commit"`

### **5. git status**
- **Descrição:** Mostra o estado atual do diretório de trabalho e do índice (stage).
- **Uso:** `git status`

### **6. git log**
- **Descrição:** Exibe o histórico de commits do repositório.
- **Uso:** `git log`

### **7. git diff**
- **Descrição:** Mostra as diferenças entre as mudanças no diretório de trabalho e o índice (stage).
- **Uso:** `git diff`

### **8. git branch**
- **Descrição:** Lista, cria ou exclui branches.
- **Uso:** `git branch` (lista branches), `git branch <nome-da-branch>` (cria uma nova branch), `git branch -d <nome-da-branch>` (exclui uma branch)

### **9. git checkout**
- **Descrição:** Altera a branch ativa ou restaura arquivos do repositório.
- **Uso:** `git checkout <nome-da-branch>` (muda de branch), `git checkout -- <arquivo>` (restaura um arquivo)

### **10. git merge**
- **Descrição:** Integra as mudanças de uma branch na branch ativa.
- **Uso:** `git merge <nome-da-branch>`

### **11. git pull**
- **Descrição:** Atualiza o repositório local com as mudanças do repositório remoto e faz um merge automático.
- **Uso:** `git pull`

### **12. git push**
- **Descrição:** Envia os commits locais para o repositório remoto.
- **Uso:** `git push <remoto> <branch>`

### **13. git remote**
- **Descrição:** Gerencia conexões remotas para o repositório.
- **Uso:** `git remote -v` (lista remotos), `git remote add <nome> <URL>` (adiciona um novo remoto)

### **14. git fetch**
- **Descrição:** Baixa as mudanças do repositório remoto, mas não as integra ao repositório local.
- **Uso:** `git fetch <remoto>`

### **15. git reset**
- **Descrição:** Desfaz commits ou remove mudanças do índice (stage) e/ou do diretório de trabalho.
- **Uso:** `git reset <opções>`

### **16. git stash**
- **Descrição:** Armazena temporariamente mudanças não commitadas para limpar o diretório de trabalho.
- **Uso:** `git stash` (armazenar mudanças), `git stash pop` (restaurar mudanças armazenadas)

### **17. git rebase**
- **Descrição:** Reaplica commits de uma branch em outra, para manter um histórico linear.
- **Uso:** `git rebase <branch>`

### **18. git tag**
- **Descrição:** Marca pontos específicos na história do repositório, frequentemente usados para releases.
- **Uso:** `git tag <nome-da-tag>` ou `git tag -a <nome-da-tag> -m "Mensagem"`

### **19. git switch**
- **Descrição:** Facilita a troca entre branches no repositório. Foi introduzido para simplificar e tornar mais intuitivo o processo de troca de branches, substituindo parte da funcionalidade do `git checkout` para esse propósito.
- **Uso:** `git switch <nome-da-branch>`

### **20. git blame**
- **Descrição:** Exibe informações sobre quem modificou cada linha de um arquivo e quando essas modificações foram feitas.
- **Uso:** `git blame <nome-do-arquivo>`
  

## *Lembrando que alguns comandos podem ser executados com alguns parâmetros não obrigatórios para ampliar seu uso, para saber mais acesse a documentação do git*
