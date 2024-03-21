import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useEffect, useState } from "react";
import * as Font from 'expo-font';

export default function Header() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFonts = async () => {
        try {
            await Font.loadAsync({
                'Koulen': require('../assets/Fonts/Koulen/Koulen-Regular.ttf'),
            });
            setFontsLoaded(true);
        } catch (error) {
            console.error('Erro ao carregar fontes:', error);
        }
    };

    useEffect(() => {
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.spacingContainer}>
                <Icon name="menu" size={25} color="white" />
                <Text style={styles.logoText}>STYLE ON</Text>
                <Icon name="cart-outline" size={25} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.black,
        height: '6%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacingContainer: {
        width: '90%',
        height: '90%',
        backgroundColor: COLORS.black,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    logoText:{
        fontFamily: 'Koulen',
        fontSize: 30,
        color: COLORS.principalOrange
    }

})