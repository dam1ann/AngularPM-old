import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestinationComponent} from './destination.component';
import {DestinationRoutingModule} from './destination-routing.module';


@NgModule({
    declarations: [DestinationComponent],
    imports: [
        CommonModule,
        DestinationRoutingModule
    ]
})
export class DestinationModule {
}
