import React, { Component } from "react"
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
} from "react-native"


export default class Contacts extends Component {

    constructor(props) {
        super(props)
        this.contact = {
            name: 'Dave Hannes',
            number: '(917) 470 2387'
        }
    }

    renderContact = ({ item }) => {
        return (
            <View style={styles.contactItemContainer}>
                <View>
                    <Text style={styles.contactName}>
                        {item.name}
                    </Text>
                    <Text style={styles.contactNumber}>
                        {item.number}
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.shareButton}
                        source={require('../assets/images/share.png')} />
                </View>
            </View>
        )
    }

    render() {
        const contacts = Array(5).fill(this.contact)
        return (
            <ScrollView style={styles.container}>
                <View style={{
                    paddingHorizontal: 15,

                }}>
                    <Image
                        style={styles.crossButton}
                        source={require('../assets/images/cross.png')} />
                    <Image
                        style={styles.announceImage}
                        source={require('../assets/images/announce.png')} />
                    <Text style={styles.investMessage}>
                        Give Everyone you know the opportunity to invest for future.
                </Text>
                    <Text style={styles.rewardMessage}>
                        You'll each earn $5 and grow towards success.
                </Text>
                    <Image
                        style={styles.socialImage}
                        source={require('../assets/images/social.png')} />
                    <Text style={styles.contactheader}>
                        CONTACTS
                </Text>
                    {
                        contacts.map(item => this.renderContact({ item }))
                    }
                </View>
                <View style={styles.footer}>
                    <Text style={styles.freeInvestmentLabel}>
                        Free investments earned
                    </Text>
                    <Text style={styles.freeInvestmentValue}>
                        $0.00
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    crossButton: {
        width: 20,
        height: 20,
    },
    announceImage: {
        width: 130,
        height: 130,
        marginTop: 50,
        resizeMode: 'contain',
    },
    investMessage: {
        fontFamily: 'MavenPro-Bold',
        fontSize: 24,
        marginTop: 25,
        color: '#050d13'
    },
    rewardMessage: {
        fontFamily: 'MavenPro-Regular',
        fontSize: 16,
        marginTop: 20,
        color: '#050d13'
    },
    socialImage: {
        height: 50,
        width: 250,
        marginTop: 25,
        resizeMode: 'contain',
    },
    shareButton: {
        height: 25,
        width: 70,
        resizeMode: 'contain',
    },
    contactheader: {
        marginTop: 40,
        fontFamily: 'MavenPro-Bold',
        fontSize: 20,
        color: '#050d13',
        marginBottom: 15,
    },
    contactItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.6,
        borderColor: '#80808055'
    },
    contactName: {
        fontFamily: 'MavenPro-Regular',
        color: '#050d13',
        fontSize: 16,
    },
    contactNumber: {
        fontFamily: 'MavenPro-Regular',
        fontSize: 16,
        color: 'rgba(5, 13, 19, 0.25)',
        marginTop: 5,
    },
    footer: {
        backgroundColor: '#02C3F8',
        paddingTop: 15,
        paddingBottom: 30,
        marginTop: 10,
        marginBottom: 30,
    },
    freeInvestmentLabel: {
        textAlign: 'center',
        fontFamily: 'MavenPro-Bold',
        fontSize: 16,
        color: '#000'
    },
    freeInvestmentValue: {
        fontFamily: 'MavenPro-ExtraBold',
        fontSize: 48,
        color: '#000',
        textAlign: 'center'
    }
})


