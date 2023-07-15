import { Text, StyleSheet, View } from 'react-native'
import React, { Component, SetStateAction } from 'react'
import { Searchbar } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResInfor from '../components/ResInfor';
import { FlatList } from 'react-native-gesture-handler';

const ResScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />

            </View>
            <View style={styles.list}>
                <FlatList
                    data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
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
})