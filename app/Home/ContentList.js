import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import pxToDp from '../../util/pxToDp';

const list = [
  {
    text: '求婚規劃',
    onPress: () => {},
  },
  {
    text: '提親規劃',
    onPress: () => {},
  },
  {
    text: '造型規劃',
    onPress: () => {},
  },
  {
    text: '拍攝婚紗',
    onPress: () => {},
  },
  {
    text: '邀請貴賓',
    onPress: () => {},
  },
  {
    text: '喜餅回禮',
    onPress: () => {},
  },
  {
    text: '場地準備',
    onPress: () => {},
  },
];

class ContentList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {list.map((item, index) =>
          <TouchableOpacity 
            style={styles.listItem} 
            key={`item-${index}`}
            activeOpacity={0.6} 
            {...item.onPress}
          >
            <Text style={{ color: '#FFF', fontSize: pxToDp(40), }}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});


export default ContentList;