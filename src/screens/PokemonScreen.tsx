import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ route, navigation }: Props) => {
    const { simplePokemon, color } = route.params;
    console.log(navigation);
    return (
        <View style={{ backgroundColor: color }}>
            <Text>{simplePokemon.name}</Text>
        </View>
    )
}