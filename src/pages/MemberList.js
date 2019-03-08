import React from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/sharedConstants";
import { CHAPTER } from "../DataManager";
import { SearchBar } from "react-native-elements";
import ProfileListComponent from "../components/ProfileListComponent";

export class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      renderedMembers: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.handleRemoteRequest();
  }

  renderHeader = () => {
    return (
      <View>
        <SearchBar
          placeholder="Search for a chapter member ..."
          lightTheme
          round
          onChangeText={text => this.searchFunction(text)}
          autoCorrect={false}
        />
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View
        style={styles.viewStyle}
        containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
      >
        <FlatList
          data={this.state.renderedMembers}
          renderItem={({ item }) => (
            <ProfileListComponent
              fullName={`${item.name.first} ${item.name.last}`}
              image={item.picture.large}
            />
          )}
          keyExtractor={item => item.email}
          numColumns={2}
          ListHeaderComponent={this.renderHeader()}
          ListFooterComponent={this.renderFooter()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshhold={1}
        />
      </View>
    );
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1
      },
      () => {
        this.handleRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.handleRemoteRequest();
      }
    );
  };

  //Calls mocked users currently. Set up for easy transition to FG db. 
  handleRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            renderedMembers: [...this.state.renderedMembers, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false, refreshing: false });
        });
    }, 1500);
  };
}
export default MemberList;

const styles = StyleSheet.create({
  viewStyle: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    opacity: 1,
    backgroundColor: "whitesmoke"
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  }
});
