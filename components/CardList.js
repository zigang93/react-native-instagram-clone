import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

class CardList extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {  };

  renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      image={{
        uri: getImageFromId(id),
      }}
    />
  );

  render() {

    const { items } = this.props;

    return (
      <FlatList
        data={items} 
        renderItem={this.renderItem} 
        keyExtractor={keyExtractor}
      />
    );
    
  }
}

export default CardList;