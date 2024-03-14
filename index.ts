const fs=require('fs');

const lerArquivo=(): unknown=>{
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escever=(dados:any):void=>{
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}


//const dados= lerArquivo()  as string[];

////dados.push('é nois')

//escever(dados)
//console.log(lerArquivo())


type Usuario={
    nome: string,
email:string,
cpf:string,
profissao? :string,
endereco :Endereco | null
};

type Endereco={
    cep:string
rua:string
complemento:string
bairro:string
cidade:string
};

const cadastrarUsuario=(dados:Usuario):Usuario=>{
    const da= lerArquivo() as Usuario[];
    da.push(dados);
    escever(da)

    return dados
};

const listarUsu=():Usuario[]=>{
    return lerArquivo() as Usuario[]
};

const teste = cadastrarUsuario({
    nome: 'string',
email:'string',
cpf:'string',
profissao :'string',
endereco : {cep:'string',
rua:'string',
complemento:'string',
bairro:'string',
cidade:'string'
}})


console.log(lerArquivo(),teste)




const excluirUsuario=(cpf:string):Usuario =>{
    const bd= lerArquivo() as Usuario[];
    const usuario= bd.find(usuario=>{
return usuario.cpf===cpf
    })
    if(!usuario){
    throw new Error("Usuario não encontrado");
    
}
const exclusão= bd.filter(usuario=>{
    return usuario.cpf!==cpf
})
escever(exclusão);
return usuario
}

const filtrarUsuario=(filter:string):Usuario[]=>{
    const bd= lerArquivo() as Usuario[];
    const usuarios= bd.filter(usuario=>{
        if (filter){
            return usuario.profissao=== filter
        }
        return usuario
    }
    )
    return usuarios
}

    
console.log(excluirUsuario('string'))