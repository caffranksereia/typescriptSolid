export interface CustumerOrder {
  getName(): string;
  getIdN(): string;
}

export interface IndividualCustumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustumerProtocol {
  name: string;
  cnpj: string;
}
