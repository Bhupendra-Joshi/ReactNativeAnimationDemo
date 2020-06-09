import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class Header extends Component {
    render() {
        const {
            onBackPress
        } = this.props;
        return (
            < View
                style={[
                    styles.header,
                ]}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={onBackPress}
                >
                    <Image
                        style={styles.backImage}
                        source={require('../assets/images/backArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Header
                  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: '#f0f0f0',
        height: 64,
        alignItems: 'center',
        flexDirection: 'row'
    },
    backButton: {
        padding: 20,
    },
    backImage: {
        width: 20,
        height: 20,
    },
    headerText: {
        fontSize: 16
    }
})