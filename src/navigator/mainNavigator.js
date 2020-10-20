import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2151522Navigator from '../features/SignIn2151522/navigator';
import Settings151520Navigator from '../features/Settings151520/navigator';
import UserProfile151513Navigator from '../features/UserProfile151513/navigator';
import Settings151512Navigator from '../features/Settings151512/navigator';
import Settings151510Navigator from '../features/Settings151510/navigator';
import SignIn2151508Navigator from '../features/SignIn2151508/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2151522: { screen: SignIn2151522Navigator },
Settings151520: { screen: Settings151520Navigator },
UserProfile151513: { screen: UserProfile151513Navigator },
Settings151512: { screen: Settings151512Navigator },
Settings151510: { screen: Settings151510Navigator },
SignIn2151508: { screen: SignIn2151508Navigator },

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
