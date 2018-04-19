import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class RandomNumber extends React.Component {
  state = {
    selectedNumbers : [0,4],
  }

static propTypes = {
  number : PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired
}
handlPress = () =>  {
  console.log(this.props.number);
}

  render() {
    return (
      <TouchableOpacity onPress={this.handlPress}>
        <Text style={[styles.random,this.props.isSelected && styles.selected]}>{this.props.number}</Text>

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

  selected : {
      opacity : 0.3,
  }


}
)

export default RandomNumber;
