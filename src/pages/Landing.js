import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";

const AuthStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen
      name="Home"
      component={Home}
      options={{ title: "Kripto Paralar" }}
    />
    <DrawerStack.Screen
      name="Profile"
      component={Profile}
      options={{ title: "Profil" }}
    />
  </DrawerStack.Navigator>
);
function Landing() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName={Login}
        screenOptions={{
          header: () => null,
        }}
      >
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ title: "Kayıt Ol veya Giriş Yap" }}
        />
        <AuthStack.Screen
          name="Home"
          component={DrawerStackScreen}
          options={{ title: "Anasayfa" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Landing;