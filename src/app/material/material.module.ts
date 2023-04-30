import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatTableModule,
MatPaginatorModule,
MatTooltipModule,
MatCardModule,
MatBadgeModule,
MatSnackBarModule,
MatMenuModule,
MatSelectModule
  ]
})
export class MaterialModule { }
