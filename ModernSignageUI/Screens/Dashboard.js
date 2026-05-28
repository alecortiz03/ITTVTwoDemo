import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import DateTimeCard from '@/Components/DateTimeCard';
import HoursCard from '@/Components/HoursCard';
import GuestWiFiCard from '@/Components/GuestWiFiCard';
import { Images } from '@/AppData/Images';
import { BlurView } from 'expo-blur';
import WeatherCard from '@/Components/WeatherCard';

export default function Dashboard() {
	return (
		<ImageBackground
			source={Images.Background}
			style={styles.container}>
			<BlurView
				intensity={70}
				style={styles.blurView}>
				<DateTimeCard
					positionVertical={30}
					positionHorizontal={50}
					borderRadius={60}
					borderColor={'rgba(11, 11, 11, 0.59)00'}
					borderWidth={6}
					backgroundColor={'#090909c7'}
					textColor={'#ffffff'}
				/>
				<HoursCard
					positionVertical={1100}
					positionHorizontal={50}
					borderRadius={60}
					borderColor={'rgba(11, 11, 11, 0.59)00'}
					borderWidth={6}
					backgroundColor={'#090909c7'}
					textColor={'#ffffff'}
				/>
				<GuestWiFiCard
					positionVertical={750}
					positionHorizontal={50}
					borderRadius={60}
					borderColor={'rgba(11, 11, 11, 0.59)00'}
					borderWidth={6}
					backgroundColor={'#090909c7'}
					textColor={'#ffffff'}
				/>
				<WeatherCard
					positionVertical={1200}
					positionHorizontal={50}
					borderRadius={60}
					borderColor={'rgba(11, 11, 11, 0.59)00'}
					borderWidth={6}
					backgroundColor={'#090909c7'}
					textColor={'#ffffff'}
				/>
			</BlurView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		resizeMode: 'cover',
		height: '100%',
		width: '100%',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	blurView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
});
