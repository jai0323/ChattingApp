import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Alert,
  } from 'react-native';

  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import firestore from '@react-native-firebase/firestore';

  import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';


  const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();
  
    const loginUser = () => {
      setVisible(true);
      firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then(res => {
          setVisible(false);
          if (res.docs.length) {
            console.log(JSON.stringify(res.docs[0].data()));
            goToNext(
              res.docs[0].data().name,
              res.docs[0].data().email,
              res.docs[0].data().userId,
            );
          } else {
            Alert.alert('User not found');
          }
        })
        .catch(error => {
          setVisible(false);
          console.log(error);
          Alert.alert('User not found');
        });
    };
    const goToNext = async (name, email, userId) => {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('USERID', userId);
      navigation.navigate('Main');
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
  
        <TextInput
          placeholder="Enter Email"
          style={[styles.input, {marginTop: 100}]}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
  
        <TextInput
          placeholder="Enter Password"
          style={[styles.input, {marginTop: 20}]}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />
  
        <Pressable
          style={styles.btn}
          onPress={() => {
            loginUser();
          }}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        <Text
          style={styles.orLogin}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Or Sign Up
        </Text>
        <Loader visible={visible} />
      </View>
    );
  };
  
  export default Login;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 30,
      color: 'black',
      alignSelf: 'center',
      marginTop: 100,
      fontWeight: '600',
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
  
      alignSelf: 'center',
      paddingLeft: 20,
    },
    btn: {
      width: '90%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: '#2f967b',
    },
    btnText: {
      color: 'white',
      fontSize: 20,
    },
    orLogin: {
      alignSelf: 'center',
      marginTop: 50,
      fontSize: 20,
      textDecorationLine: 'underline',
      fontWeight: '600',
      color: 'black',
    },
  });
  