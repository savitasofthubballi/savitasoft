import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JavafullstackComponent } from './components/javafullstack/javafullstack.component';
import { MeanfullstackComponent } from './components/meanfullstack/meanfullstack.component';
import { MernfullstackComponent } from './components/mernfullstack/mernfullstack.component';
import { PythonfullstackComponent } from './components/pythonfullstack/pythonfullstack.component';
import { ClanguageComponent } from './components/clanguage/clanguage.component';
import { CpplanguageComponent } from './components/cpplanguage/cpplanguage.component';
import { DatastructuresComponent } from './components/datastructures/datastructures.component';
import { AboutComponent } from './components/about/about.component';
import { UnderdevelopmentComponent } from './components/underdevelopment/underdevelopment.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"javafullstack",component:JavafullstackComponent},
    {path:"meanfullstack",component:MeanfullstackComponent},
    {path:"mernfullstack",component:MernfullstackComponent},
    {path:"pythonfullstack",component:PythonfullstackComponent},
    {path:"clanguage",component:ClanguageComponent},
    {path:"cpplanguage",component:CpplanguageComponent},
    {path:"datastructures",component:DatastructuresComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:UnderdevelopmentComponent},
    {path:"contact",component:UnderdevelopmentComponent},
    {path:"**",component:HomeComponent}
];
