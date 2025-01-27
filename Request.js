import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions
}from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import DropdownMenu from 'react-native-dropdown-menu'

// let data = [{
//     value: 'Banana',
//   }, {
//     value: 'Mango',
//   }, {
//     value: 'Pear',
//   }];

const width = Dimensions.get('window').width

export default class Request extends Component{

    state={
        req: '',
        hashtag: '',
        info: '',
        option: ''
    }

    // sendRequest = async() =>{
    //     params={
    //         name: 'Lucy',
    //         message: this.state.req,
    //         category: this.state.hashtag,
    //         username: 'Lucifer',
    //         price: 20,
    //         info: this.state.info,
    //         type: 'Request'
    //     }

    //     const resp = await Parse.Cloud.run('AddRequest', params)

    //     if(resp){
    //         alert('Request added successfully!!!')
    //     }
    // }

    render(){
        Parse.setAsyncStorage(AsyncStorage);
        Parse.initialize("myAppId");
        Parse.serverURL = 'http://localhost:1337/parse';
        return(
            <View style={{flex: 1}}>
                   <View style={{height: 105, flexDirection: 'row', alignItems: 'center', width: phonewidth, backgroundColor: 'white'}}>
                    <View style={{marginTop: 20, marginLeft: 18}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                          <Image 
                            source={require('./images/circle.png')}
                            style={{width: 40, height: 40, marginLeft: 2}}
                          />
                          <Image
                            source={require('./images/avatar2.png')}
                            style={{ resizeMode: "cover",
                            height: 45,
                            width: 45,
                            borderWidth: 0,
                            borderRadius: 75,
                            position: 'absolute', top: -4, marginLeft: 2}}
                          />
                      </TouchableOpacity>
                    </View> 
                   
                     

                    <View>
                      <Image
                        source={require('./images/weShare.png')}
                        style={{ width: 150, height: 29, marginLeft: 70, marginTop: 20}}
                      />
                    </View>

                   
                    <View>
                     <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('./images/delete.png')}
                            style={{ width: 20, height: 20, marginLeft: 100, marginTop: 20}}
                        />
                     </TouchableOpacity>
                    </View>
              </View>

                 <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={styles.txt}>Request Form</Text>
                        <Text style={styles.txt2}> What would you like to Request?</Text>
                        <TextInput 
                        placeholder='Type your request here'
                        onChangeText={txt => this.setState({req: txt})}
                        value={this.state.req}
                        style={styles.txt3}/>
                         <Text style={styles.cat}> Category Hashtag #</Text>
                         <TextInput 
                        placeholder='Type your category here'
                        onChangeText={txt => this.setState({hashtag: txt})}
                        value={this.state.hashtag}
                        style={styles.txt3}/>
                        

                        <Text style={styles.cat}> Additional Information</Text>
                        <TextInput
                            placeholder='Additional Information'
                            onChangeText={txt => this.setState({ info: txt })}
                            value={this.state.info}
                            style={styles.txt3} />

                        <View style={{flex: 1, width: width, marginTop: 180, alignItems: 'center'}}>
                                <View style={{height: 50, backgroundColor: '#5887F9', alignItems: 'center', justifyContent: 'center', width: width}}>
                                        <TouchableOpacity onPress={() => {
                                          //  this.sendRequest()
                                            this.setState({
                                                req: '',
                                                hashtag: '',
                                                info: ''
                                            })
                                            this.props.navigation.navigate('showdonation',{
                                                req: this.state.req,
                                                hashtag: this.state.hashtag,
                                                info: this.state.info
                                            })
                                        }}>
                                            <Text style={styles.confirm2}>Next</Text>
                                        </TouchableOpacity>
                                </View>
                                <Text style={styles.safe}>You are completely safe</Text>
                                <Text style={styles.safe2}>Read our Terms & Conditions</Text>
                        </View>
                 </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    txt:{
        fontWeight: '500',
        color: '#5887F9',
        fontSize: 20,
        top: 5
    },
    txt2:{
        marginTop: 45,
        fontSize: 20,
        fontWeight: '500',
        color: '#5887F9'
    },
    txt3:{
        height: 50,
        marginTop: 20,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        width: 340
    },
    cat:{
        fontSize: 20,
        fontWeight: '500',
        color: '#5887F9',
        marginTop: 60
    },
    confirm2:{
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    safe:{
        fontWeight: '500',
        fontSize: 15,
        color: '#5F7FC1',
        marginTop: 14
    },
    safe2:{
        fontWeight: '500',
        fontSize: 15,
        color: '#CAA8FE',
        marginTop: 7
    }
})
