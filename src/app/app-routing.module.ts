// Le routage pour l'application Angular est configuré comme un tableau de Routes, chaque composant est mappé sur un chemin afin que le routeur angulaire sache quel composant afficher en fonction de l'URL dans la barre d'adresse du navigateur.
// La route de la page d'accueil est sécurisée en passant AuthGuard à la propriété canActivate de la route.
// Le tableau Routes est transmis à la méthode RouterModule.forRoot() qui crée un module de routage avec toutes les routes d'application configurées et inclut également tous les fournisseurs de routeurs angulaires et les directives telles que <router-outlet></router-outlet> directive.

import { Routes, RouterModule } from '@angular/router';
import {CandidatListComponent} from './_components/_list/candidat-list';

import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AuthGuard } from './_helpers ';
import { FourofourComponent } from './_models/fourofour';
import { CandidatAddComponent } from './_components/_add/candidat-add/candidat-add.component';
import { EditCandidatComponent } from './_components/_edit/edit-candidat/edit-candidat.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'not-found', component: FourofourComponent },

    { path: 'candidats-list', component: CandidatListComponent },
    { path: 'add-candidat', component: CandidatAddComponent },
    { path: 'edit-candidat/:id', component: EditCandidatComponent },
    { path: 'candidats/:id', component: CandidatListComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/not-found' }
];

export const appRoutingModule = RouterModule.forRoot(routes);