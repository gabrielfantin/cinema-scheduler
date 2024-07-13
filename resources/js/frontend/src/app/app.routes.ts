import { Route } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

// Extending the base route type so we can increment it and use them directly in a menu
export interface MenuRoute extends Route {
    icon?: string;
}

export const routes: MenuRoute[] = [
    { path: 'app-layout', component: MovieComponent, title: 'Movies', icon: 'movie'}
];
