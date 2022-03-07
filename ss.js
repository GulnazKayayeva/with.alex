let name = prompt('Как вас зовут?')

name = name.trim()

if( name.slice(0,1) === 'a' || name.slice(0,1) === 'A' || name.slice(0,1) === 'А'|| name.slice(0,1) === 'а'  ){
    let a = alert('Вход в клуб вам открыт!')
} else{
    let b = alert('Извините,вы не подходите :(')
}

