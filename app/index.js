import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Home from './Home';
import InviteVip from './InviteVip';

class Root extends Component {
	constructor(props) {
	  super(props);
	}

	renderScene = () => {
		const { router } = this.props;
		switch (router) {
			case 'PROPOSE_PLAN' : return ;
			case 'TIQIN_PLAN' : return ;
			case 'MODEL_PLAN' : return ;
			case 'SHOT_GOWN' : return ;
			case 'INVITE_VIP' : return <InviteVip />;
			case 'CAKE_PRESENT' : return ;
			case 'FIELD_PLAN' : return ;
			// case 'HOME': return <Home />;
			default: return <Home />;
			// default: return;
		}	
	}

  render() {
    return (
      <View style={{ flex: 1 }}>
      	{this.renderScene()}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const select = ({ routerStore }) => ({
	router: routerStore.router,
})


export default connect(select)(Root);