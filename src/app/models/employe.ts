
export interface Employe {
    _id?: string; // Identifiant optionnel
    name: string|undefined;
    password: string|undefined;
    phone?: string;
    sexe?: string;
    photo?: string;
    services?: string[]; // Tableau d'identifiants de services
    taches?: string[]; // Tableau d'identifiants de tâches
    horaire?: {
        debut: Date;
        fin: Date;
    };
}