import TypeReceita from "../types/TypeReceita"

const BOLO:TypeReceita = {
  nome: 'Bolo de chocolate',
  etapas:[
    {
      nome: "Massa",
      passos: [
        "Adicione 3 ovos",
        "adicione leite"
      ],
    }
  ],
  instrucoes:[
    "pegue o bolo",
    "jogue na parede"
  ],
}

const SUCO:TypeReceita = {
  nome: 'Suco de laranja',
  etapas:[],
  instrucoes:[],
}



const RECEITAS:TypeReceita[] = [
  BOLO,
  SUCO
]

export default RECEITAS