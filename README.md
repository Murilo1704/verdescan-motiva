# VerdeScan Motiva - Sprint 2

## Sobre o projeto

O VerdeScan Motiva é um aplicativo desenvolvido em React Native com Expo para registrar e acompanhar ocorrências de vegetação em rodovias.

Nesta Sprint 2, o objetivo foi transformar o protótipo definido na Sprint 1 em um aplicativo funcional, utilizando dados mockados, TypeScript, componentes, telas separadas e gerenciamento de estado.

O app simula o fluxo de trabalho de uma equipe que registra ocorrências de vegetação em trechos rodoviários, classificando cada ocorrência por nível de risco.

---

## Objetivo da Sprint 2

A Sprint 2 tem como foco a construção de um aplicativo funcional rodando no Expo.

O projeto atende aos seguintes pontos:

- Lista de ocorrências
- Cadastro de nova ocorrência
- Detalhe da ocorrência
- Uso de TypeScript
- Uso de estado com `useState`
- Dados mockados
- Componentização
- Organização em pastas
- Persistência local com AsyncStorage como evolução

---

## Funcionalidades do aplicativo

O aplicativo permite:

1. Visualizar uma lista de ocorrências cadastradas.
2. Ver a quantidade de ocorrências por nível de risco:
   - Baixo
   - Médio
   - Alto
3. Cadastrar uma nova ocorrência.
4. Informar rodovia, quilômetro, equipe responsável, data, descrição e risco.
5. Salvar a ocorrência no estado da aplicação.
6. Exibir a nova ocorrência na lista.
7. Abrir uma ocorrência para visualizar seus detalhes.
8. Manter as ocorrências salvas mesmo após recarregar o app, usando AsyncStorage.

---

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- useState
- useEffect
- AsyncStorage
- Dados mockados

---

## Estrutura do projeto

```txt
src/
  components/
    OcorrenciaCard.tsx

  data/
    mockOcorrencias.ts

  screens/
    ListaOcorrenciasScreen.tsx
    CadastroOcorrenciaScreen.tsx
    DetalheOcorrenciaScreen.tsx

  types/
    ocorrencia.ts

App.tsx
README.md