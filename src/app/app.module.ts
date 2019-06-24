import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { TerceiroComponent } from './terceiro/terceiro.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuartoComponent } from './quarto/quarto.component';

const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'terceiro', component: TerceiroComponent, data: { title: 'Terceiro Component' } },
  { path: 'quarto', component: QuartoComponent, data: { title: 'Quarto Component' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    TerceiroComponent,
    FooterComponent,
    QuartoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
