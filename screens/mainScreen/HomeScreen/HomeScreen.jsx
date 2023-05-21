import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import CreateScreen from "../CreateScreen/CreateScreen";
import PostScreen from "../PostsScreen/PostScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const MainTab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <MainTab.Navigator initialRouteName="Posts">
      <MainTab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "orange",
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen name="Posts" component={PostScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
