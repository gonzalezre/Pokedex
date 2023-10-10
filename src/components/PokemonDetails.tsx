import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { FullPokemon } from '../interfaces/pokemonInterface'
import { FadeInImage } from './FadeInImage'

interface Props {
    pokemon: FullPokemon
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >

            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                {/* Types and weight */}
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>
                        {
                            pokemon.types.map(({ type }) => (
                                <Text
                                    key={type.name}
                                    style={{ ...styles.regularText, marginRight: 10 }}
                                >{type.name}</Text>
                            ))
                        }
                    </Text>
                </View>

                {/* Types and weight */}
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>

            <View style={{ ...styles.container }}>
                {/* Sprites */}
                <Text style={styles.title}>Sprites</Text>
                <ScrollView
                    style={{}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>
            </View>

            <View style={{ ...styles.container }}>
                {/* Skills */}
                <Text style={styles.title}>Base skills</Text>
                <View>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{ ...styles.regularText, marginRight: 10 }}
                            >{ability.name}</Text>
                        ))
                    }
                </View>
            </View>

            <View style={{ ...styles.container }}>
                {/* Moves */}
                <Text style={styles.title}>Base moves</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{ ...styles.regularText, marginRight: 10 }}
                            >{move.name}</Text>
                        ))
                    }
                </View>
            </View>

            <View style={{ ...styles.container }}>
                {/* Stats */}
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{ ...styles.regularText, marginRight: 10, width: 150 }}
                                >{stat.stat.name}</Text>
                                <Text
                                    style={{ ...styles.regularText, fontWeight: 'bold' }}
                                >{stat.base_stat}</Text>
                            </View>
                        ))
                    }
                </View>


                {/* sprite final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default!}
                        style={styles.basicSprite}
                    />
                </View>

            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 20
    },
    basicSprite: {
        height: 100,
        width: 100,
    }
});
