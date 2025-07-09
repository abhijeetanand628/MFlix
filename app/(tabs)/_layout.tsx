import {Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, icon, title}: any) => {
    if(focused) {
    return (
        <ImageBackground 
            source={images.highlight}
            style={{flex:1, flexDirection: 'row', width: '100%', minWidth: 100, minHeight: 52, 
            marginTop: 14, justifyContent: 'center', alignItems: 'center', 
            borderRadius: 100, overflow: 'hidden'}}
            >
            <Image source={icon} 
            tintColor='#151312' 
            style={{width: 20, height: 20}}
            /> 
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500', marginLeft: 6}}>{title}</Text>
        </ImageBackground>
        )
    }
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 14, borderRadius: 9999}}>
            <Image source={icon}
            tintColor="#A8B5DB"
            style={{width: 20, height: 20}}
            />
        </View>
    )
}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignContent: 'center'
            },
            tabBarStyle :{
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 15,
                marginBottom: 22,
                height: 50,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0d23'
                 
            }
        }}
    
    >
        <Tabs.Screen 
        name="index"
        options = {{title: 'Home',
             headerShown: false,
             tabBarIcon: ({ focused }) => (
                <TabIcon 
                focused={focused} 
                icon={icons.home} title="Home"
                />
             )
            }}
        />
        <Tabs.Screen 
        name="search"
        options = {{title: 'Search',
             headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon 
                focused={focused} 
                icon={icons.search} title="Search"
                />
             ) 
            }}
        />
        <Tabs.Screen 
        name="saved"
        options = {{title: 'Saved',
             headerShown: false,
             tabBarIcon: ({ focused }) => (
                <TabIcon 
                focused={focused} 
                icon={icons.save} title="Saved"
                />
             ) 
            }}
        />
        <Tabs.Screen 
        name="profile"
        options = {{title: 'Profile',
             headerShown: false,
             tabBarIcon: ({ focused }) => (
                <TabIcon 
                focused={focused} 
                icon={icons.person} title="Profile"
                />
             ) 
            }}
        />
    </Tabs>
  )
}

export default _Layout