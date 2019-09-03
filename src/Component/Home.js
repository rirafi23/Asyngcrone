import React from 'react';
import {
    View, 
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native"
 
import Data from '../DataBase/Data.json' 


class Home extends React.Component {
    state = {
        Data
    }

    onButtomDetail=(dataItem) => {
        this.props.navigation.navigate('Search', {detil: dataItem })
    }
    render() {
        return(
           
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.Data}
                    keyExtractor={(index, item) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            
                            <View>
                                <TouchableOpacity onPress={() => this.onButtomDetail([`${item.username}`, `${item.location}`, `${item.image}`,`${item.viewers}`, `${item.diskripsi}`, `${item.artikel}`])}>
                                <View style={styles.ViewOne}>
                                    <Image source={{ uri: item.image}}  style={styles.ImgProfile} />
                                    <View style={styles.viewJudul}>
                                        <Text style={styles.judul}>{item.username}</Text>
                                        <Text style={styles.location}>{item.location}</Text>
                                    </View>
                                </View>
                                    <View style={styles.viewImages}>
                                        <Image source={{ uri: item.image}}  style={styles.styleImage} />
                                    </View>
                                    <View style={styles.diskripsi}>
                                        <Text>{item.viewers}</Text>
                                        <Text>{item.diskripsi}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

        )
    }
}

export default Home

const styles = StyleSheet.create ({
    ViewOne:{
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:10
    },
    judul:{
        fontSize:18,
        color:'#000000',
        paddingLeft:10
    },
    viewImages:{
        justifyContent:'center',
        alignItems:'center',
    },
    styleImage:{
        height:250,
        width:'100%',
        marginBottom:5
    },
    location:{
        fontSize:11,
        marginBottom:20,
        paddingLeft:10

    },
    diskripsi:{
        borderBottomWidth:1,
        borderBottomColor:'green',
        paddingBottom:10,
        paddingLeft:10

    },
    ImgProfile:{
        width:40,
        height:40,
        borderRadius:50
    }
})