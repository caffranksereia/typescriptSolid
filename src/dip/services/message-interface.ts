import { MessagingInterface } from "../classes/interfaces/messaging-interface";

export class Messaging implements MessagingInterface {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
