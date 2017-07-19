import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { pxToDpW } from '../../util/pxToDp';
import { changeRouter } from '../../actions/router';
import { connect } from 'react-redux';

const list = [
  {
    text: '求婚規劃',
    router: 'PROPOSE_PLAN',
  },
  {
    text: '提親規劃',
    router: 'TIQIN_PLAN',
  },
  {
    text: '造型規劃',
    router: 'MODEL_PLAN',
  },
  {
    text: '拍攝婚紗',
    router: 'SHOT_GOWN',
  },
  {
    text: '邀請貴賓',
    router: 'INVITE_VIP',
  },
  {
    text: '喜餅回禮',
    router: 'CAKE_PRESENT',
  },
  {
    text: '場地準備',
    router: 'FIELD_PLAN',
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
            onPress={() => this.props.onChangeRouter(item.router)}
          >
            <Text style={{ color: '#FFF', fontSize: pxToDpW(40), }}>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onChangeRouter: (router) => dispatch(changeRouter(router)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);