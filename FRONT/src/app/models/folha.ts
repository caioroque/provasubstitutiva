import { Funcionario } from "./funcionario";

export interface Folha {
    id?: number;
    quantHoras: string;
    valorHoras: string;
    mes: string;
    ano: string;
    criadoem?: string;
    funcionarioId: number;
    funcionario?: Funcionario;
}
