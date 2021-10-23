import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home";
import Profile from "././src/pages/Profile";
// import { Ionicons } from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveTintColor: "#ff8e40",
            tabBarIcon: ({ size }) => (
              <AntDesign name="home" color="#ff8e40" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarActiveTintColor: "#ff8e40",
            tabBarIcon: ({ size }) => (
              <AntDesign name="user" color="#ff8e40" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
