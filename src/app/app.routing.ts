import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ServicesComponent } from './services/services.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateAccountComponent } from './createAccount/createaccount.component';

const routes: Routes =[
    { path: '', redirectTo: 'index2', pathMatch: 'full' },
    { path: 'index',               component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'login',               component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'services',             component: ServicesComponent},
    { path: 'reservations',         component: ReservationsComponent},
    { path: 'reclamations',         component: ReclamationsComponent},
    { path: 'boutique',             component: BoutiqueComponent},
    { path: 'index2',                component: IndexComponent },
    { path: 'logout',               component: LogoutComponent },
    { path : 'createAcount',        component : CreateAccountComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule
    ],
})
export class AppRoutingModule { }
