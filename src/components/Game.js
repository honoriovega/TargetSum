import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber';

class Game extends React.Component {

  static propTypes = {
    randomNumberCount : PropTypes.number.isRequired,
  }

  state = {
    selectedIds : [],
  }

  isNumberSelected = (numberIndex) => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  }

  randomNumbers = Array.from({ length : this.props.randomNumberCount})
                          .map( () => 1 +  Math.floor(10 * Math.random()))

  target = this.randomNumbers.slice(0,this.props.randomNumberCount - 2)
           .reduce( (acc,curr) => acc + curr,0)

  selectNumber = (numberIndex) => {
    this.setState( (prevState) => {
      return {selectedIds : [...prevState.selectedIds,numberIndex]}
    });
  }

  gameStatus = () => {
    const sumSelected = this.state.selectedIds.reduce( (acc,curr) => {
      return acc + this.randomNumbers[curr]
    },0)
    console.log(sumSelected)
    if(sumSelected < this.target){
      return 'PLAYING';
    }
    if(sumSelected === this.target) {
      return 'WON';
    }
    else {
      return 'LOST';
    }

  }


  render() {

    // add up all the numbers in the slice
    const gameStatus = this.gameStatus();
    return (
        <View style={styles.container}>
          <Text style={[styles.target,styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>


          <View style={styles.randomContainer}>
          {this.randomNumbers.map( (randomNumber,index) =>

            <RandomNumber key={index}
              id={index}
              number={randomNumber}
              onPress={this.selectNumber}
              isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
            />

          )}

          </View>
          <Text>{this.gameStatus()}</Text>
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
  },
  STATUS_PLAYING : {
    backgroundColor: '#bbb'
  },
  STATUS_WON : {
    backgroundColor: 'green'
  },
  STATUS_LOST: {
    backgroundColor: 'red'
  }
}
)

export default Game;
