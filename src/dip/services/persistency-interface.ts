import { PersistingInterface } from "../classes/interfaces/persistency-inteface";

export class Persisting implements PersistingInterface {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
