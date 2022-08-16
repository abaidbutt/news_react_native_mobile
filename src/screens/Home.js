import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Card,
  OverflowMenu,
  MenuItem,
  TopNavigation,
  TopNavigationAction,
  Avatar,
} from '@ui-kitten/components';
import NewsLists from '../components/NewsLists';
import {Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo';

const SearchIcon = props => <Icon {...props} name="search-outline" />;

const MenuIcon = props => <Icon {...props} name="menu-2-outline" />;
const RefreshIcon = props => <Icon {...props} name="refresh-outline" />;
const ListIcon = props => <Icon {...props} name="list-outline" />;
const NavigationIcon = props => <Icon {...props} name="navigation-outline" />;

const InfoIcon = props => <Icon {...props} name="info" />;

const LogoutIcon = props => <Icon {...props} name="log-out" />;
const data = [
  {name: 'Latest'},
  {name: 'Offers'},
  {name: 'Discount'},
  {name: 'Order Specific'},
  {name: 'Seasonal'},
  {name: 'Price Break'},
  {name: 'BOGO'},
];

const Home = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();
  // const MenuIcon = <Button accessoryLeft={MenuIcon} />;
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  // menu start
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
  // menu end
  // top navigation
  const renderOverflowMenuAction = () => (
    <View>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </View>
  );

  const renderTitle = props => (
    <View style={styles.titleContainer}>
      <Button size="tiny" appearance="ghost" onPress={()=>navigation.openDrawer()}>
        <Avatar style={styles.logo} source={require('../assets/logo.png')} />
      </Button>
      <Text {...props}>Planet news</Text>
    </View>
  );
  //end top navigation
  const onItemSelect = index => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
    <Button
      onPress={() => setVisible(true)}
      appearance="ghost"
      accessoryLeft={NavigationIcon}
      status="control"
      style={{color: '#fff', alignSelf: 'flex-start'}}>
      Select Location near
    </Button>
  );

  const getscrollposition = e => {
    if (e.nativeEvent.contentOffset.y > 1044) {
      console.log(e.nativeEvent.contentOffset.y, 'scroll on this');
    }
  };
  return (
    <Layout style={styles.container}>
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1, backgroundColor: 'transparent'}}
        stickyHeaderIndices={[0]}
        nestedScrollEnabled={true}
        onMomentumScrollEnd={event => getscrollposition(event)}
        scrollEventThrottle={16}>
        <Layout
          style={[
            styles.layout,
            {
              marginHorizontal: 0,
              marginTop: 0,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: 'blue',
            },
          ]}>
          <Card style={styles.card}>
            <Layout
              style={[
                styles.layout,
                {borderRadius: 30, borderColor: '#EFEBEB', borderWidth: 2},
              ]}>
              <Input
                placeholder="Search Latest News"
                value={values.email}
                style={styles.input}
                accessoryLeft={SearchIcon}
                onChangeText={nextValue =>
                  setValues({...values, email: nextValue})
                }
              />
            </Layout>
            <Layout
              style={[
                styles.layout,
                {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  backgroundColor: 'transparent',
                  justifyContent: 'flex-start',
                },
              ]}>
              {/* <Text> Location</Text> */}
              <OverflowMenu
                anchor={renderToggleButton}
                backdropStyle={styles.backdrop}
                visible={visible}
                selectedIndex={selectedIndex}
                onSelect={onItemSelect}
                onBackdropPress={() => setVisible(false)}>
                <MenuItem title="Lahore" />
                <MenuItem title="Faisalabad" />
                <MenuItem title="Islamabad" />
              </OverflowMenu>
            </Layout>
            <Layout
              style={[
                styles.layout,
                {
                  borderRadius: 30,
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                },
              ]}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {data.map(dt => (
                  <Button
                    appearance="outline"
                    key={dt.name}
                    style={{borderRadius: 30, marginHorizontal: 1}}
                    size="small"
                    status={'control'}>
                    {dt.name}
                  </Button>
                ))}
              </ScrollView>
            </Layout>
          </Card>
        </Layout>
        <Layout
          style={[
            styles.layout,
            {
              flexGrow: 1,
              backgroundColor: 'transparent',
              marginHorizontal: 0,
              marginVertical: 0,
              paddingHorizontal: 0,
              paddingVertical: 0,
            },
          ]}>
          <NewsLists />
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#EFEBEB',
  },
  layout: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 2,
  },
  card: {
    backgroundColor: '#4792C6',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    top: 0,
  },

  btn: {
    borderRadius: 30,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 30,
  },

  avatar: {
    alignSelf: 'center',
  },
  centerElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backdrop: {
    // color: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
