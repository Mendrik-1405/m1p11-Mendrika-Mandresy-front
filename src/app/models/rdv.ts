import { Employe } from "./employe";
import { Service } from "./service";

export interface Rdv {
    _id: string;
    dateheure: Date;
    serviceEmpl: ServiceEmpl[];
}

interface ServiceEmpl {
    _id: string;
    service: Service;
    employe: Employe;
}