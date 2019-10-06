import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Main: createStackNavigator({
            List,
            Book
        })
    })
);

export default Routes;