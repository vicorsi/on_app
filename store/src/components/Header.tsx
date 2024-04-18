import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
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
            <StatusBar backgroundColor={COLORS.principalOrange} animated={true} />
            <View style={styles.spacingContainer}>
                <Text style={styles.logoText}>STYLE ON</Text>
                <Pressable>
                    <Icon name="cart-outline" size={20} color="white" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.black,
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0
    },
    spacingContainer: {
        width: '75%',
        height: '90%',
        backgroundColor: COLORS.black,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    logoText:{
        fontFamily: 'Koulen',
        fontSize: 34,
        color: COLORS.principalOrange,
        letterSpacing: 2
    },
    pressable:{
        width: 'auto',
        height: 'auto'
    }

})