import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
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

export interface StatsChampionshipRouteParams {
  idChampionship: string
}
type ParamList = {
  Stats: StatsChampionshipRouteParams
}

export function StatsChampionship() {
  const { idChampionship } = useRoute<RouteProp<ParamList, 'Stats'>>().params

  const [nameChampionship, setNameChampionship] = useState('')
  const [bestPlayer, setBestPlayer] = useState<PlayerWithStats>({ player: emptyPlayer, stats: emptyStats })
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
        setPlayers(sortList.filter((_, index) => index !== 0))
      }
    }
  }, [idChampionship])

  useEffect(() => {
    loadChampionship()
  }, [loadChampionship])

  return (
    <Background color={theme.colors.primary}>
      <View style={{ paddingLeft: 20, paddingTop: 20, }}>
        <TouchBackWithTitle title={nameChampionship} />
      </View>
      
      <View style={styles.content}>
        <View style={[styles.infoPlayer]}>
          <Text style={styles.namePlayer}>{ bestPlayer.player.name }</Text>
          <Stars note={bestPlayer.stats.sumStars} />
        </View>
        <Image style={styles.image} source={bestPlayerImg} />
      </View>
      <View style={{ padding: 30, paddingTop: 10, paddingBottom: 20, }}>
        <CardStats
          type="SECUNDARY"
          loading={false}
          listKeysValue={[
            { key: 'GOAL', value: bestPlayer.stats.goal },
            { key: 'ASSIST', value: bestPlayer.stats.assistence },
            { key: 'JOGOS', value: bestPlayer.stats.games },
          ]}
        />
      </View>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <Text style={styles.titleFlat}>Ranking dos jogadores</Text>
        <FlatList
          data={players}
          keyExtractor={item => item.player.id}
          renderItem={({item, index}) =>
            <CardStatsChampionship
              name={item.player.name}
              position={index + 2}
              goal={item.stats.goal}
              assistence={item.stats.assistence}
              games={item.stats.games}
              stars={item.stats.sumStars}
            />
          }
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        />
      </View>
    </Background>
  )
}