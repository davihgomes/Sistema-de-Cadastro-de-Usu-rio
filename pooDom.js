//Events from POO
class User{
    constructor(id, nome, email){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class ManagerUser{
    constructor(){
        this.users = [];
    }

    adicionar(Newpessoa){
        return this.users.push(Newpessoa)
    }

    remover(number){
        return this.users.splice(number, 1)
    }

    procurar(quantidade, tipoDado, dadoEspecifico){
        if(quantidade <= 1){
            if(tipoDado === 'nome'){
                const usuarioEncontrado = this.users.find(user => user.nome === dadoEspecifico)
                return console.log(usuarioEncontrado);
            } else if(tipoDado === 'email'){
                const usuarioEncontrado = this.users.find(user => user.email === dadoEspecifico)
                return console.log(usuarioEncontrado);
            } else{
                return console.log('Tipo de dado Inexistente')
            }
        } 
        
        if(quantidade > 1){
            if(tipoDado === 'nome'){
                const usuarioEncontrado = this.users.filter(user => user.nome === dadoEspecifico)
                return console.log(usuarioEncontrado);
            } else if(tipoDado === 'email'){
                const usuarioEncontrado = this.users.filter(user => user.email === dadoEspecifico)
                return console.log(usuarioEncontrado);
            } else{
                return console.log('Tipo de dado Inexistente')
            }
        }
        
    }
}

// Events DOM
let botao = document.querySelector('#adicionar')
botao.addEventListener('click', adicionar)

function adicionar(){ 
    // Add Tags of the HTML
    let id = (Math.random() * 1000).toFixed(0)

    let inputName = document.querySelector('#nome');
    let inputEmail = document.querySelector('#email');
    let ul = document.querySelector('ul')
    let newLi = document.createElement('li')
    let newBtn = document.createElement('button')
    newBtn.innerText = 'Remover'
    newBtn.value = id
    let nome = inputName.value 
    let email = inputEmail.value
    newLi.append(nome)
    newLi.append(' - ')
    newLi.append(email)
    newLi.append(newBtn)
    ul.appendChild(newLi)
    inputName.value = '';
    inputEmail.value = '';


    //funcao remover
    newBtn.addEventListener('click', remover)
    
    
    // Add Config of the Gerenciador
    
    

    const Newpessoa = new User(id, nome, email)
    console.log(Gerenciador.users)
    Gerenciador.adicionar(Newpessoa)
}


function remover(e){
    const indice = Gerenciador.users.findIndex(user => user.id === e.target.value)
    Gerenciador.remover(indice)
    console.log(Gerenciador.users)
    return e.target.parentElement.remove()
}

const Gerenciador = new ManagerUser()
