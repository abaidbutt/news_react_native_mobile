import React from 'react';
import {Button, Icon, List, ListItem, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import MatIcon from 'react-native-vector-icons/Ionicons';
const data = new Array(18).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const Notification = () => {
  const renderItemAccessory = props => (
    <Button size="tiny" style={{backgroundColor: '#4792C6'}}>
      Go To
    </Button>
  );

  const renderItemIcon = props => (
    <MatIcon name="notifications-outline" color="#4792C6" size={25} />
  );

  const renderItem = ({item, index}) => (
    <ListItem
      title={evaProps => (
        <Text {...evaProps}>{`${item.title} ${index + 1}`}</Text>
      )}
      description={evaProps => (
        <Text {...evaProps}>{`${item.description} ${index + 1}`}</Text>
      )}
      style={{
        
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 1,
        marginHorizontal: 8,
      }}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return <List style={styles.container} data={data} renderItem={renderItem} />;
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
  },
});
