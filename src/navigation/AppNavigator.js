import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Signup from "../screens/Signup";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Splash'}       component={Splash} options={{headerShown:false}}/>

                <Stack.Screen name={'Signup'}       component={Signup} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;