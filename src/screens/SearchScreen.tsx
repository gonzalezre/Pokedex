import { View, Text, Platform, ActivityIndicator, FlatList, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/appTheme'
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterface';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();


    const [term, setTerm] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (term.length === 0) {
            return setFilteredPokemons([]);
        }

        if(isNaN(Number(term))){
        setFilteredPokemons(
            simplePokemonList.filter(
                (pokemon) => pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
        );
        }
        else{
            const pokemonById = simplePokemonList.find(poke => poke.id === term);
            setFilteredPokemons(
                (pokemonById) ? [pokemonById] : []
            );
        }
    }, [term])


    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            //marginTop: (Platform.OS == 'ios' ? top : top + 5),
            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 30
                }}
            />

            <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item: pokemon, index }) => (
                    <PokemonCard pokemon={pokemon} />
                )}
                numColumns={2}

                //header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        paddingBottom: 10,
                        marginTop: (Platform.OS === 'ios' ? top + 55 : top + 75)
                    }}>{term}</Text>
                )}
            />
        </View>
    )
}