import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

import { Actions } from 'react-native-router-flux';


const videoList = [
        {id: 1, title: 'Video 1', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
        {id: 2, title: 'Video 2', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
        {id: 3, title: 'Video 3', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
        {id: 4, title: 'Video 4', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
      ]

export default class Tab1 extends React.Component {



    render() {
        return (
            <View style={styles.container}>
                {videoList.map((video, index) =>{
                  return (
                    <TouchableHighlight style={styles.videoItem}
                      underlayColor="transparent"
                      key={video.title}
                      onPress={() =>  Actions.tab2(
                        {title: video.title,
                        videoTitle: video.title, 
                        videoUrl: video.url,})}
                    >
                      <Text style={styles.videoItemText}> {video.title} </Text>
                    </TouchableHighlight>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    videoItem: {
      flex: 1,
      backgroundColor: '#292626',
      borderBottomWidth: 2,
      borderBottomColor: '#e30000',
      alignItems: 'center',
      justifyContent: 'center'

    },
    videoItemText: {
      fontSize: 30,
      color: '#e30000',
    }
});