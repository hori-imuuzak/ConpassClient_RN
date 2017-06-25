import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import EventItem from '../EventItem';

import styles from './style';

export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: props.isLoading,
      favoriteList: props.favoriteList,
    };

    this.renderIndicator = this.renderIndicator.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      isLoading,
      favoriteList,
    } = nextProps;

    this.setState({
      isLoading: isLoading,
      favoriteList: favoriteList,
    });
  }

  renderIndicator() {
    return (
      <View style={styles.itemStyle}>
        <ActivityIndicator
          style={styles.indicator}
          animating
        />
      </View>
    )
  }

  renderEvent(event) {
    const {
      onClickItem,
      onFavoriteChange,
    } = this.props;

    const {
      favoriteList,
    } = this.state;

    const isFavorite = (Object.values(favoriteList).filter((i) => (i.event_id === event.item.event_id)).length > 0);

    return (
      <View style={styles.itemStyle}>
        <EventItem
          event={event.item}
          onPress={() => { onClickItem(event) }}
          isFavorite={isFavorite}
          toggleFavorite={(event) => {
            if (onFavoriteChange) onFavoriteChange(event);
          }}
        />
      </View>
    )
  }

  renderItem(event) {
    return this.renderEvent(event);
  }

  render() {
    const {
      dataList,
      onScrollBottom,
    } = this.props;

    const isLoading = this.state.isLoading || false;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={dataList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={(info) => {
            if (!isLoading && onScrollBottom) onScrollBottom()
          }}
        />
        {isLoading ? this.renderIndicator() : null}
      </View>
    );
  }
}