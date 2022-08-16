import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Button, Layout, Text, Input, Icon, Card} from '@ui-kitten/components';
import {Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const FaceIcon = props => <Icon {...props} name="facebook-outline" />;
const GoogleIcon = props => <Icon {...props} name="google-outline" />;

const Contact = () => {
  const [values, setValues] = useState({
    email: '',
    mobile_number: '',
    web_url: '',
    msg: '',
  });

  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <Layout style={[styles.layout, {flexGrow: 1}]}>
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
          <View style={styles.centerElement}>
            <Text category="h3">Planet </Text>
            <Text category="h3" status="info">
              News
            </Text>
          </View>
        </Layout>
        <Card style={styles.card} status="basic">
          <Layout style={styles.layout}>
            <Input
              placeholder="Enter Your Email"
              value={values.email}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, email: nextValue})
              }
            />
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Mobile Number"
              value={values.mobile_number}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, mobile_number: nextValue})
              }
            />
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Website Url"
              value={values.web_url}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, web_url: nextValue})
              }
            />
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Message"
              value={values.message}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, message: nextValue})
              }
            />
          </Layout>

          <Layout
            style={[
              styles.layout,
              {
                width: '50%',
                alignSelf: 'center',
              },
            ]}>
            <Button style={styles.btn}>Send</Button>
          </Layout>
        </Card>

        <Layout style={[styles.layout, {flexGrow: 1}]}></Layout>
      </ScrollView>
    </Layout>
  );
};

export default Contact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
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
});
