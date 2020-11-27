import { Prestation } from './prestation';
import { Salon } from './salon';

export class Reservation {
    idReservation: number;
    dateReservation: Date;
    /* idUtilisateur: number;
 */
    prestations: Prestation[];
    salons: Salon[];
}
