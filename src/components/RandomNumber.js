import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class RandomNumber extends React.Component {


static propTypes = {
  number : PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}
handlPress = () =>  {
  // console.log(this.props.number);
  this.props.onPress(this.props.id)
}

  render() {
    return (
      <TouchableOpacity onPress={this.handlPress}>
        <Text style={[styles.random,this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>

      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({

  random :  {
    backgroundColor: '#999',
    width:100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',

  },

  disabled : {
      opacity : 0.3,
  }


}
)

export default RandomNumber;
