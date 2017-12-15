import { NgModule } from "@angular/core";
import {RouterModule,Routes} from '@angular/router';
import {CatalogRootComponent} from './catalog-root/catalog-root.component';

import { CatalogBookComponent } from "./catalog-book/catalog-book.component";
import { CatalogListComponent } from "./catalog-list/catalog-list.component";



const routes:Routes = [
{
    path:'catalog',component:CatalogRootComponent,
    children:[
        {path:'list',component:CatalogListComponent},
        {path:'book/:id', component:CatalogBookComponent},
        {path:'',pathMatch:'full',redirectTo:'list'},
    ]
}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class CatalogRoutingModule{}