import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    }, {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
