import TypeEtapaReceita from "./TypeEtapaReceita"

type TypeReceita = {
  nome: string, 
  etapas: TypeEtapaReceita[],
  instrucoes: string[],
}

export default TypeReceita 