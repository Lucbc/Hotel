import { Hospede } from "./hospede.model";
import { Quarto } from "./quarto.model";

export interface Hospedagem {
    idHospedagem?: number; 
    idQuarto: Quarto; 
    idHospede: Hospede; 
    dtCheckin: string;
    dtCheckout: string;
}
