import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Housing App'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'House details'
    }
  ];
  
  export default routeConfig;