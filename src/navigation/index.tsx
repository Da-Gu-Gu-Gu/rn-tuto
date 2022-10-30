import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Login from '../screens/Login'
import Home from '../screens/Home'
import Customer from '../screens/Customer'
import CreateOrder from '../screens/CreateOrder'
import OrderList from '../screens/OrderList'
import SaleList from '../screens/SaleList'

const Stack=createNativeStackNavigator()
const Drawer=createDrawerNavigator()

export const AuthStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    )
}

const ScreensStack=()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown:true
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="customer" component={Customer} />
            <Stack.Screen name="createOrder" component={CreateOrder} />
            <Stack.Screen name="orderList" component={OrderList} />
            <Stack.Screen name="saleList" component={SaleList} />
        </Stack.Navigator>
    )
}


const Navigation=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown:false
            }} initialRouteName="main" drawerContent={(props)=><CustomDrawer {...props} />}>
                <Drawer.Screen name="main" component={ScreensStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation