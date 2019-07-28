import React from 'react';
import {Text, View, StyleSheet, Dimensions } from 'react-native';
/*import Video from 'react-native-video';*/
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';


export default class Tab2 extends React.Component {
    state = {
        mute: false,
        shouldPlay: false,
    }
    
      handlePlayAndPause = () => {  
        this.setState((prevState) => ({
           shouldPlay: !prevState.shouldPlay  
        }));
      }
      
      handleVolume = () => {
        this.setState(prevState => ({
          mute: !prevState.mute,  
        }));
      }

    render() {
        const {videoTitle, videoUrl} = this.props;
        const { width } = Dimensions.get('window');
        return (
            <View style={styles.container}>
                {videoTitle == null ? <Text style={styles.noVideo}>Choose Video on Tab 1</Text>:
                <View style={styles.video}>
                   <Video
                      source={{ uri: videoUrl }}
                      shouldPlay={this.state.shouldPlay}
                      resizeMode="cover"
                      style={{ width, height: 300 }}
                      isMuted={this.state.mute}
                    />
                    <View style={styles.controlBar}>
                        <MaterialIcons 
                          name={this.state.mute ? "volume-mute" : "volume-up"}
                          size={45} 
                          color="white" 
                          onPress={this.handleVolume} 
                        />
                        <MaterialIcons 
                          name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                          size={45} 
                          color="white" 
                          onPress={this.handlePlayAndPause} 
                        />
                    </View>
                    <View>
                        <Text style={styles.videoTitleText}>
                            {videoTitle}
                        </Text>
                    </View>
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292626',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noVideo: {
        fontSize: 30,
        color: '#e30000'
    },
    video: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    controlBar: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    videoTitleText: {
        fontSize: 30,
        color: '#e30000'
    }
});