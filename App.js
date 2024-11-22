import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import screens
import HomeScreen from "./pages/HomeScreen";
import ExploreScreen from "./pages/ExploreScreen";
import DetailScreen from "./pages/DetailScreen";
import TipsScreen from "./pages/TipsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import MoreScreen from "./pages/MoreScreen";

const Tab = createBottomTabNavigator();
const TipsStack = createStackNavigator(); // Stack untuk Tips dan About

// Tips Stack Navigator
function TipsStackNavigator() {
  return (
    <TipsStack.Navigator>
      <TipsStack.Screen 
        name="Helpful Tips" 
        component={TipsScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#FF6F61', // Rich Coral background for header
          },
          headerTitleStyle: {
            fontSize: 30, // Larger font size
            fontWeight: 'bold', // Bold text
            color: '#FFFFFF', // White text color
            textTransform: 'uppercase', // Make title uppercase
          },
          headerTintColor: '#FFFFFF', // White text color for header items (like back button)
          headerTitleAlign: 'center', // Center the title
        }}
      />
      <TipsStack.Screen 
        name="More" 
        component={MoreScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#FF6F61',
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </TipsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 6,
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            borderRadius: 10,
            height: 64,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            marginBottom: 16,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "compass" : "compass-outline";
            } else if (route.name === "Detail") {
              iconName = "file-document";
            } else if (route.name === "Tips") {
              iconName = focused ? "lightbulb-on" : "lightbulb-on-outline";
            }
            return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Tips" component={TipsStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
