import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ShellComponent
  ]
})
export class LayoutModule { }
