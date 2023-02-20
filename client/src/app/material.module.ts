// Modulo hecho para separar las importaciones del material angular, al resto de importaciones
import { NgModule } from '@angular/core';
// Modulos de material angular:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
    ]
})

export class MaterialModule { }