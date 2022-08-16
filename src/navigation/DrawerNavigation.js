import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Layout,
  Text,
  IndexPath,
  Icon,
  Divider,
} from '@ui-kitten/components';
import Contact from '../screens/Contact';

import TabNavigation from './TabNavigation';
const {Navigator, Screen} = createDrawerNavigator();
const PersonIcon = props => <Icon {...props} name="person-outline" />;

const BellIcon = props => <Icon {...props} name="bell-outline" />;

const ForwardIcon = props => <Icon {...props} name="arrow-ios-forward" />;
const Header = props => (
  <>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/planetlogo.png')}
    />
    <Divider />
  </>
);

const DrawerNavigation = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const DrawerContent = ({navigation, state}) => (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem
        title="Home"
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Contact"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Science"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Sports"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Entertainment"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Rate Us"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Contact Us"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Settings"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Privacy Policy"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );

  return (
    <Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Screen name="Home" component={TabNavigation} />
      <Screen name="Contact" component={Contact} />
    </Navigator>
  );
};

export default DrawerNavigation;
const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
