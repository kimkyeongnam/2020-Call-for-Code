import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';


export default function NewsInfoScreen({ route, navigation }) {
  const title = route.params.title;
  const subtitle = route.params.subtitle;
  return (
    <View>
         <View  style={styles.titleDiv}>
            <Text style={styles.titleText}>{JSON.stringify(title)}</Text>
         </View>
      <View style={styles.titleDiv}>
        <Text>{JSON.stringify(subtitle)} </Text>
      </View>
      <View style={styles.titleDiv}>
        <Text>Like </Text>
        <Text>Dislike </Text>
      </View>
      <Button onPress={() => navigation.goBack()} title={"Back"} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  titleDiv: {
    margin : 5,
    borderWidth: 1,    
  },
  titleText:{
    fontSize : 40,
    marginLeft:10,
  }
});