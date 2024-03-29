import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentUrl = '';

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.currentUrl = this.router.url;
        console.log(this.router.url);
    }

}
