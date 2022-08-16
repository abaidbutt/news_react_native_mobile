import React from 'react';
import {Icon, Layout, Menu, MenuItem, Toggle} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ThemeIcon = props => (
  <MaterialCommunityIcons name="theme-light-dark" size={30} color="#4792C6" />
);
const OtherIcon = props => (
  <MaterialIcons name="devices-other" size={30} color="#4792C6" />
);
const NotifiIcon = props => (
  <MaterialIcons name="circle-notifications" size={30} color="#4792C6" />
);
const HelpIcon = props => (
  <MaterialIcons name="live-help" size={30} color="#4792C6" />
);
const LangIcon = props => (
  <FontAwesome name="language" size={30} color="#4792C6" />
);

const ForwardIcon = props => (
  <Entypo name="forward" size={30} color="#4792C6" />
);

const Settings = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };
  return (
    <Layout level="1">
      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <MenuItem
          title="Appearnce"
          accessoryLeft={ThemeIcon}
          accessoryRight={() => (
            <Toggle
              checked={checked}
              onChange={onCheckedChange}
              status="control"
              style={{borderColor: '#4792C6', borderRadius: 30, borderWidth: 2}}
            />
          )}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            marginVertical: 1,
            marginHorizontal: 8,
          }}
        />
        <MenuItem
          title="Language"
          accessoryLeft={LangIcon}
          accessoryRight={() => (
            <Toggle
              checked={checked}
              onChange={onCheckedChange}
              status="control"
              style={{borderColor: '#4792C6', borderRadius: 30, borderWidth: 2}}
            />
          )}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            marginVertical: 1,
            marginHorizontal: 8,
          }}
        />
        <MenuItem
          title="Notifications"
          accessoryLeft={NotifiIcon}
          accessoryRight={() => (
            <Toggle
              checked={checked}
              onChange={onCheckedChange}
              status="control"
              style={{borderColor: '#4792C6', borderRadius: 30, borderWidth: 2}}
            />
          )}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            marginVertical: 1,
            marginHorizontal: 8,
          }}
        />
        <MenuItem
          title="Help &amp; Support"
          accessoryLeft={HelpIcon}
          accessoryRight={() => (
            <Toggle
              checked={checked}
              onChange={onCheckedChange}
              status="control"
              style={{borderColor: '#4792C6', borderRadius: 30, borderWidth: 2}}
            />
          )}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            marginVertical: 1,
            marginHorizontal: 8,
          }}
        />
        <MenuItem
          title="Checkout Our Other Apps!"
          accessoryLeft={OtherIcon}
          accessoryRight={() => (
            <Toggle
              checked={checked}
              onChange={onCheckedChange}
              status="control"
              style={{borderColor: '#4792C6', borderRadius: 30, borderWidth: 2}}
            />
          )}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            marginVertical: 1,
            marginHorizontal: 8,
          }}
        />
      </Menu>
    </Layout>
  );
};

export default Settings;
