import React, {useEffect} from 'react';
import {
    View, 
    Text, StyleSheet,
    Platform,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated
} from "react-native";
import { COLORS, icons, FONTS, SIZE, SIZES } from '../constants';


const BookDetail = ({route, navigation}) => {
    const [book, setBook] = React.useState(null)
    
    React.useEffect(() =>{
        let {book} = route.params;
        setBook(book)
        
    }, [book])

    function renderBookInfoSection () {
        return(
            <View style={{ flex: 1}}>
                <ImageBackground 
                    source={book.bookCover}
                    resizeMode= "cover"
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                    }}
                />
                {/* color overlay */}
                <View style={{
                    position: 'absolute',
                    left: 0, right: 0, bottom: 0, top: 0,
                    backgroundColor: book.backgroundColor
                }}>
                </View>
                {/* navigation header */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    height: 55,
                    paddingHorizontal:SIZES.radius
                }}>
                    <TouchableOpacity 
                    style={{marginLeft: SIZES.base}}
                    onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={icons.back_arrow_icon}
                            resizeMode= "contain"
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{...FONTS.h3, color: book.navTintColor}}>Book Detail</Text>

                    </View>
                    <TouchableOpacity 
                    style={{marginLeft: SIZES.base}}
                    >
                        <Image 
                            source={icons.more_icon}
                            resizeMode= "contain"
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: book.navTintColor, 
                                alignItems: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* book cover */}
                <View style={{ alignItems: 'center', paddingTop: SIZES.padding2, flex: 5}}>
                    <Image 
                        source={book.bookCover}
                        resizeMode= "contain"
                        style={{
                            flex: 1,
                            width: 120,
                            height: "auto"
                        }}
                    />
                </View>
                {/* book name and author */}
                <View style={{ alignItems: 'center', flex: 2,justifyContent: 'center'}}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor}}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor}}>{book.author}</Text>
                </View>
                {/*book info */}
                <View style={{
                    flexDirection: 'row',
                    borderRadius: SIZES.radius,
                    backgroundColor:'rgba(0,0,0,0.3)',
                    paddingVertical: 10,
                    margin: SIZES.padding
                }}>
                    {/* book rating*/}
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white}}>Rating</Text>
                    </View>
                    {/* line devider */}
                    <View style={{ width: 1, paddingVertical:5}}>
                        <View style={{flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1}}></View>
                    </View>
                    {/* pages */}
                    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: SIZES.radius}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white}}>Number of Page</Text>
                    </View>
                    {/* line devider */}
                    <View style={{ width: 1, paddingVertical:5}}>
                        <View style={{flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1}}></View>
                    </View>
                    {/* languages */}
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white}}>Language</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {
        return (
            <View style={{ flex: 1,flexDirection: 'row', }}>
                
                {/* description */}
                <ScrollView 
                    contentContainerStyle={{paddingLeft: SIZES.padding}}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                >
                    <Text style={{...FONTS.h2, color: COLORS.white, marginBottom:5}}>Description</Text>
                    <Text style={{...FONTS.body2, color: COLORS.lightGray,}}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderButtons() {
        return(
            <View style={{ flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor:COLORS.secondary,
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image 
                        source={icons.bookmark_icon}
                        resizeMode= "contain"
                        style={{
                            width: 15, 
                            height: 15, 
                            tintColor: COLORS.lightGray2
                        }}
                    />

                </TouchableOpacity>
                {/* start reading button */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base
                    }}
                >
                    <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>

                </TouchableOpacity>

            </View>
        )
    }
    if(book) {
        return (
            <View style={styles.container}>
                {/* Book  cover section */}
                <View style={{ flex: 4}}>
                    {renderBookInfoSection()}
                </View>
                {/* book description */}
                <View style={{ flex: 2}}>
                    {renderBookDescription()}
                </View>
                {/* button */}
                <View style={{ height: 50}}>
                    {renderButtons()}
                </View>
            </View>
        )
    }else{
        return (<></>)
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
export default BookDetail;