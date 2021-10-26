import React, {useEffect} from 'react';
import {
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Platform, 
    StatusBar,
    StyleSheet,
    ScrollView, 
    FlatList,
    Touchable
} from "react-native";
import { Alegreya_400Regular, Alegreya_500Medium, Alegreya_600SemiBold, useFonts} from "@expo-google-fonts/alegreya"
import {COLORS, FONTS, SIZES, icons, images} from '../constants'
import { LogBox  } from 'react-native';


const Home = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        Alegreya_400Regular, Alegreya_500Medium, Alegreya_600SemiBold
    })
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    const profileData= {
        name: "username",
        points: "20"
    }


    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Other Words For Home",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "The Metropolis",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]




    const [profile, setProfile] = React.useState(profileData)
    const [myBooks, setMyBooks] = React.useState(myBooksData)
    const [categories, setCategories] = React.useState(categoriesData)
    const [selectedCategory, setSelectedCategory] = React.useState(1)
    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center'}}>
                <View style={{ flex: 1, }}>
                    <Text style={{...FONTS.h3,  color: COLORS.white}}>Good morning</Text>
                    <Text style={{...FONTS.h1,  color: COLORS.white}}>{profile.name}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                        paddingLeft: 3,
                        height: 40,
                        paddingRight: SIZES.radius,
                        
                    }}
                >
                    <View style={{ flex: 1,flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 25,
                    backgroundColor: 'rgba(0,0,0,0.5)', width: 30, height: 30}}>
                            <Image 
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    height: 15,
                                    width: 15
                                }}
                            />
                        </View>
                        <Text style={{marginLeft:SIZES.base, color: COLORS.white, ...FONTS.body2}}>{profile.points} points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding, paddingTop: 0}}>
                <View style={{flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius}}>
                    {/* claim */}
                    <TouchableOpacity style={{ flex: 1}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center'}}>
                            <Image 
                                source={icons.claim_icon}
                                resizeMode= "contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white}}>Claim</Text>
                        </View>
                    </TouchableOpacity>
                    {/* devider */}
                    <View style={{width:1, paddingVertical: 18}}>
                        <View style={{flex:1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
                    </View>
                    {/* get points */}
                    <TouchableOpacity style={{ flex: 1}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center'}}>
                            <Image 
                                source={icons.point_icon}
                                resizeMode= "contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white}}>Get point</Text>
                        </View>
                    </TouchableOpacity>
                    {/* devider */}
                    <View style={{width:1, paddingVertical: 18}}>
                        <View style={{flex:1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
                    </View>
                    { /* my card */}
                    <TouchableOpacity style={{ flex: 1}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center'}}>
                            <Image 
                                source={icons.card_icon}
                                resizeMode= "contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white}}>My card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderBookSection(myBooks) {
        const renderItem= ({item, index}) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index === 0? SIZES.padding: 0,
                        marginRight: SIZES.radius,
                        marginTop: 5,
                    }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    <Image 
                        source={item.bookCover}
                        resizeMode= "cover"
                        style={{
                            width: 150,
                            height: 210,
                            borderRadius: 20
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            source={icons.clock_icon}
                            resizeMode= "contain"
                            style={{
                                width: 15, height: 15, tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{...FONTS.body3, color: COLORS.lightGray, marginLeft: 5}}>{item.lastRead}</Text>
                        <Image 
                            source={icons.page_icon}
                            resizeMode= "contain"
                            style={{
                                width: 15, height: 15, tintColor: COLORS.lightGray,
                                marginLeft: SIZES.radius
                            }}
                        />
                        <Text style={{...FONTS.body3, color: COLORS.lightGray, marginLeft: 5}}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1}}>
                {/* header */}
                <View style={{paddingHorizontal: SIZES.padding,flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white}}>My Book</Text>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray}}>see more</Text>
                    </TouchableOpacity>
                </View>
                {/* books */}
                <View style={{ flex: 1}}>
                    <FlatList 
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }


    function renderCategoryHeader() {
        const renderItem = ({item, index}) =>{
            return (
                <TouchableOpacity
                    style={{flex: 1, marginRight: SIZES.padding}}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory === item.id &&
                        <Text style={{...FONTS.body2, color: COLORS.white}}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{...FONTS.body2, color: COLORS.lightGray}}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding}}>
                <FlatList 
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator= {false}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []
        let selectedCtagoryBooks = categories.filter(a => a.id === selectedCategory)
        if(selectedCtagoryBooks.length > 0 ) {
            books = selectedCtagoryBooks[0].books
        }

        const renderItem = ({item}) => {
            return (
                <View style={{ marginVertical: SIZES.base}}>
                    <TouchableOpacity 
                    style={{flex: 1, flexDirection: 'row'}}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                    >
                        <Image 
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{
                                width: 100,
                                height: 150,
                                borderRadius: 10
                            }}
                        />
                        <View style={{ flex: 1, marginLeft: SIZES.radius}}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white}}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.body3, color: COLORS.lightGray}}>{item.author}</Text>
                            </View>
                            {/* Book info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius}}>
                                <Image 
                                    source={icons.page_filled_icon}
                                    resizeMode= "contain"
                                    style={{
                                        width: 15, height: 15,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, 
                                    paddingHorizontal: SIZES.radius}}>{item.pageNo}</Text>
                                <Image 
                                    source={icons.read_icon}
                                    resizeMode= "contain"
                                    style={{
                                        width: 15, height: 15,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray,
                                     paddingHorizontal: SIZES.radius}}>{item.readed}</Text>
                            </View>
                            {/* genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base,}}>
                                {
                                    item.genre.includes('Adventure')&&
                                    <View style={{ justifyContent: 'center', alignItems: 'center',
                                    padding: 5, marginRight:5,
                                    backgroundColor: COLORS.darkGreen, height: 48, borderRadius: SIZES.radius}}>
                                        <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes('Romance')&&
                                    <View style={{ justifyContent: 'center', alignItems: 'center',
                                    padding: 5, marginRight:5,
                                    backgroundColor: COLORS.darkRed, height: 48, borderRadius: SIZES.radius}}>
                                        <Text style={{...FONTS.body3, color: COLORS.lightRed}}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes('Drama')&&
                                    <View style={{ justifyContent: 'center', alignItems: 'center',
                                    padding: 5, marginRight:5,
                                    backgroundColor: COLORS.darkBlue, height: 48, borderRadius: SIZES.radius}}>
                                        <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* book mark */}
                    <TouchableOpacity style={{ position: 'absolute', top: 5, right: 15}}>
                        <Image 
                            source={icons.bookmark_icon}
                            resizeMode= "contain"
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList 
                    data={books}
                    renderItem={renderItem}
                    keyExtractor = {item => item.id.toString()}
                    showsVerticalScrollIndicator= {false}
                    
                />
            </View>
        )
    }

    if(!fontsLoaded) {
        return null
    }else{

        return (
            <SafeAreaView style={styles.container}>
                {/* header section */}
                <View style={{height: 200}}>
                    {renderHeader(profile)}
                    {renderButtonSection()}
                </View>
                {/* body section */}
                <ScrollView >
                    {/* books section */}
                    {renderBookSection(myBooks)}
                    {/* categories section */}
                    <View style={{ marginTop: SIZES.padding}}>
                        <View>
                            {renderCategoryHeader()}
                        </View>
                        <View>
                            {renderCategoryData()}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
export default Home;