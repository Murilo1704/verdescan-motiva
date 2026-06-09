# VerdeScan Motiva - Sprint 2

## Integrantes

- Murilo Justino Arcanjo - RM565470
- Rafael Quattrer - RM562052
- Kaio Corrêa - RM563443
- Rafael Louzã Lopes - RM564963
- Luiz Miguel Martin Crocco - RM562796

## Sobre o projeto

O VerdeScan Motiva é um aplicativo desenvolvido em Expo com TypeScript para simular o registro e o acompanhamento de ocorrências relacionadas ao crescimento de vegetação em rodovias.

O objetivo da Sprint 2 é transformar o protótipo definido na Sprint 1 em um aplicativo funcional, utilizando dados mockados e controle de estado.

## Funcionalidades implementadas

- Lista de ocorrências de vegetação
- Cadastro de nova ocorrência
- Visualização dos detalhes da ocorrência
- Classificação por risco: baixo, médio e alto
- Exibição de equipe responsável
- Exibição do tipo de intervenção
- Exibição do status da ocorrência
- Observações adicionais
- Dados mockados
- Salvamento local com AsyncStorage
- Navegação condicional com useState

## Estrutura do projeto

```text
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

    