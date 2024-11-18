import {
  useVideoPlayer,
  VideoView as ExpoVideoView,
  VideoPlayerStatus,
} from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { useInterval } from '@/hooks/useInterval';
import { ThemedButton } from './ThemedButton';
import { cssInterop } from 'nativewind';
import { useScreenDimensions } from '@/hooks/useScreenDimensions';

import '@/global.css';

const VideoView: any = cssInterop(ExpoVideoView, {
  className: 'style',
});

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function VideoTest() {
  const { orientation } = useScreenDimensions();

  const ref: any = useRef<typeof ExpoVideoView>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoStatus, setVideoStatus] = useState<VideoPlayerStatus>('idle');
  const [fractionComplete, setFractionComplete] = useState(0);

  const fractionCompleteFromPosition = (
    position: number | undefined,
    duration: number | undefined,
  ) => {
    return duration !== undefined ? (position ?? 0) / duration : 0;
  };

  const player = useVideoPlayer(videoSource, (player) => {
    player.addListener('statusChange', (payload) => {
      setVideoStatus(payload.status);
      console.log(`video status = ${payload.status}`);
    });
  });

  useEffect(() => {
    if (player.playing) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [player.playing]);

  useEffect(() => {
    if (videoStatus === 'readyToPlay') {
      // Autoplay on start
      //      player.play();
    }
  }, [videoStatus]);

  useInterval(() => {
    setFractionComplete(
      fractionCompleteFromPosition(player.currentTime, player.duration),
    );
  }, 1000);

  const wrapperClassName =
    (orientation === 'landscape' ? 'flex-row ' : '') +
    'flex-column justify-center items-center';
  const videoClassName =
    orientation === 'landscape'
      ? 'w-[50vw] h-[30vw] m-[5vw] bg-[--color-background]'
      : 'w-[90vw] h-[54vw] m-[5vw] bg-[--color-background]';
  return (
    <View className={wrapperClassName}>
      <View className={videoClassName}>
        {videoStatus === 'readyToPlay' || Platform.OS === 'android' ? (
          <VideoView
            ref={ref}
            className="w-full h-full"
            player={player}
            nativeControls
            contentFit="cover"
            showsTimecodes
            allowsFullscreen
            allowsPictureInPicture
            contentPosition={{ dx: 0, dy: 0 }}
          />
        ) : (
          <View className="w-full h-full" />
        )}
        <ProgressBar fractionComplete={fractionComplete} />
      </View>
      <View>
        <ThemedButton
          onPress={() => {
            player.currentTime = 0;
            setFractionComplete(
              fractionCompleteFromPosition(player.currentTime, player.duration),
            );
          }}
        >
          Rewind
        </ThemedButton>
        <ThemedButton
          onPress={() => {
            player.seekBy(-5);
            setFractionComplete(
              fractionCompleteFromPosition(player.currentTime, player.duration),
            );
          }}
        >
          Back 5 sec
        </ThemedButton>
        <ThemedButton
          onPress={() => {
            if (player.playing) {
              player.pause();
            } else {
              player.play();
            }
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </ThemedButton>
        <ThemedButton
          onPress={() => {
            player.seekBy(5);
            setFractionComplete(
              fractionCompleteFromPosition(player.currentTime, player.duration),
            );
          }}
        >
          Forward 5 sec
        </ThemedButton>
        <ThemedButton
          onPress={() => {
            ref.current.enterFullscreen();
          }}
        >
          Full screen
        </ThemedButton>
      </View>
    </View>
  );
}

const ProgressBar = (props: any) => {
  const progressBarStyles = {
    left: { flex: props?.fractionComplete || 0.0 },
    right: { flex: 1.0 - props?.fractionComplete || 1.0 },
  };
  const containerClassName = 'flex-row w-full h-[1vw]';
  const leftClassName = `rounded-r-[0.5vw] h-full bg-[--color-tint]`;
  const rightClassName = `h-full bg-[--color-background]`;
  return (
    <View className={containerClassName}>
      <View className={leftClassName} style={progressBarStyles.left} />
      <View className={rightClassName} style={progressBarStyles.right} />
    </View>
  );
};
