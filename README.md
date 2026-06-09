# 🌿 VerdeScan Motiva - Sprint 2

## Integrantes

* Murilo Justino Arcanjo - RM565470
* Rafael Quattrer - RM562052
* Kaio Corrêa - RM563443
* Rafael Louzã Lopes - RM564963
* Luiz Miguel Martin Crocco - RM562796

---

# 📌 Sobre o Projeto

O VerdeScan Motiva é um aplicativo desenvolvido em React Native com Expo e TypeScript que simula o monitoramento de vegetação em rodovias.

A aplicação permite registrar ocorrências relacionadas ao crescimento da vegetação, classificá-las por nível de risco e armazenar informações relevantes para auxiliar equipes responsáveis pela manutenção das rodovias.

O objetivo é apoiar o processo de priorização de intervenções, reduzindo riscos causados por vegetação excessiva em acostamentos, placas de sinalização e áreas de visibilidade reduzida.

---

# 🎯 Objetivo da Sprint 2

Transformar o protótipo idealizado na Sprint 1 em uma aplicação funcional utilizando:

* Expo
* React Native
* TypeScript
* Componentização
* Controle de estado com useState
* Dados mockados
* Persistência local com AsyncStorage

---

# 🚀 Funcionalidades Implementadas

### Lista de Ocorrências

* Visualização de todas as ocorrências cadastradas.
* Indicadores de risco:

  * Baixo
  * Médio
  * Alto
* Exibição de:

  * Local
  * Data
  * Equipe responsável
  * Tipo de intervenção
  * Status

### Cadastro de Ocorrência

Permite registrar uma nova ocorrência informando:

* Descrição
* Local
* Data
* Equipe responsável
* Tipo de intervenção
* Status
* Observação
* Nível de risco

### Validação de Dados

O sistema impede o cadastro caso existam campos obrigatórios vazios.

Além disso, informa exatamente quais campos precisam ser preenchidos.

### Detalhamento da Ocorrência

Cada ocorrência pode ser visualizada individualmente contendo todas as informações registradas.

### Exclusão de Ocorrências

O usuário pode remover ocorrências cadastradas diretamente pela lista.

### Persistência Local

As ocorrências são armazenadas utilizando AsyncStorage, permitindo manter os dados mesmo após fechar a aplicação.

---

# 🛠 Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* AsyncStorage
* useState
* useEffect

---

# 📂 Estrutura do Projeto

```text
src/
│
├── components/
│   └── OcorrenciaCard.tsx
│
├── data/
│   └── mockOcorrencias.ts
│
├── screens/
│   ├── ListaOcorrenciasScreen.tsx
│   ├── CadastroOcorrenciaScreen.tsx
│   └── DetalheOcorrenciaScreen.tsx
│
└── types/
    └── ocorrencia.ts
```

---

# 📊 Modelagem de Dados

```typescript
export type Risco = "baixo" | "medio" | "alto";

export type Ocorrencia = {
  id: number;
  descricao: string;
  local: string;
  risco: Risco;
  data: string;
  equipe: string;
  tipoIntervencao: string;
  status: string;
  observacao: string;
};
```

---

# ▶ Como Executar

## Instalar dependências

```bash
npm install
```

## Instalar AsyncStorage

```bash
npx expo install @react-native-async-storage/async-storage
```

## Executar projeto

```bash
npx expo start
```

## Executar no navegador

```bash
npm run web
```

---

# 🔄 Fluxo de Funcionamento

1. O usuário acessa a lista de ocorrências.
2. Seleciona "Nova ocorrência".
3. Preenche todas as informações obrigatórias.
4. O sistema valida os campos.
5. A ocorrência é salva.
6. A lista é atualizada automaticamente.
7. O usuário pode visualizar os detalhes.
8. O usuário pode excluir ocorrências quando necessário.

---

# 📽 Demonstração

O vídeo de demonstração apresenta:

* Cadastro de ocorrência.
* Validação dos campos.
* Persistência dos dados.
* Visualização da lista.
* Tela de detalhes.
* Exclusão de ocorrências.

Link do vídeo: 

---

# 🏁 Conclusão

O VerdeScan Motiva demonstra uma solução digital para apoiar o monitoramento e a priorização de intervenções em vegetação ao longo das rodovias.

A aplicação utiliza conceitos de desenvolvimento mobile com React Native e TypeScript, aplicando componentização, gerenciamento de estado, persistência local e boas práticas de organização de código.
