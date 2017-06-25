import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
} from 'react-native';

import IconText from '../IconText';
import FavoriteButton from '../FavoriteButton';

import * as R from '../../consts/R';
import styles from './style';

const TextWeekday = [
	'日', '月', '火', '水', '木', '金', '土',
];
const TEXT_MAX_LENGTH = 24;

export default class EventItem extends Component {
	constructor(props) {
		super(props);

		this.displayDatetime = this.displayDatetime.bind(this);
		this.displayText = this.displayText.bind(this);
	}

	displayText(text) {
		if (!text) {
			return '未設定';
		}

		if (text.length >= TEXT_MAX_LENGTH) {
			return `${text.substring(0, TEXT_MAX_LENGTH)}...`;
		}

		return text;
	}

	displayDatetime(dateText) {
		const date = new Date(dateText);

		return `${date.getFullYear()}年` +
			`${date.getMonth() + 1}月` +
			`${date.getDate()}日(${TextWeekday[date.getDay()]}) ` +
			`${date.getHours()}:` +
			`0${date.getMinutes()}`.slice(-2);
	}

	render() {
		let {
			title,
			owner_nickname,
			accepted,
			limit,
			place,
			started_at,
		} = this.props.event;
		const catchText = this.props.event.catch;

		if (limit == null || limit == 0) {
			limit = '-';
			accepted = '-';
		}

		return (
			<TouchableOpacity
				style={styles.container}
				onPress={this.props.onPress}>
				<IconText
					style={{ fontSize: 16 }}
					iconSrc={R.ICON_EVENT_TITLE}
					text={this.displayText(title)} />
				<IconText
					iconSrc={R.ICON_EVENT_CATCH}
					text={this.displayText(catchText)} />
				<View style={styles.horizontalLayout}>
					<IconText
						iconSrc={R.ICON_EVENT_OWNER}
						text={this.displayText(owner_nickname)} />
					<IconText
						iconSrc={R.ICON_EVENT_GROUP}
						text={`${accepted}人/${limit}人`} />
				</View>
				<IconText
					iconSrc={R.ICON_EVENT_LOCATION}
					text={this.displayText(place)} />
				<IconText
					iconSrc={R.ICON_EVENT_CLOCK}
					text={this.displayDatetime(started_at)} />
				<View
					style={styles.favoriteButton}>
					<FavoriteButton
						onFavoriteChange={(isFavorite) => { this.props.onFavoriteChange(isFavorite) }}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}