import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Users /> : <Setting />}
      <View style={styles.bottomTab}>
        <Pressable
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/users.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'white' : '#A09F9F'},
            ]}
          />
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/setting.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'white' : '#A09F9F'},
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#2f967b',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
