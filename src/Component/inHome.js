import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native"



class Search extends React.Component {
    render() {
        return (
            <View >
                <ScrollView>
                    <View style={styles.contantainer}>
                        <Text style={styles.titleArtikel} > {this.props.navigation.state.params.detil[0]}</Text>
                        <Text style={styles.lokasiPenulis} > {this.props.navigation.state.params.detil[1]}</Text>
                        <View style={styles.viewImages}>
                            <Image source={{ uri: this.props.navigation.state.params.detil[2] }} style={styles.ukuranGambar} />
                        </View>
                        <Text style={styles.tampilanArtikel} > {this.props.navigation.state.params.detil[4]}</Text>
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    contantainer: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    titleArtikel: {
        fontSize: 22,
        color: '#000000',
        paddingLeft:15
    },
    lokasiPenulis: {
        fontSize: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    ukuranGambar: {
        height: 200,
        width: '80%',
        marginBottom: 4
    },
    viewImages: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tampilanArtikel: {
        fontSize: 15,
        textAlign: 'auto',
        paddingLeft:15
    }

})

export default Search