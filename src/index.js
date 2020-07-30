import React, { useState,useEffect} from 'react';
import { Text, View, TouchableWithoutFeedback, Button, StyleSheet, Dimensions, Alert} from 'react-native';

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
  const [moveDone, setmoveDone] = useState(0);
 
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
Alert.alert('solved!!');
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
    // Update the document title using the browser API

    if (moveDone==0)
  {  
    setpuzzleSequence(shuffle(solveThis));
    setmoveDone(1);
  }
  });




 

  return (
    <View style={styles.container}>
 
      {puzzleSequence.map((number, i) => {

        if (i == blankState.index) {
          return <Text style={styles.puzzleBoxesHidden} index={i} onPress={() => moveTile(i, number)}></Text>
        }
        else {
          return <Text style={styles.puzzleBoxes} index={i} onPress={() => moveTile(i, number)}>{number}</Text>
        }


      }

      )}
 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent:'center'
    
  },
  
  puzzleBoxes: {
    width: windowWidth * .30, height: windowHeight * .30, backgroundColor: dynamicColor(), margin:5,
    padding: 40,
    fontSize: 50,
 
    alignContent: 'center',
    textAlign: 'center'

  },

  puzzleBoxesHidden: {
    width: windowWidth * .30, height: windowHeight * .30,   margin: 5,
    padding: 40,
    fontSize: 50,

    alignContent: 'center',
    textAlign: 'center'

  },
  
  puzzleText: {
 


  },
  

})
export default TilePuzzle;
