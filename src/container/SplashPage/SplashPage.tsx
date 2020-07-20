import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

interface SplashPageProps {
    navigation: any;
}

const SplashPage = (props: SplashPageProps) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Home');
        }, 3000);
    });

    return (
        <View>
            <Text>Splash Page</Text>
        </View>
    );
};

export default SplashPage;
