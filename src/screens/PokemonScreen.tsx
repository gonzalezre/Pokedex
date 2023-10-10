import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { usePokemon } from '../hooks/usePokemon'
import { PokemonDetails } from '../components/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ route, navigation }: Props) => {

    const { top } = useSafeAreaInsets();

    const { simplePokemon, color } = route.params;

    const { isLoading, pokemon } = usePokemon(simplePokemon.id);

    return (
        <View style={{ flex: 1 }}>
            {/* headerContainer */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.backButton, top: top + 10 }}
                    onPress={() => { navigation.pop() }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={30}
                    />
                </TouchableOpacity>

                {/* pokemon's name */}
                <Text style={{ ...styles.pokemonName, top: top + 10 }}>{simplePokemon.name + '\n'} # {simplePokemon.id}</Text>

                {/* pokeball */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={simplePokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>

            {/* details and loading */}
            {
                isLoading ?
                    (
                        <View style={styles.activityIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
                            />
                        </View>
                    )
                    :
                    <PokemonDetails pokemon={pokemon} />
            }


        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200
    },
    backButton: {
        alignSelf: 'flex-start',
        left: 20
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        textTransform: 'capitalize'
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -10,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});