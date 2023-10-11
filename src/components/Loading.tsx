import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export const Loading = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator
                size={50}
                color="grey"
            />
            <Text>Loading...</Text>
        </View>
    )
}