import React from 'react'
import {View, Text, Button, AsyncStorage, StyleSheet, TextInput, Dimensions} from 'react-native'

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
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                <Text style={Styles.title}>
                    Biodata Santri Pondok Programmer
                </Text>
                <Text style={Styles.Nama}>
                    Nama :{'\n'}
                    <Text style={Styles.isiNama}>{this.state.name}</Text>
                </Text>
                <Text style={Styles.Nama}>
                    Hobi : {this.state.hobby}
                </Text>
                <View style={{flex:2, justifyContent:'flex-end', marginBottom:20}}>
                <View style={Styles.ViewTextInput}>
                <TextInput style={Styles.TextInput}
                    onChangeText={(textName) => this.setState({textName})}
                    placeholder='Nama Santri'
                />
                <TextInput style={Styles.TextInput}
                    onChangeText={(textHobby) => this.setState({textHobby})}
                    placeholder='Hobi Santri'
                />
                </View>
                <Button
                    title='Simpan'
                    onPress={this.saveData.bind(this)}
                />
            </View>
            </View>
        );
    }
}
export default inHome;

const Styles = StyleSheet.create({
    title:{
        fontSize:20,
        paddingTop:20,
        marginBottom:15
    },
    Nama:{
        fontSize:18,
        borderWidth:1,
        paddingTop:5,
        paddingBottom:5
    },
    isiNama:{
        fontSize:16,
        paddingTop:10
    },
    TextInput:{
        borderBottomWidth:1,
    },
    ViewTextInput:{
        marginBottom:15,
    }

})