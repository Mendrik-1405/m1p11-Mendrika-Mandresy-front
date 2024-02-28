
export interface Client {
    _id?: string; // Identifiant optionnel
    nom: string|undefined;
    email?: string|undefined;
    password: string|undefined;
    phone?: string;
    rendezVous?: string[];
    servicesPref?: string[]; 
    employesPref?: string[];
    portefeuille?: number;
}