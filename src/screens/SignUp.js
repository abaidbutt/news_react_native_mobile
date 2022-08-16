import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Card,
  IndexPath,
  Select,
  SelectItem,
  Radio,
  RadioGroup,
} from '@ui-kitten/components';
import {Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const FaceIcon = props => <Icon {...props} name="facebook-outline" />;
const GoogleIcon = props => <Icon {...props} name="google-outline" />;

const data = ['Faislabad', 'Lahore', 'Islamabad'];
const SignIn = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectGender, setSelectGender] = React.useState(0);

  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const displayValue = data[selectedIndex.row];
  const renderOption = title => (
    <SelectItem title={title} key={title} style={styles.input} />
  );

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
              placeholder="First Name"
              value={values.firstName}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, firstName: nextValue})
              }
            />
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Last Name"
              value={values.lastName}
              style={styles.input}
              onChangeText={nextValue =>
                setValues({...values, lastName: nextValue})
              }
            />
          </Layout>
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
            <Select
              placeholder="City"
              value={displayValue}
              selectedIndex={selectedIndex}
              style={styles.input}
              onSelect={index => setSelectedIndex(index)}>
              {data.map(renderOption)}
            </Select>
          </Layout>
          <Layout style={styles.layout}>
            <RadioGroup
              selectedIndex={selectGender}
              onChange={index => setSelectGender(index)}
              style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <Radio>Male</Radio>
              <Radio>Female</Radio>
              <Radio>No Preference</Radio>
            </RadioGroup>
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Password"
              value={values.password}
              style={styles.input}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue =>
                setValues({...values, password: nextValue})
              }
            />
          </Layout>
          <Layout style={styles.layout}>
            <Input
              placeholder="Confirm Password"
              value={values.confirm_password}
              style={styles.input}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue =>
                setValues({...values, confirm_password: nextValue})
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
            <Button style={styles.btn}>Sign Up</Button>
          </Layout>
          <Layout style={[styles.layout, {alignSelf: 'center'}]}>
            <Text>With Social Login</Text>
            <View style={styles.centerElement}>
              <Button accessoryLeft={FaceIcon} appearance="ghost"></Button>
              <Button accessoryLeft={GoogleIcon} appearance="ghost"></Button>
            </View>
          </Layout>
        </Card>
        <Layout
          style={[
            styles.layout,
            {
              width: '50%',
              alignSelf: 'center',
            },
          ]}>
          <Text style={{textAlign: 'center', marginVertical: 2}}>
            Already have account
          </Text>

          <Button style={styles.btn}>Sign In</Button>
        </Layout>
        <Layout style={[styles.layout, {flexGrow: 1}]}></Layout>
      </ScrollView>
    </Layout>
  );
};

export default SignIn;
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
    marginVertical: 4,
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
