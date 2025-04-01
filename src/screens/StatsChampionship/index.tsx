import { useCallback, useEffect, useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { emptyPlayer, PlayerWithStats } from "../../model/players";
import { emptyStats } from "../../model/stats";
import { Background } from "../../components/Background";
import { CardStats } from "../../components/CardStats";
import { CardStatsChampionship } from "../../components/CardStatsChampionship";
import { LineBackground } from "../../components/LineBackground";
import { Stars } from "../../components/Stars";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import { getChampionshipCompleteServices } from "../../services/championship";
import theme from "../../theme";
import { sortListPlayerWithStats } from "../../utils/sortListPlayersWithStats";
import { styles } from "./styles";
import bestPlayerImg from '../../assets/best-player.png'
import worstPlayerImg from '../../assets/soccer-ball-emoji.png'

export interface StatsChampionshipRouteParams {
  idChampionship: string
}
type ParamList = {
  Stats: StatsChampionshipRouteParams
}

export function StatsChampionship() {
  const { idChampionship } = useRoute<RouteProp<ParamList, 'Stats'>>().params

  const [nameChampionship, setNameChampionship] = useState('')
  const [showBestOrWorst, setShowBestOrWorst] = useState<'best' | 'worst'>('best')
  const [bestPlayer, setBestPlayer] = useState<PlayerWithStats>({ player: emptyPlayer, stats: emptyStats })
  const [worstPlayer, setWorstPlayer] = useState<PlayerWithStats>({ player: emptyPlayer, stats: emptyStats })
  const [players, setPlayers] = useState<PlayerWithStats[]>([])

  const loadChampionship = useCallback(async () => {
    const championshipResponse = await getChampionshipCompleteServices({ idChampionship })
    if(championshipResponse !== undefined) {
      setNameChampionship(`Racha - ${new Date(championshipResponse.date).toLocaleDateString()}`)
      const list: PlayerWithStats[] = []
      championshipResponse.playersClub.map(player => {
        const findStats = championshipResponse.stats.find(item => item.idPlayer === player.id)
        if(findStats !== undefined) {
          list.push({ player, stats: findStats })
        } else {
          list.push({ player, stats: emptyStats })
        }
      })

      const sortList = sortListPlayerWithStats(list)
      if(sortList.length > 0) {
        setBestPlayer(sortList[0])
        const playerWorst = sortList[sortList.length - 1]
        if(playerWorst.stats.pp > 0){
          setWorstPlayer(sortList[sortList.length -1 ])
        }
        setPlayers(sortList.filter((_, index) => index !== 0))
      }
    }
  }, [idChampionship])

  const handleTouchBestOrWorst = useCallback(() => {
    setShowBestOrWorst(state => state !== 'best' ? 'best' : 'worst')
  }, [])

  useEffect(() => {
    loadChampionship()
  }, [loadChampionship])

  const playerHigh = useMemo(() => {
    return showBestOrWorst === 'best' ? bestPlayer : worstPlayer
  }, [showBestOrWorst, bestPlayer, worstPlayer])

  const image = useMemo(() => {
    return showBestOrWorst === 'best' ? bestPlayerImg : worstPlayerImg
  }, [showBestOrWorst])

  const enabledTouchWithOutWorstPlayer = useMemo(() => {
    return worstPlayer.stats.pp > 0
  }, [worstPlayer.stats.pp])

  return (
    <Background color={theme.colors.primary}>
      <View style={{ paddingLeft: 20, paddingTop: 20, }}>
        <TouchBackWithTitle title={nameChampionship} />
      </View>
      
      <View style={styles.content}>
        <View style={[styles.infoPlayer]}>
          <Text style={styles.namePlayer}>{ playerHigh.player.name }</Text>
          <Stars note={playerHigh.stats.sumStars} />
        </View>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.viewCard}>
        <CardStats
          type="SECUNDARY"
          loading={false}
          listKeysValue={[
            { key: 'GOAL', value: playerHigh.stats.goal },
            { key: 'ASSIST', value: playerHigh.stats.assistence },
            { key: 'CONTRA', value: playerHigh.stats.ownGoal },
            { key: 'JOGOS', value: playerHigh.stats.games },
          ]}
        />
        {enabledTouchWithOutWorstPlayer && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchReverse}
            onPress={handleTouchBestOrWorst}
          >
            <Image source={image} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <Text style={styles.titleFlat}>Ranking dos jogadores</Text>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ gap: 6 }}>
            {players.map((item, index) => (
              <CardStatsChampionship
                key={item.player.id}
                name={item.player.name}
                position={index + 2}
                goal={item.stats.goal}
                assistence={item.stats.assistence}
                games={item.stats.games}
                stars={item.stats.sumStars}
                ownGoal={item.stats.ownGoal}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Background>
  )
}