import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { 
      path: 'home', 
      component: HomeComponent 
    },
    { 
      path: '', 
      component: LoginComponent 
    }
  ];