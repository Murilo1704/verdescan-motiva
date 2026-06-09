# VerdeScan Motiva - Sprint 2

## Integrantes

- Murilo Justino Arcanjo - RM565470
- Rafael Quattrer - RM562052
- Kaio Corrêa - RM563443
- Rafael Louzã Lopes - RM564963
- Luiz Miguel Martin Crocco - RM562796

---

## Sobre o Projeto

O VerdeScan Motiva é um aplicativo desenvolvido em React Native com Expo e TypeScript para auxiliar no monitoramento de vegetação em rodovias.

A aplicação permite registrar ocorrências, classificá-las por nível de risco e armazenar informações relevantes para apoiar as equipes responsáveis pela manutenção dos trechos monitorados.

---

## Funcionalidades

- Listagem de ocorrências
- Cadastro de novas ocorrências
- Visualização de detalhes
- Classificação por risco (baixo, médio e alto)
- Exclusão de ocorrências
- Validação de campos obrigatórios
- Persistência local utilizando AsyncStorage

---

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- AsyncStorage
- useState
- useEffect

---

## Estrutura do Projeto

```text
src/
├── components/
├── data/
├── screens/
└── types/
```

---

## Modelagem

```typescript
export type Ocorrencia = {
  id: number;
  descricao: string;
  local: string;
  risco: "baixo" | "medio" | "alto";
  data: string;
  equipe: string;
  tipoIntervencao: string;
  status: string;
  observacao: string;
};
```

---

## Dados Mockados

Os dados iniciais utilizados pela aplicação estão localizados em:

```text
src/data/mockOcorrencias.ts
```

Esses registros simulam ocorrências reais relacionadas ao crescimento da vegetação em rodovias.

---

## Como Rodar o Projeto

Instalar as dependências:

```bash
npm install
```

Executar o projeto:

```bash
npx expo start
```

Abrir no navegador:

```bash
npm run web
```

---

## Fluxo da Aplicação

1. O usuário visualiza a lista de ocorrências.
2. Pode cadastrar uma nova ocorrência.
3. O sistema valida os campos obrigatórios.
4. A ocorrência é salva e exibida na lista.
5. O usuário pode consultar os detalhes ou excluir registros.

---

## Vídeo Demonstrativo

Link do vídeo:

EM BREVE

---

## Conclusão

O VerdeScan Motiva demonstra a aplicação dos conceitos estudados em aula, utilizando React Native, TypeScript, componentização, gerenciamento de estado e persistência de dados para resolver um problema relacionado ao monitoramento de vegetação em rodovias.