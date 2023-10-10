import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    pokebolaBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2,

    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#444'
    },

    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    cardName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        textTransform: 'capitalize'

    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
    },
    pokemonImage: {
        position: 'absolute',
        right: -8,
        bottom: -8,
        width: 120,
        height: 120,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});