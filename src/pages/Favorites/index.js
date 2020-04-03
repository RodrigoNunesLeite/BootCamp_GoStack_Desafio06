import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

console.tron.log('nunes');
export default class Favorites extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').name,
  });

  // validacao
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    console.tron.log('nunes');

    const item = navigation.getParam('item');

    return <WebView source={{ uri: `${item.owner.html_url}` }} />;
  }
}
