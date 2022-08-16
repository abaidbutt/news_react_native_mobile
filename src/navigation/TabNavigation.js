import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Notification from '../screens/Notification';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
const {Navigator, Screen} = createBottomTabNavigator();
const HomeIcon = props => <AntIcon name="home" color="#fff" size={25} />;
const NotifiIcon = props => (
  <IonIcon name="notifications-outline" color="#fff" size={25} />
);

const SettingIcon = props => <AntIcon name="setting" color="#fff" size={25} />;
const UsersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    indicatorStyle={{
      backgroundColor: '#EFEBEB',
      color: '#000',
      // elevation: 0,
    }}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title={evaprops => (
        <Text {...evaprops} style={{color: '#fff'}}>
          Home
        </Text>
      )}
      icon={HomeIcon}
      style={{backgroundColor: '#4792C6'}}
    />
    <BottomNavigationTab
      title={evaprops => (
        <Text {...evaprops} style={{color: '#fff'}}>
          Notification
        </Text>
      )}
      icon={NotifiIcon}
      style={{backgroundColor: '#4792C6'}}
    />
    <BottomNavigationTab
      title={evaprops => (
        <Text {...evaprops} style={{color: '#fff'}}>
          Settings
        </Text>
      )}
      icon={SettingIcon}
      style={{backgroundColor: '#4792C6'}}
    />
  </BottomNavigation>
);

const TabNavigation = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Notification" component={Notification} />
    <Screen name="Settings" component={Settings} />
  </Navigator>
);
export default TabNavigation;
