import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AllCollectionsScreen from '../screens/AllCollectionsScreen';
import SnackSpecificScreen from '../screens/SnackSpecificScreen';
import { colors, isAndroid } from '../utils/Theme';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const MainAppNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                ...(isAndroid && { ...TransitionPresets.SlideFromRightIOS }),
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AllCollectionsScreen" component={AllCollectionsScreen} />
            <Stack.Screen name="SnackSpecificScreen" component={SnackSpecificScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        </Stack.Navigator>
    )
}

export default MainAppNavigation