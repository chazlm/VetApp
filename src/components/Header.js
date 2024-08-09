// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as AuthSession from 'expo-auth-session';

const clientId = "1f632d93334fedf2811804c884831638";
const clientSecret = "1fcbb3cb4bc81ace8f99c36b881412fe";
const redirectUri = 'https://greenweenie.netlify.app/';

const discovery = {
    authorizationEndpoint: "https://api.id.me/oauth/authorize?client_id=1f632d93334fedf2811804c884831638&redirect_uri=https://greenweenie.netlify.app/&response_type=code&scope=military",
    tokenEndpoint: "https://api.id.me/oauth/token",
};

const Header = ({ title, onLoginPress }) => {

    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId,
            redirectUri,
            scopes: ['military'],
            responseType: AuthSession.ResponseType.Code,
        },
        discovery
    );

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity style={styles.loginButton}
                onPress={promptAsync}
                onClick={promptAsync}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 100, // Adjust height as needed
        backgroundColor: '#f8f8f8',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row', // To place the button to the right
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        flex: 1, // To take up remaining space
        textAlign: 'center',
        paddingLeft: 50

    },
    loginButton: {
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    loginButtonText: {
        fontSize: 16,
        color: '#007BFF',
    },
});

export default Header;
