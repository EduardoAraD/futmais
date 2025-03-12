import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { PlayersStats } from "./PlayerStats";
import { Time, StatusTime } from "../../components/Time";
import { Score } from "../../components/Score";

import theme from "../../theme";
import { styles } from "./styles";

export function Game() {
  const [statusTime, setStatusTime] = useState<StatusTime>('to start')

  function handleStart() {
    setStatusTime('started')
  }

  function handleRestart() {
    setStatusTime('restart')
  }

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Score />
          <Time status={statusTime} />
          <View style={styles.contentStats}>
            <View style={styles.stats}>
              <PlayersStats />
              <PlayersStats />
              <PlayersStats />
              <PlayersStats />
            </View>
            <View style={styles.stats}>
              <PlayersStats />
              <PlayersStats />
              <PlayersStats />
              <PlayersStats />
            </View>
          </View>
          

          <View style={styles.container}>
            <View style={styles.action}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.touch, statusTime === 'started' && styles.touchDisabled]}
                disabled={statusTime === 'started'}
                onPress={handleStart}>
                <Feather name="play" style={{ marginRight: -5 }} size={36} color={theme.colors.white} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.touch}
                onPress={handleRestart}>
                <MaterialCommunityIcons name="restart" size={36} color={theme.colors.white} />
              </TouchableOpacity>
            </View>

            <Button style={{ height: 48, }}>
              <Button.Title>FINALIZAR JOGO</Button.Title>
            </Button>
          </View>
        </View>
      </Background.Padding>
    </Background>
  )
}