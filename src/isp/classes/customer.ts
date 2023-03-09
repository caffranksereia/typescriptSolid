import {
  IndividualCustumerProtocol,
  EnterpriseCustumerProtocol,
  CustumerOrder,
} from "./interfaces/custumer-protocol-interface";

export class IndividualCustumer
  implements IndividualCustumerProtocol, CustumerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstname: string, lastName: string, cpf: string) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + '' + this.lastName;
  }
  getIdN(): string {
    return this.cpf;
  }
}
export class EnterpriseCustumer
  implements EnterpriseCustumerProtocol, CustumerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }
  getIdN(): string {
    return this.cnpj;
  }

}
