import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed1151556Navigator from '../features/Feed1151556/navigator';
import Dashboard13151554Navigator from '../features/Dashboard13151554/navigator';
import SignIn14151553Navigator from '../features/SignIn14151553/navigator';
import SignIn46151552Navigator from '../features/SignIn46151552/navigator';
import UserProfile6151551Navigator from '../features/UserProfile6151551/navigator';
import Settings7151550Navigator from '../features/Settings7151550/navigator';
import Settings151534Navigator from '../features/Settings151534/navigator';
import UserProfile151527Navigator from '../features/UserProfile151527/navigator';
import Settings151526Navigator from '../features/Settings151526/navigator';
import Settings151524Navigator from '../features/Settings151524/navigator';
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
Feed1151556: { screen: Feed1151556Navigator },
Dashboard13151554: { screen: Dashboard13151554Navigator },
SignIn14151553: { screen: SignIn14151553Navigator },
SignIn46151552: { screen: SignIn46151552Navigator },
UserProfile6151551: { screen: UserProfile6151551Navigator },
Settings7151550: { screen: Settings7151550Navigator },
Settings151534: { screen: Settings151534Navigator },
UserProfile151527: { screen: UserProfile151527Navigator },
Settings151526: { screen: Settings151526Navigator },
Settings151524: { screen: Settings151524Navigator },
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
