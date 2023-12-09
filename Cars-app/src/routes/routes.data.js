import Home from '../components/screens/Home/Home'
import NewCars from '../components/screens/new-cars/NewCars'
import CarsItem from '../components/screens/cars-item/CarsItem'
export const routes = [
	{
		path: '/new-cars',
		exact: false,
		component: NewCars,
	},
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/cars-item/:id',
		exact: false,
		component: CarsItem,
	},
]
