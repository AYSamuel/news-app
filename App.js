import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './screens/All';
import Business from './screens/Business';
import Sports from './screens/Sports';
import Health from './screens/Health';
import Tech from './screens/Tech';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0c8079',
        }}>
        <Tab.Screen
          name='All'
          component={All}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                name='home'
                type='feather'
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Business'
          component={Business}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                name='pie-chart'
                type='feather'
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Sports'
          component={Sports}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                name='tennisball-outline'
                type='ionicon'
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Health'
          component={Health}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                name='activity'
                type='feather'
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Tech'
          component={Tech}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                name='hardware-chip-outline'
                type='ionicon'
                color={props.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style='default' />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
