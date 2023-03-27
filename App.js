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
          tabBarActiveTintColor: 'red',
        }}>
        <Tab.Screen
          name='All'
          component={All}
          options={{
            headerShown: false,

            tabBarIcon: () => (
              <Icon
                name='home'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Business'
          component={Business}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='pie-chart'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Sports'
          component={Sports}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='tennisball-outline'
                type='ionicon'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Health'
          component={Health}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='activity'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Tech'
          component={Tech}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='hardware-chip-outline'
                type='ionicon'
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style='auto' />
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
