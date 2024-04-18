import { View, Text, StyleSheet, StatusBar, TextInput, Image } from "react-native";
import { COLORS, SIZE } from "../../../constants";
import { Header } from "../../components/export";
import { CategoryCard } from "../../components/CategoryCard";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Font from 'expo-font';
import { useState, useEffect } from "react";
import Camisa from '../../assets/images/camisa_amarela.jpg'

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
                <TextInput style={styles.search} placeholder="O que procura?" cursorColor={COLORS.black}/>
                <View style={styles.image}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 7}} source={Camisa}/>
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <CategoryCard icon={<MaterialCommunityIcons name="tshirt-crew-outline" size={35} color="black" />} text="camisetas"/>
                    <CategoryCard icon={<MaterialCommunityIcons name="tshirt-crew-outline" size={35} color="black" />} text="calçados"/>
                    <CategoryCard icon={<MaterialCommunityIcons name="tshirt-crew-outline" size={35} color="black" />} text="bolsas"/>
                </View>
               
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
        flex:1,
    },
    principalContainer:{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        gap: 35
    },
    search: {
        width: '80%',
        height: 40,
        backgroundColor: COLORS.lightGrey2,
        borderWidth: .5,
        borderRadius: 7,
        borderColor: COLORS.lightGrey4,
        padding: 8
    },
    image: {
        width: '93%',
        height: 306,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.lightGrey3,
        backgroundColor: COLORS.lightGrey1
    }
    
})