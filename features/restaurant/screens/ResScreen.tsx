import { Text, StyleSheet, View } from 'react-native'
import React, { Component, SetStateAction } from 'react'
import { ActivityIndicator, Searchbar } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResInfor from '../components/ResInfor';
import { FlatList } from 'react-native-gesture-handler';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import Colors from '../../../constants/Colors';

type RestaurantType = {
    // Define the properties of your restaurant object here
    // For example: id: number, name: string, etc.
};

type ErrorType = {
    // Define the properties of your error object here
    // For example: message: string, code: number, etc.
};

// Define the type for RestaurantsContext (modify it if needed)
type RestaurantsContextType = {
    isLoading: boolean;
    restaurants: RestaurantType[];
    error: ErrorType | null;
};

const ResScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);

    const { isLoading, restaurants, error } = useContext<RestaurantsContextType>(RestaurantsContext);



    return (
        <SafeAreaView style={styles.container}>

            {isLoading && (
                <View style={styles.Loading}>
                    <ActivityIndicator style={{ marginLeft: -25 }} size={50} animating={true} color={Colors.light.text} />
                </View>
            )}

            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />

            </View>
            <View style={styles.list}>
                <FlatList
                    data={restaurants}
                    renderItem={() => <ResInfor />}
                    keyExtractor={(item) => item.name}
                //contentContainerStyle={{ paddingVertical: 13 }}

                />

            </View>
        </SafeAreaView>
    )

}

export default ResScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //marginTop: StatusBar.length

    },
    searchBar: {
        padding: 20
    },
    list: {
        flex: 1,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    Loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },

})

function useContext<T>(RestaurantsContext: React.Context<any>): { isLoading: any; restaurants: any; error: any; } {
    throw new Error('Function not implemented.');
}
