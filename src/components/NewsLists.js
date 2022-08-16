// import React from 'react';
// import {Avatar, Button, ListItem} from '@ui-kitten/components';
// import {StyleSheet, View, Image} from 'react-native';

// const InstallButton = props => <Button size="tiny">INSTALL</Button>;

// const ItemImage = props => (
//   <Image
//     {...props}
//     style={[props.style, {tintColor: null}]}
//     source={{uri: 'https://source.unsplash.com/random'}}
//     // source={require('../assets/logo.png')}
//   />
// );

// const NewsLists = () => (
//   <ListItem
//     title="UI Kitten"
//     description="A set of React Native components"
//     accessoryLeft={ItemImage}
//     accessoryRight={InstallButton}
//   />
// );
// export default NewsLists;
import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {
  Card,
  List,
  Text,
  Avatar,
  Divider,
  Button,
  Icon,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
const MessageIcon = props => <Icon {...props} name="message-square-outline" />;

const data = new Array(8).fill({
  title: 'Item',
  description:
    "Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged.",
  img: 'https://source.unsplash.com/random',
});

const NewsLists = () => {
  const navigation = useNavigation();
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = footerProps => (
    <View style={styles.footer}>
      <Button
        appearance="ghost"
        accessoryLeft={MessageIcon}
        onPress={() => navigation.navigate('Contact')}>
        Comment
      </Button>

      <Text {...footerProps}>{new Date().toDateString()}</Text>
    </View>
  );

  const renderItem = info => (
    <Card
      style={styles.item}
      // status="basic"
      ItemSeparatorComponent={Divider}
      // header={headerProps => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
        <View style={{flexGrow: 2, flexShrink: 0, flexBasis: 100}}>
          <Text style={{textAlign: 'justify', marginRight: 5}} status="primary">
            {info.item.description && info.item.description?.slice(0, 100)}
          </Text>

          <Text>By Wikipedia</Text>
        </View>
        <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 50}}>
          <Image
            style={styles.itemImage}
            source={{
              uri: info.item.img,
            }}
          />
        </View>
      </View>
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  contentContainer: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 1,
    borderRadius: 30,
  },
  itemImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default NewsLists;
