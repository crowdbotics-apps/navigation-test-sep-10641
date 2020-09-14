import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210792Navigator from '../features/BlankScreen210792/navigator';
import BlankScreen110730Navigator from '../features/BlankScreen110730/navigator';
import BlankScreen010729Navigator from '../features/BlankScreen010729/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210792: { screen: BlankScreen210792Navigator },
BlankScreen110730: { screen: BlankScreen110730Navigator },
BlankScreen010729: { screen: BlankScreen010729Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
