import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from "../config/COLORS";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLoginForm}>
                <TextInput
                    placeholder={"E-Mail"}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Password"}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity style={styles.containerLogin}
                    onPress={()=> navigation.navigate("Main")}
                    >
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerLoginForm: {
        width: '50%',
        height: '50%',
        //backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input:{
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginVertical: 8,
        borderColor: COLORS.grey,
        borderWidth: 1,      
    },
    containerLogin:{
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: COLORS.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin:{
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    }
});
