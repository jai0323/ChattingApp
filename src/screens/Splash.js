import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native"

const Splash = () => {

    const navigation = useNavigation();
    useEffect(()=>{
       setTimeout(()=>{
        navigation.navigate('Signup');
       },2000)
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>{'Firebase\nChat App'}</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
      },
})