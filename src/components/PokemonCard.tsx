import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterface'
import { FadeInImage } from './FadeInImage'
import { styles } from '../theme/appTheme'
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);

    const navigation = useNavigation<any>();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: '#ddd' }).then(
            colors => {

                if (!isMounted.current) return;
                switch (colors.platform) {
                    case 'android':
                        setBgColor(colors.dominant || 'grey')
                        break;
                    case 'ios':
                        setBgColor(colors.background || 'grey')
                        break;
                    default:
                        setBgColor(colors.dominant || 'grey')
                        break;
                }

            }
        )

        return () => {
            isMounted.current = false;
        }
    }, []);




    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })}>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>
                <View>
                    <Text style={styles.cardName}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokeballContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeball}
                    />
                </View>


                <FadeInImage uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    )
}