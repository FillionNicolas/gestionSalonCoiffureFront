import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './service/reservation.service';
import { PrestationService } from './service/prestation.service';
import { SalonService } from './service/salon.service';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ServicesComponent,
        ReservationsComponent,
        ReclamationsComponent,
        BoutiqueComponent,
        IndexComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [ReservationService, PrestationService, SalonService],
    bootstrap: [AppComponent]
})
export class AppModule { }