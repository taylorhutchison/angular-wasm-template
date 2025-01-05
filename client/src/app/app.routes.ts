import { Routes } from '@angular/router';
import { GreetComponent } from './components/greet.component';
import { libResolver } from './resolvers/lib.resolver';

export const routes: Routes = [
    {
        path: 'greet',
        component: GreetComponent,
        resolve: {
            init: libResolver,
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/greet',
    }
];
 