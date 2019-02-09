import {  NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule
    ]
})

export class AngularMaterialModule{ }