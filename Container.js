import * as React from "react";
import { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Landingpages from "./src/screens/Landingpages";
import AddList from "./src/screens/AddList";
import AddCategory from "./src/screens/AddCategory";
import Index from "./src/screens/Index";
import Register from "./src/screens/register";
import Login from "./src/screens/Login";
import DetailList from "./src/screens/Detail-List";
import { Usercontext } from "./src/context/userContext";
import { API, setAuthToken } from "./src/config/api";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTab() {

  return (
    <Tab.Navigator
      initialRouteName="Index"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "LandingPages") {
            iconName = focused ? "ios-apps" : "ios-apps-outline";
          } else if (route.name === "AddList") {
            iconName = focused
              ? "ios-copy"
              : "ios-copy-outline";
          } else if (route.name === "AddCategory") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Products" component={Landingpages} />
      <Tab.Screen name="AddList" component={AddList} />
      <Tab.Screen name="AddCategory" component={AddCategory} />
    </Tab.Navigator>
  );
}

export default function Container({navigation}) {

   const [state, dispatch] = useContext(Usercontext);

   const getData = async() => {
    try {
      const token = await AsyncStorage.getItem('token')
      if (token === null) {
        navigation.navigate("DetailList")
      }

    } catch (error) {
      console.log(error)
    }
   }

   useEffect(() => {
    getData()
   }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Landingpages" component={Landingpages} options={{headerShown: false}}/>
      <Stack.Screen name="Index" component={Index} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="DetailList" component={DetailList} options={{headerShown: false}}/>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
