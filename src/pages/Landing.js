import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./Login";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Profile from "./Profile";

const AuthStack = createStackNavigator();
const BottomTabStack = createBottomTabNavigator();
const BottomTabStackScreen = () => (
  <BottomTabStack.Navigator>
    <BottomTabStack.Screen
      name="Home"
      component={Home}
      options={{ title: "Kripto Paralar" }}
    />
    <BottomTabStack.Screen
      name="Portfolio"
      component={Portfolio}
      options={{ title: "Portföy" }}
    />
    <BottomTabStack.Screen
      name="Profile"
      component={Profile}
      options={{ title: "Profil" }}
    />
  </BottomTabStack.Navigator>
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
          component={BottomTabStackScreen}
          options={{ title: "Anasayfa" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Landing;
