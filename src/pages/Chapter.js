import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, Image, FlatList} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import {DataManager, CHAPTER} from "../DataManager";
import {ChProfile} from "../types/Chapter";
import {ChapterService} from "../services/ChapterService"
import {ProfileService} from "../services/ProfileService"
import { MOCKED_CHAPTER_with_BANNER_and_AVATAR } from '../test/MockedTypes';

export class Chapter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: 'initial',
            chapter: null,
            members: null
        };
        this.chapterService = new ChapterService()
        this.profileService = new ProfileService()
        this.images = null
    }
    async loadChapter() {
        return await this.chapterService.getChapter("c5dadd8e-293e-41bf-b18d-45dfa055e38f")
        // return DataManager.getItemWithKey(CHAPTER)
            // .catch((error) => {return ("[ERROR - FgProfile > loadFgMember() ]: ", error.message)});
    }

    renderChapterMember = ({item: member}) => {
        return (
            <View style={styles.member}>
                <Avatar
                    avatarSize={'large'}
                    source={member.profilePhoto}/>
                <Text>{member.firstName} {member.lastName}</Text>
            </View>
        );
    }

    memberKeyExtractor = (item, index) => item.id

    componentDidMount() {
        this.setState({ loading: 'true' });
        this.loadChapter()
            .then(async (chapter) =>  {
                let members = []
                for(var memberIndex = 0; memberIndex < chapter.members.length; memberIndex++) {
                    let member = chapter.members[memberIndex];
                    let photo = await this.profileService.getProfilePhoto(member.id)
                    members.push({
                        ...member,
                        profilePhoto: photo
                    })
                }
                this.setState({chapter: chapter, members: members, loading: false});
            })
            .catch( (error) => {
              console.log(error.message);
              this.setState({info: MOCKED_CHAPTER_with_BANNER_and_AVATAR, loading: false})
            });
    }
    render() {
        if( this.state.loading === 'initial' ) {
            return <Text>Initializing</Text>
        }

        if( this.state.loading === 'true' ) {
            return <Text>Loading</Text>
        }

        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            /* Wrap entire profile in a ScrollView */
            <ScrollView
                style={styles.scrollViewStyle}>
            <View style={styles.container}>
                {/* Render the Banner */}
                <Banner source={this.state.chapter.bannerSource}/>

                {/* Render the Avatar */}
                <View style={{ top: -(bannerHeight / 2), flex: 1}}>
                    <Avatar
                        avatarSize={'large'}
                        name={this.state.chapter.schoolName}
                        source={this.state.chapter.avatarSource}/>
                </View>

                <Text style={styles.textContainer}>
                    <Text style={styles.nameLabel}>
                        {this.state.chapter.schoolName}{"\n"}
                    </Text>
                    <Text style={styles.schoolLabel}>
                        {this.state.chapter.chapterNumber}{"\n"}
                    </Text>
                </Text>

                {/* Render the 'Inspiration' title with horizontal dividers on each side */}
                <View style={styles.inspirationTitle}>
                    <View style={styles.inspirationLine}/>
                    <Text style={styles.inspirationLabel}>{this.state.chapter.description}</Text>
                    <View style={styles.inspirationLine}/>
                </View>

                {/* Render the Chapter members */}
                <View>
                <FlatList
                    style={styles.memberList}
                    data={this.state.members}
                    renderItem={this.renderChapterMember}
                    keyExtractor={this.memberKeyExtractor}
                    numColumns={2}
                />
                </View>
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    memberList: {
        marginTop: 20,
    },
    member: {
        alignItems: 'center',
        margin: 10
    },
    scrollViewStyle: {
        flex: 1,
        opacity: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textContainer: {
        flex: 1,
        color: '#818282',
        textAlign: 'center',
        marginTop: -50
    },
    nameLabel: {
        fontFamily: 'montserrat-light',
        fontSize: 24
    },
    schoolLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
    },
    gradYearLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 14
    },
    inspirationTitle: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    inspirationLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: -10
    },
    inspirationLine: {
        borderColor:'#818282',
        borderBottomWidth:1,
        flex: 1,
    },
    inspirationBlock: {
        flex:1,
        fontFamily: 'open-sans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        // margin: 20
    }
});
