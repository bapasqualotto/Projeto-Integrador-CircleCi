import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard]  },
  { path: 'entrega', loadChildren: './pages/entrega/entrega.module#EntregaPageModule',canActivate: [AuthGuard] },
  { path: 'servico', loadChildren: './pages/servico/servico.module#ServicoPageModule', canActivate: [AuthGuard] },
  { path: 'solicitadas', loadChildren: './pages/solicitadas/solicitadas.module#SolicitadasPageModule', canActivate: [AuthGuard] },
  { path: 'andamento', loadChildren: './pages/andamento/andamento.module#AndamentoPageModule', canActivate: [AuthGuard] },
  { path: 'realizadas', loadChildren: './pages/realizadas/realizadas.module#RealizadasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
