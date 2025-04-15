import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function FeedBack() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleChangeNome(e) {
        setNome(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeMensagem(e) {
        setMensagem(e.target.value);
    }
    return (
        <View style={style.container} >
            <Image
                style={{
                    width: "90%", height: 200
                }}
                source={{ uri: "https://midias.agazeta.com.br/2024/09/18/a-nova-unidade-da-padaria-top-tambem-tem-hortifruti-acougue-e-outros-produtos-2430174-article.jpg" }}
            />
            <View style={style.faleconosco}>
                <Text>Fale Conosco:</Text>
                <View >
                    <TextInput
                        placeholder='Nome'
                        onChange={handleChangeNome}
                        style={style.textInput}
                    />
                    <TextInput
                        placeholder='Email'
                        onChange={handleChangeEmail}
                        style={style.textInput}
                    />
                    <TextInput
                        placeholder='Mensagem'
                        onChange={handleChangeMensagem}
                        style={style.textInput}
                    />
                    <Text>Olá {nome}! sua mensagem: {mensagem}, foi enviado com o email {email}</Text>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60,
    },
    textInput: {
        paddin: 8,
        width: 150,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderRadius: 12,
    },
    faleconosco: {
        width: "90%",
        backgroundColor: "#f1f1f1",
        padding : 24,
    }
})