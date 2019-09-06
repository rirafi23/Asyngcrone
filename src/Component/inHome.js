import React from 'react'
import {View, Text, Button, AsyncStorage, StyleSheet, TextInput, Dimensions, ImageBackground} from 'react-native'

const {width:WIDTH} = Dimensions
.get('window')

class inHome extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            hobby:'',
            textName:'',
            textHobby:''
        };


  AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    name: resultParsed.name,
                    hobby: resultParsed.hobby
                });
            }
        });
    }

    saveData() {
  let name = this.state.textName;
  let hobby = this.state.textHobby;
  let data = {
      name: name,
      hobby: hobby
  }

  AsyncStorage.setItem('user', JSON.stringify(data));

  this.setState({
      name: name,
      hobby: hobby
  });

  alert('Data tersimpan');
}

    render(){
            return(
                <ImageBackground style={Style.BgImg} source={require('../image/images.jpeg')}>
                <View style={Styles.ViewOne}>
                    <Text style={Styles.title}>
                        Biodata Santri Pondok Programmer.
                    </Text>
                    
                    <View style={{marginBottom:5}}>
                        <Text style={Styles.Nama}>
                            Nama :{'\n'}
                            <Text style={Styles.isiNama}>{this.state.name}</Text>
                        </Text>
                    </View>
                    
                    <Text style={Styles.Nama}>
                        Hobi : {'\n'}
                        <Text style={Styles.isiNama}>{this.state.hobby}</Text>
                    </Text>
                    
                    <View style={Styles.ViewTuo}>
                        <View style={Styles.ViewTextInput}>
                            <TextInput style={Styles.TextInput}
                                onChangeText={(textName) => this.setState({textName})}
                                placeholder='Nama Santri'
                                backgroundColor="white"
                            />
                            <TextInput style={Styles.TextInput}
                                onChangeText={(textHobby) => this.setState({textHobby})}
                                placeholder='Hobi Santri'
                                backgroundColor="white"
                            />
                        </View>
                        
                        <Button
                            title='Simpan'
                            onPress={this.saveData.bind(this)}
                        />
                    
                    </View>
                </View>
                <Text style={Style.textBawah}}>@rizqan_23</Text>
                </ImageBackground>
        );
    }
}
export default inHome;

const Styles = StyleSheet.create({
    BgImg:{
        width:"100%", 
        height:"100%"
    },
    ViewOne:{
        flex:1, 
        paddingLeft:10, 
        paddingRight:10, 
        justifyContent:'center'
    },
    ViewTuo:{
        flex:2, 
        justifyContent:'flex-end', 
        marginBottom:20
    },
    title:{
        fontSize:20,
        paddingTop:40,
        marginBottom:50,
        color:'white'
        
    },
    Nama:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:'white',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        color:'white'
    },
    isiNama:{
        fontSize:15,
        paddingTop:10,
        color:'white'
    },
    TextInput:{
        borderBottomWidth:1,
        marginBottom:5,
        height:45

    },
    ViewTextInput:{
        marginBottom:15
    },
    textBawah:{
        fontSize:12, 
        color:"white", 
        marginBottom:5, 
        paddingLeft:5, 
        fontStyle:'italic'

})
