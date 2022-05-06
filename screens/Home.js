import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

const Home = ({ navigation }) => {
	const [newPlants, setNewPlants] = React.useState([
		{
			id: 0,
			name: 'Plants 1',
			img: images.plant1,
			favorite: true,
		},
		{
			id: 1,
			name: 'Plants 2',
			img: images.plant2,
			favorite: false,
		},
		{
			id: 2,
			name: 'Plants 3',
			img: images.plant3,
			favorite: false,
		},
		{
			id: 3,
			name: 'Plants 4',
			img: images.plant4,
			favorite: false,
		},
	]);
	const [friendslist, setFriendList] = React.useState([
		{ id: 0, img: images.profile1 },
		{ id: 1, img: images.profile2 },
		{ id: 2, img: images.profile3 },
		{ id: 3, img: images.profile4 },
		{ id: 4, img: images.profile5 },
	]);

	function renderNewPlants(item, index) {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginHorizontal: SIZES.base,
				}}>
				<Image
					resizeMode="cover"
					source={item.img}
					style={{
						width: SIZES.width * 0.23,
						height: '82%',
						borderRadius: 15,
					}}
				/>
				<View
					style={{
						position: 'absolute',
						bottom: '17%',
						right: 0,
						backgroundColor: COLORS.primary,
						borderTopLeftRadius: 10,
						borderBottomLeftRadius: 10,
						paddingHorizontal: SIZES.base,
					}}>
					<Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
				</View>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: '15%',
						left: 7,
					}}
					onPress={() => console.log('Favorite on press')}>
					<Image
						source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
						resizeMode="contain"
						style={{ width: 20, height: 20 }}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	function renderFriendsComponent() {
		if (friendslist.length === 0) {
			return (
				<View>
					<Text>ERROR</Text>
				</View>
			);
		} else if (friendslist.length <= 3) {
			return friendslist.map((item, index) => (
				<View kay={item.id} style={index === 0 ? {} : { marginLeft: -20 }}>
					<Image
						source={item.img}
						resizeMode="cover"
						style={{
							width: 50,
							height: 50,
							borderRadius: 25,
							borderWidth: 3,
							borderColor: COLORS.primary,
						}}
					/>
				</View>
			));
		} else {
			return (
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{friendslist.map((item, index) => {
						if (index <= 2) {
							return (
								<View
									key={item.id}
									style={index === 0 ? {} : { marginLeft: -20 }}>
									<Image
										source={item.img}
										resizeMode="cover"
										style={{
											width: 50,
											height: 50,
											borderRadius: 25,
											borderWidth: 3,
											borderColor: COLORS.primary,
										}}
									/>
								</View>
							);
						}
					})}
					<Text
						style={{ color: COLORS.secondary, marginLeft: 5, ...FONTS.body3 }}>
						+ {friendslist.length - 3} More
					</Text>
				</View>
			);
		}
	}

	return (
		<View style={styles.container}>
			<View style={{ height: '30%', backgroundColor: COLORS.white }}>
				<View
					style={{
						flex: 1,
						borderBottomLeftRadius: 50,
						borderBottomRightRadius: 50,
						backgroundColor: COLORS.primary,
					}}>
					<View
						style={{
							marginTop: SIZES.padding * 2,
							marginHorizontal: SIZES.padding,
						}}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
							<Text style={{ color: COLORS.white, ...FONTS.h2 }}>New Plants</Text>
							<TouchableOpacity
								onPress={() => console.log('Focuse on password')}>
								<Image
									resizeMode="contain"
									source={icons.focus}
									style={{
										width: 20,
										height: 20,
									}}
								/>
							</TouchableOpacity>
						</View>
						<View>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={newPlants}
								keyExtractor={item => item.id.toString()}
								renderItem={({ item, index }) => renderNewPlants(item, index)}
							/>
						</View>
					</View>
				</View>
			</View>

			<View style={{ height: '50%', backgroundColor: COLORS.lightGray }}>
				<View
					style={{
						flex: 1,
						borderBottomLeftRadius: 50,
						borderBottomRightRadius: 50,
						backgroundColor: COLORS.white,
					}}>
					<View
						style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
							<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
								Toda's Share
							</Text>
							<TouchableOpacity
								onPress={() => console.log('See all on pressed')}>
								<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
									See all
								</Text>
							</TouchableOpacity>
						</View>

						<View
							style={{
								flexDirection: 'row',
								height: '88%',
								marginTop: SIZES.base,
							}}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									style={{ flex: 1 }}
									onPress={() => navigation.navigate("PlantDetail")}>
									<Image
										source={images.plant5}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>

								<TouchableOpacity
									style={{ flex: 1, marginTop: SIZES.font }}
									onPress={() => navigation.navigate("PlantDetail")}>
									<Image
										source={images.plant6}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1.3 }}>
								<TouchableOpacity
									style={{ flex: 1, marginLeft: SIZES.font }}
									onPress={() => navigation.navigate("PlantDetail")}>
									<Image
										source={images.plant7}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View style={{ height: '20%', backgroundColor: COLORS.lightGray }}>
				<View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
					<View
						style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
						<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
							Added Friends
						</Text>
						<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
							{friendslist.length} Total
						</Text>
						<View style={{ flexDirection: 'row', height: '50%' }}>
							{/* friends */}
							<View
								style={{
									flex: 1.3,
									flexDirection: 'row',
									alignItems: 'center',
								}}>
								{renderFriendsComponent()}
							</View>
							{/* add friends */}
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}>
								<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
									Add New
								</Text>
								<TouchableOpacity
									style={{
										marginLeft: SIZES.base,
										width: 40,
										height: 40,
										backgroundColor: COLORS.gray,
										borderRadius: 10,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									onPress={() => console.log('Add new press')}>
									<Image
										source={icons.plus}
										resizeMode="contain"
										style={{
											width: 20,
											height: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
