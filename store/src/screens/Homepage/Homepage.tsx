import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import { COLORS, SIZE } from "../../../constants";
import { Header } from "../../components/export";
import { CategoryCard } from "../../components/CategoryCard";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Font from 'expo-font';
import { useState, useEffect } from "react";

export default function Homepage() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFonts = async () => {
        try {
        await Font.loadAsync({
            'PoppinsRegular': require('../../assets/Fonts/Poppins/Poppins-Regular.ttf'),
            'PoppinsBold': require('../../assets/Fonts/Poppins/Poppins-Bold.ttf'),
            'Koulen': require('../../assets/Fonts/Koulen/Koulen-Regular.ttf'),
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
        <View style={styles.screen}>
            <StatusBar backgroundColor={COLORS.black} animated={true} barStyle={"light-content"} />
            <Header/>
            <View style={styles.principalContainer}>
                <TextInput style={{width: '90%', backgroundColor: '#f40'}}/>

                <CategoryCard icon={<MaterialCommunityIcons name="tshirt-crew-outline" size={35} color="black" />} text="camisetas"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: SIZE.width,
        height: 'auto',
        minHeight: SIZE.height,
        backgroundColor: COLORS.lightGrey1,
        display: 'flex',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        flex:1,
        // top: 0
    },
    principalContainer:{
        backgroundColor: '#f80',
        width: '100%',
        height: '96%',
        display: 'flex',
        alignItems: 'center'


    }
    
})