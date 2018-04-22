import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber';
class Game extends React.Component {

  static propTypes = {
    randomNumberCount : PropTypes.number.isRequired,

  }

  state = {
    selectedNumbers : [],
  }

  isNumberSelected = (numberIndex) => {
    return this.state.selectedNumbers.indexOf(numberIndex) >= 0;
  }


  randomNumbers = Array.from({ length : this.props.randomNumberCount})
                          .map( () => 1 +  Math.floor(10 * Math.random()))

  target = this.randomNumbers.slice(0,this.props.randomNumberCount - 2)

  // this.props.randomNumberCount

  selectNumber = (numberIndex) => {
    this.setState( (prevState) => {
      return {selectedNumbers : [...prevState.selectedNumbers,numberIndex]}
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>


          <View style={styles.randomContainer}>
          {this.randomNumbers.map( (randomNumber,index) =>

            <RandomNumber key={index}
              id={index}
              number={randomNumber}
              onPress={this.selectNumber}
              isDisabled={this.isNumberSelected(index)}
            />
            // <Text style={styles.random} key={index}>{randomNumber}</Text>

          )}

          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#ddd',
    flex : 1,
    paddingTop: 30,
  },

  randomContainer: {
    flex : 1,
    flexDirection: 'row',
    flexWrap : 'wrap',
    justifyContent : 'space-around',
  },

  random :  {
    backgroundColor: '#999',
    width:100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center'
  },

  target : {
    fontSize: 50,
    backgroundColor: '#bbb',
    marginHorizontal: 50,
    textAlign: 'center'
  }
}
)

export default Game;
