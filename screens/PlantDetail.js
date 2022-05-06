import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { images, icons, FONTS, SIZES, COLORS } from '../constants';

const RequirementBar = ({ barPrecentage, icon }) => {
	return (
		<View style={{ height: 60, alignItems: 'center' }}>
			<View
				style={{
					width: 50,
					height: 50,
					borderWidth: 1,
					borderColor: COLORS.gray,
					borderRadius: 10,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Image
					source={icon}
					resizeMode="cover"
					style={{
						tintColor: COLORS.secondary,
						width: 30,
						height: 30,
					}}
				/>
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					height: 3,
					marginTop: SIZES.base,
					backgroundColor: COLORS.gray,
				}}></View>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: barPrecentage,
					height: 3,
					marginTop: SIZES.base,
					backgroundColor: COLORS.primary,
				}}></View>
		</View>
	);
};

const RequirementDetail = ({ icon, label, detail }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
				<Image
					source={icon}
					resizeMode="cover"
					style={{
						width: 30,
						height: 30,
						tintColor: COLORS.secondary,
					}}
				/>
				<Text
					style={{
						marginLeft: SIZES.base,
						color: COLORS.secondary,
						...FONTS.h2,
					}}>
					{label}
				</Text>
			</View>
			<View style={{ flex: 1, alignItems: 'flex-end' }}>
				<Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>
					{detail}
				</Text>
			</View>
		</View>
	);
};

const PlantDetail = ({ navigation }) => {
	function renderRequirementsBar() {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginTop: SIZES.padding,
					paddingHorizontal: SIZES.padding,
					justifyContent: 'space-between',
				}}>
				<RequirementBar icon={icons.sun} barPrecentage="50%" />
				<RequirementBar icon={icons.drop} barPrecentage="25%" />
				<RequirementBar icon={icons.temperature} barPrecentage="80%" />
				<RequirementBar icon={icons.garden} barPrecentage="30%" />
				<RequirementBar icon={icons.seed} barPrecentage="50%" />
			</View>
		);
	}

	function renderRequirements() {
		return (
			<View
				style={{
					justifyContent: 'space-around',
					paddingHorizontal: SIZES.padding,
					marginTop: SIZES.padding,
					flex: 2.5,
				}}>
				<RequirementDetail icon={icons.sun} label="Sunlight" detail="15˚C" />
				<RequirementDetail
					icon={icons.drop}
					label="Water"
					detail="250 ML Daily"
				/>
				<RequirementDetail
					icon={icons.temperature}
					label="Room Temp"
					detail="25˚C"
				/>
				<RequirementDetail icon={icons.garden} label="Soil" detail="3 kg" />
				<RequirementDetail
					icon={icons.seed}
					label="Fertilizer"
					detail="150 Mg"
				/>
			</View>
		);
	}

	function renderFooter() {
		return (
			<View
				style={{ flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding }}>
				<TouchableOpacity
					style={{
						flex: 1,
						flexDirection: 'row',
						paddingHorizontal: SIZES.padding,
						alignItems: 'center',
						justifyContent: 'center',
						borderTopRightRadius: 30,
						borderBottomRightRadius: 30,
						backgroundColor: COLORS.primary,
					}}
					onPress={() => console.log('Take Action')}>
					<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
					<Image
						source={icons.chevron}
						resizeMode="contain"
						style={{
							marginLeft: SIZES.padding,
							width: 20,
							height: 20,
						}}
					/>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						paddingHorizontal: SIZES.padding,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>
						Almost 2 weeks of growing time
					</Text>
					<Image
						source={icons.downArrow}
						resizeMode="contain"
						style={{
							width: 20,
							height: 20,
							marginLeft: SIZES.base,
							tintColor: COLORS.secondary,
						}}
					/>
				</View>
			</View>
		);
	}

	function renderHeader() {
		return (
			<View
				style={{
					position: 'absolute',
					top: 50,
					left: SIZES.padding,
					right: SIZES.padding,
				}}>
				<View
					style={{
						flexDirection: 'row',
					}}>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Home')}
							style={{
								width: 40,
								height: 40,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 20,
								backgroundColor: 'rgba(255,255,255, 0.5)',
							}}>
							<Image
								source={icons.back}
								resizeMode="contain"
								style={{
									width: 15,
									height: 15,
								}}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
						onPress={() => console.log('Focused on press')}>
						<Image
							source={icons.focus}
							resizeMode="contain"
							style={{
								width: 25,
								height: 25,
							}}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{ flexDirection: 'row', marginTop: '10%' }}
				>
					<View style={{ flex: 1 }}>
						<Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>Gloru Mantas</Text>
					</View>
					<View style={{ flex: 1 }}></View>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* banner foto  */}
			<View style={{ height: '35%' }}>
				<Image
					source={images.bannerBg}
					resizeMode="cover"
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</View>

			{/* documents  */}
			<View
				style={{
					flex: 1,
					backgroundColor: COLORS.lightGray,
					marginTop: -40,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					paddingVertical: SIZES.padding,
				}}>
				<Text
					style={{
						paddingHorizontal: SIZES.padding,
						color: COLORS.secondary,
						...FONTS.h1,
					}}>
					Requirements
				</Text>
				{renderRequirementsBar()}

				{renderRequirements()}

				{renderFooter()}
			</View>
			{renderHeader()}
		</View>
	);
};

export default PlantDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
