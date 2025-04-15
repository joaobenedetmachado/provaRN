import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ProdCard({ title, desc, imagereq }) {
    const [count, SetCount] = useState(0);
    function add() {
        SetCount(count + 1);
    }

    function del() {
        if (count > 0) {
            SetCount(count - 1);
        }
    }

    return (
        <View style={style.prodCardContainer}>
            <Image
                style={{
                    height: 80,
                    width: 80
                }}
                source={{uri: `${imagereq}`}}
                />
            <View>
                <Text style={style.Text}>{title}</Text>
                <Text style={style.Text}>{desc}</Text>
                <Text style={style.Text}>Contagem: {count}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={add}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={del}><Text>-</Text></TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    prodCardContainer: {
        backgroundColor: "#f9f9f9",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Text: {
        color: "#000",
        maxWidth: 150
    },
    button: {
        backgroundColor: "#fff",
        height: 30,
        width: 30,
        displax: 'flex',
        flexDirection: 'center',
        alignItems: "center"
    }
})