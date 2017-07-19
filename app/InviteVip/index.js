import React, { Component } from 'react';

import {
 NavBar,
} from '@fugood/mybigday-ui-kit'; 
import { pxToDpW, pxToDpH } from '../../util/pxToDp';

import {
  StyleSheet,
  View,
} from 'react-native';

class InviteVip extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	title: '邀請貴賓',
	  };
	}

  render() {
  	const titleConfig = { 
  		title: this.state.title,
  		tintColor: '#fff', 
  		paddingTop: pxToDpH(20),
  	};

    return (
      <View style={{ flex: 1}}>
      	<NavBar
      		style={{ paddingTop: pxToDpH(40), height: pxToDpH(80) }}
      		title={titleConfig}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default InviteVip;