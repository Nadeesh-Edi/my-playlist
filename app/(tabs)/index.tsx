import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native-paper';
import { PlayList } from '@/interfaces';
import PlaylistCard from '@/components/ui/PlaylistCard';

export default function HomeScreen() {
  const playlists : Array<PlayList> = [
    {
      title: "PlayList 1",
      id: "1"
    },
    {
      title: "PlayList 2",
      id: "2"
    },
    {
      title: "PlayList 3",
      id: "3"
    },
    {
      title: "PlayList 4",
      id: "4"
    }
  ]

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView>
        {playlists.map((item, index) => {
          return (
            <PlaylistCard key={index} title={item.title} id={item.id} />
          )
        })}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
