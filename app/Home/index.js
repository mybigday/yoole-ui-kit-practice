import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import { pxToDpW, pxToDpH } from '../../util/pxToDp';
import {
 NavBar,
 SideMenu,
} from '@fugood/mybigday-ui-kit';
import ContentList from './ContentList';

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	leftSideMenu: false,
	  	rightSideMenu: false,
	  };
	}

	showLeftSideMenu = () => {
		this.setState({
			leftSideMenu: true
		});
	}

	hideLeftSideMenu = () => {
		this.setState({
			leftSideMenu: false,
		});
	}

  render() {
  	const { leftSideMenu, rightSideMenu } = this.state;

    return (
    	<View style={{ flex: 1 }}>
    		<NavBar
    			style={{ height: pxToDpH(40), }}
    		/>
  			<SideMenu 
  				position='left' 
  				show={leftSideMenu}  
  				style={{
								    flex: 1,
								    justifyContent: 'center',
								    alignItems: 'center',
								    backgroundColor: '#F5FCFF',
								  }}
  				content={<ContentList />}
  				onControlBtnPress={this.hideLeftSideMenu}
  			>
    			<View style={{ flexDirection: 'row', }}>
    				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
				      <TouchableHighlight
				      	onPress={() => this.showLeftSideMenu()}>
				      	<View 
				      		style={{ height: pxToDpW(20), width: pxToDpW(20),	 borderRadius: 10, backgroundColor: '#e89792'	, }}
				      	/>
				      </TouchableHighlight>
    				</View>
    				<View style={{ flex: 2, alignItems: 'center' }}>
    					<Text style={{ fontSize: pxToDpW(40) }}>
				        MYBIGDAY
				      </Text>
				      <View style={{  flexDirection: 'row', alignItems: 'flex-end'}}>
				      	<Text style={{ flex: 2 }}></Text>
				      	<Text style={styles.text}>我</Text>
				      	<Text style={styles.text}>的</Text>
				      	<Text style={styles.text}>大</Text>
				      	<Text style={styles.text}>日</Text>
				      	<Text style={styles.text}>子</Text>
				      	<Text style={{ flex: 2 }}></Text>
				      </View>
    				</View>
    				<View style={{ flex: 1 }}></View>
    			</View>
  			</SideMenu>    		
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	text: { 
		fontSize: pxToDpW(20),
		flex: 1,
	},
});


export default Home;

		
