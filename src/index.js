import React, { useState,useEffect} from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Dimensions, Alert} from 'react-native';
import {Button} from 'react-native-paper';

import { EventRegister } from 'react-native-event-listeners'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const dynamicColor = () => {

  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
  return ColorCode;
}

const TilePuzzle = () => {

  const [count, setCount] = useState(0);
  const [puzzleSequence, setpuzzleSequence] = useState([]);
  const [blankState, setBlankState] = useState({index:8,value:''});
  const [Refresh, setRefresh] = useState(0);
  const [gotSolved, setgotSolved] = useState(0);
 
  const solveThis = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 9 numbers to be solved.


function moveTile (tileID,tileContent) {
if (blankState.index == tileID || (blankState.index == 0 && (tileID != 1 && tileID != 3)) || (blankState.index == 2 && (tileID != 1 && tileID != 5)) || (blankState.index == 6 && (tileID != 3 && tileID != 7)) || (blankState.index == 8 && (tileID != 5 && tileID != 7)) || (blankState.index == 1 && (tileID != 0 && tileID != 4 && tileID != 2)) || (blankState.index == 3 && (tileID != 0 && tileID != 4 && tileID != 6)) || (blankState.index == 5 && (tileID != 2 && tileID != 4 && tileID != 8)) || (blankState.index == 7 && (tileID != 6 && tileID != 4 && tileID != 8)) || (blankState.index == 4 && (tileID != 1 && tileID != 3 && tileID != 5 && tileID != 7)) ){
  return ;
} // very ugly i know .. :(

let newSequence = [];
newSequence =  puzzleSequence;
newSequence[blankState.index] = tileContent;
setpuzzleSequence( newSequence); 
setBlankState({ index:tileID,value: 0});
let isSolved = 0;
newSequence.map((number,i) => {
if (number != i+1){
isSolved++
}

}

)
console.log('solved:' + isSolved);

if (isSolved ==1 ){
Alert.alert('Congratulations, you solved the puzzle!');
setgotSolved(1);
}

}

function shuffle(arr) {
  var i,j,temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

useEffect(() => {
if (Refresh==0)
{  
  setpuzzleSequence(shuffle(solveThis));
  setRefresh(1); // initialized
}
});

  return (
    <View style={styles.container}>
      <Button mode="text" style={styles.gameHeader} onPress={() => {
        // moveTile(i, number);

        Alert.alert(
          'New Game',
          'Would you like to leave current game and start new?',
          [

            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'Yes', onPress: () => setpuzzleSequence(shuffle(solveThis)) }
          ],
          { cancelable: false }
        );





      }

      }>Simple Tile Puzzle</Button>
      {puzzleSequence.map((number, i) => {
        if (i == blankState.index) {
          return <Text style={styles.puzzleBoxesHidden} index={i} onPress={() => moveTile(i, number)}></Text>
        }
        else {
          return <Text style={styles.puzzleBoxes} index={i} onPress={() => moveTile(i, number)}>{number}</Text>
        }


      }

      )}
      <Button mode="contained" style={styles.newGameBtn} onPress={() => {
        // moveTile(i, number);

        Alert.alert(
          'New Game',
          'Would you like to leave current game and start new?',
          [
          
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'Yes', onPress: () => setpuzzleSequence(shuffle(solveThis)) }
          ],
          { cancelable: false }
        );



 

      }

      }>New Game</Button>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignContent: 'center', 
    width: windowWidth-10, 
    marginLeft:5, marginRight:5, marginTop:0, alignSelf:'center', alignItems:'center', borderColor:'red',
    marginTop:-50
    
  },
  
  puzzleBoxes: {
    width: windowWidth * .30, height: windowHeight * .20, backgroundColor: dynamicColor(), margin:5,
    padding: 30,
    fontSize: 50,
 
    alignContent: 'center',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
    

  },

  puzzleBoxesHidden: {
    width: windowWidth * .30, height: windowHeight * .20,   margin: 5,
    padding: 40,
    fontSize: 50,
    backgroundColor:'grey',

    alignContent: 'center',
    textAlign: 'center'

  },
  
  newGameBtn: {
    width: '100%',
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    height:windowHeight*.10
  },
  
gameHeader:{   
   width: '100%',
    marginTop:-10,
    justifyContent: 'center',
    alignItems: 'center',
    height:windowHeight*.10
  }
  

})
export default TilePuzzle;
