import React from "react";
import {createStackNavigator} from "@reactnavigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown:false}}>
        <Stack.Screen name = "Home" component={TabNavigator}/>
        <Stack.Screen name = "StoryScreen" component ={StoryScreen}/>
        </Stack.Navigator></Stack.Navigator>
    )
}

export default StackNavigator