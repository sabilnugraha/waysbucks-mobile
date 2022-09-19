import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from "react-native";
import Logo from '../assets/logo.png'



export default function Index({navigation}){

    return(
        <View style={style.section}>
            <StatusBar />
            <Image source={Logo} style={{width: 100, height: 100, marginTop: 80, marginLeft: 'auto', marginRight: 'auto' }} />
            <Text style={{fontSize:40, marginTop:0, textAlign:'center'}}>Ways <Text style={{color:`#B82020`}}>Bucks</Text>
            </Text>
            <Text style={{fontSize:15, textAlign: 'center', marginTop:15}}> We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available. Let's Order...</Text>
            <TouchableOpacity style={style.LoginPage} onPress={()=> navigation.navigate("Login")}>
                <Text style={style.textLoginPage}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.RegisterPage} onPress={()=> navigation.navigate("Register")}>
                <Text style={style.textRegisterPage}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    section: {
        padding : 35,
    },
    LoginPage: {
        backgroundColor: '#FF5555',
        height: 50,
        width: '100%',
        borderRadius: 5,
        marginTop: 40,
        marginBottom: 10,
        justifyContent: 'center'
      },
      textLoginPage :{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign : 'center',
      },
      RegisterPage: {
        backgroundColor: 'rgba(0, 0, 0, 0.31)',
        height: 50,
        width: '100%',
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
        justifyContent: 'center'
      },
      textRegisterPage :{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign : 'center',
      }
})
