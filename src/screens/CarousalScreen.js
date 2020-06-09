import React, { Component } from "react"
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
} from "react-native"
import Header from '../components/Header';

const CAROUSAL_WIDTH = Dimensions.get('window').width;

export default class CarousalScreen extends Component {
    constructor(props) {
        super(props);
        this.carousalAnimatedValue = new Animated.Value(0);
        this.state = {
            screenIndex: 1
        }
        this.screens = [
            'Screen 1',
            'Screen 2',
            'Screen 3',
            'Screen 4',
            'Screen 5',
            'Screen 6',
        ]
        this.timing = 120
    }
    
    loadNextScreen = () => {
        const {
            screenIndex
        } = this.state;
        const {
            timing
        } = this.props;

        if (screenIndex < this.screens.length) {
            this.setState({
                screenIndex: screenIndex + 1,
            })
            Animated.timing(
                this.carousalAnimatedValue,
                {
                    toValue: screenIndex,
                    easing: Easing.ease,
                    duration: timing || this.timing,
                    useNativeDriver: true,
                })
                .start()
        }
    }

    loadPreviousScreen = () => {
        const {
            screenIndex
        } = this.state;
        const {
            timing
        } = this.props;

        if (screenIndex > 1) {
            this.setState({
                screenIndex: screenIndex - 1,
            })
            Animated.timing(
                this.carousalAnimatedValue,
                {
                    toValue: screenIndex - 2,
                    easing: Easing.ease,
                    duration: timing || this.timing,
                    useNativeDriver: true,
                })
                .start()
        }
    }

    render() {
        const {
            screenIndex
        } = this.state;
        return (
            <View style={styles.container}>
                <Header
                    onBackPress={this.loadPreviousScreen} />
                {
                    this.screens.slice(0, screenIndex).map(item => {
                        return (
                            < View
                                key={item}
                                style={[
                                    styles.subHeader,
                                ]}>
                                <Text style={styles.screenHeaderText}>
                                    {item}
                                </Text>
                            </View>

                        )
                    })
                }
                <View style={styles.caraousalContainer}>
                    <Animated.View style={[
                        styles.caraousal,
                        {
                            transform: [{
                                translateX: this.carousalAnimatedValue.interpolate({
                                    inputRange: [0, this.screens.length],
                                    outputRange: [0, - CAROUSAL_WIDTH * this.screens.length]
                                })
                            }]
                        }]}>
                        {
                            this.screens.map(item =>
                                <View
                                    key={item}
                                    style={styles.screen} >
                                    <View style={styles.carousalItem} >
                                        <Text style={styles.carousalItemText}>
                                            {item}
                                        </Text>
                                    </View>
                                </View>
                            )
                        }

                    </Animated.View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.loadNextScreen}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subHeader: {
        // backgroundColor: 'green',
        height: 64,
        justifyContent: 'center',
        paddingStart: 20
    },
    caraousalContainer: {
        flex: 1,
    },
    caraousal: {
        flex: 1,
        flexDirection: 'row',
    },
    carousalItem: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderWidth: 1,
    },
    carousalItemText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    screen: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    footer: {
        paddingBottom: 32
    },
    button: {
        marginHorizontal: 20,
        // backgroundColor: 'grey',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
    },
    screenHeaderText: {
        fontSize: 24
    }
})


