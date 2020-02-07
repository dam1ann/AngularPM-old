import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {resolve} from 'url';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    }, {
        path: 'article/:id',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
