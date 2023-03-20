import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors';

const Button = (props) => {
    return (
        <Pressable 
            onPress={() => props.onPress()}
            style={{ ...styles.btnContainer, borderRadius: props.borderRadius ? props.borderRadius : 6, backgroundColor: props.bgColor, width: props.width, borderWidth: props.hasBorder ? 1 : 0, borderColor: props.borderColor ? props.borderColor : Colors.PRIMARY_WHITE }}
        >
            {props.loading ?
                <ActivityIndicator size={25} color={props.loadingColor} />
            :
                props.hasIcon ?
                    <View style={styles.btnChildren}>
                        {props.icon}
                        <Text style={{ ...styles.btnText, color: props.textColor, marginLeft: 10 }}>{props.title}</Text>
                    </View>
                :
                    <Text style={{ ...styles.btnText, color: props.textColor }}>{props.title}</Text>
            }
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        paddingVertical: 12, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    btnChildren: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18, 
        fontWeight: 'bold',
    }
})