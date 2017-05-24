import { Routes ,RouterModule} from '@angular/router';
import { AddressOne } from './addressOne';
const app:Routes=[
{
	path:'ad1',component:AddressOne}
]
export const routing=RouterModule.forRoot(app);