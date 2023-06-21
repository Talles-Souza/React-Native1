import React from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";
import top from "../../../assets/topo.png"

export const Cesta = () => {
    return <>
        <Image source={top} style={styles.top} />
        <Text style={styles.titulo}>Detalhes da Cesta</Text>
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
        fontSize:16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16
    }
});