import React from 'react'
import { WebView } from 'react-native-webview';

const VideoTutorialScreen = () => {
    return (
        <WebView
            source={{ uri: 'https://www.youtube.com/watch?v=UhcdOi7chjU' }}
        />
    )
}

export default VideoTutorialScreen
