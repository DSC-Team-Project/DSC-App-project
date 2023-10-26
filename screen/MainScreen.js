import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SleepCapture from "./SleepCapture";
import Chart from "./ChartScreen";
import Configure from "./Setting";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Configure} />
      <Tab.Screen name="project" component={SleepCapture} />
      
      <Tab.Screen name="Chart" component={Chart} />

    </Tab.Navigator>
  );
}

export default BottomTab;