import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CreateScreen from "../CreateScreen/CreateScreen";
import PostScreen from "../PostsScreen/PostScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { View, TouchableOpacity } from "react-native";

const MainTab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        tabBarActiveBackgroundColor: "white",
        tabBarStyle: { height: 83 },
      }}
      initialRouteName="Posts"
    >
      <MainTab.Screen
        name="Posts"
        options={{
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate("Login")}
            >
              <MaterialIcons name="logout" size={24} color="black" style={{marginRight:20}} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={25}
              color={focused ? "#FF6C00" : "black"}
              style={{ marginLeft: 80, textAlign: "right" }}
            />
          ),
        }}
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: "#FF6C00",
                width: 70,
                height: 40,
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="plus"
                size={24}
                color={focused ? "black" : "white"}
              />
            </View>
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={35}
              color={focused ? "#FF6C00" : "black"}
              style={{ marginRight: 80 }}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
