import { Ocorrencia } from "../types/ocorrencia";

export const mockOcorrencias: Ocorrencia[] = [
  {
    id: 1,
    descricao: "Vegetação alta próxima à placa de sinalização.",
    local: "SP-280 - KM 42",
    risco: "alto",
    data: "22/05/2026",
    equipe: "Equipe de Roçada 01",
    tipoIntervencao: "Roçada mecanizada",
    status: "Pendente",
    observacao: "Trecho com baixa visibilidade para motoristas.",
  },
  {
    id: 2,
    descricao: "Mato em crescimento no acostamento.",
    local: "BR-101 - KM 187",
    risco: "medio",
    data: "21/05/2026",
    equipe: "Equipe de Vistoria 02",
    tipoIntervencao: "Roçada manual",
    status: "Em andamento",
    observacao: "Ocorrência registrada durante inspeção de rotina.",
  },
  {
    id: 3,
    descricao: "Vegetação controlada após vistoria.",
    local: "SP-070 - KM 12",
    risco: "baixo",
    data: "20/05/2026",
    equipe: "Equipe de Monitoramento 03",
    tipoIntervencao: "Monitoramento preventivo",
    status: "Concluída",
    observacao: "Trecho sem necessidade imediata de intervenção.",
  },
];

