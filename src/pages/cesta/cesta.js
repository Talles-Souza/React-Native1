import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import top from "../../../assets/topo.png"
import logo from "../../../assets/logo.png"

export const Cesta = () => {
    return <>
        <Image source={top} style={styles.top} />
        <Text style={styles.titulo}>Detalhes da Cesta</Text>

        <View style={styles.cesta}>
            <Text style={styles.name}>
                Cesta de Verduras
            </Text>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logo} />
                <Text style={styles.nomeFazenda}>Jenny Jack Farm </Text>
            </View>
            <Text style={styles.descricao}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda diretamente para sua cozinha
            </Text>
            <Text style={styles.preco}>
                40,00
            </Text>
        </View>
    </>

}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical:12

    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26

    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8

    }
});