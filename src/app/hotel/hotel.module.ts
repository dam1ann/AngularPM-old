import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './hotel.component';
import {HotelRoutingModule} from './hotel-routing.module';


@NgModule({
    declarations: [
        HotelComponent,
    ],
    imports: [
        CommonModule,
        HotelRoutingModule
    ]
})
export class HotelModule {
}
