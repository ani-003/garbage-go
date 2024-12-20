import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';


const TabsLayout = () => {
  return (
<Tabs
        tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="home"
                options={{
                    title: 'Home',
                    // tabBarShowLabel: false,
                }
                }
            />
        
            <Tabs.Screen name="camera"
                options={{
                    title: 'Camera',
                }
                }
            />
            <Tabs.Screen name="profile"
                options={{
                    title: 'Profile',
                }
                }
            />
        </Tabs>
  )
}

export default TabsLayout