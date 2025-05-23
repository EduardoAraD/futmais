import { useCallback, useMemo, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { PlayerRoutesProps } from "../../routes/routesStack/player.routes";

import { emptyPlayer, Player } from "../../model/players";
import { emptyStatsComplete, StatsComplete } from "../../model/stats";
import { Background } from "../../components/Background";
import { CardStats } from "../../components/CardStats";
import { EditStats } from "./EditStats";
import { LineBackground } from "../../components/LineBackground";
import { Loading } from "../../components/Loading";
import { OptionLine } from "../../components/OptionLine";
import { PlusOptions } from "./PlusOptions";
import { TouchBack } from "../../components/TouchBack";
import { Stars } from "../../components/Stars";

import { getDetailsPlayerService } from "../../services/players";
import theme from "../../theme";
import userImg from '../../assets/user.png'
import { styles } from "./styles";

export interface DetailsPlayerRouteParams {
  idPlayer: string
}

type ParamList = {
  Details: DetailsPlayerRouteParams
}

export function DetailsPlayer() {
  const { idPlayer } = useRoute<RouteProp<ParamList, 'Details'>>().params
  const { goBack, navigate } = useNavigation<PlayerRoutesProps>()
  
  const [player, setPlayer] = useState<Player>(emptyPlayer)
  const [stats, setStats] = useState<StatsComplete>(emptyStatsComplete)
  const [loading, setLoading] = useState(true)
  
  const options: string[] = ['Estatísticas', 'Mais Opções']
  const width = Dimensions.get('screen').width - 130
  const [option, setOption] = useState(options[0])

  const loadDetailsPlayer = useCallback(async () => {
    setLoading(true)
    const detailsPlayer = await getDetailsPlayerService({ idPlayer })
    if(detailsPlayer !== null) {
      setPlayer(detailsPlayer.player)
      setStats(detailsPlayer.stats)
    } else {
      goBack()
    }
    setLoading(false)
  }, [idPlayer, getDetailsPlayerService])

  const handleGoEditPlayer = useCallback(async () => {
    navigate('createPlayer', {
      newPlayer: false,
      player,
    })
  }, [player])

  const handleGoEditStatsPlayer = useCallback(async () => {
    navigate('editStats', {
      namePlayer: player.name,
      idPlayer: player.id,
      stars: player.stars,
    })
  }, [player.name, player.id])

  useFocusEffect(
    useCallback(() => {
      loadDetailsPlayer()
    }, [loadDetailsPlayer]),
  )

  const backgroundColor = useMemo(() => {
    return player.disabled ? theme.colors.gray[700] : theme.colors.primary
  }, [player.disabled])

  const avarageStars = useMemo(() => {
    if(stats.numberChampionship === 0) {
      return player.stars
    }

    return stats.sumStars / stats.numberChampionship
  }, [stats.sumStars, stats.numberChampionship, player.stars])

  return (
    <Background color={backgroundColor}>
      <View style={{ paddingLeft: 20, paddingTop: 20, }}>
        <TouchBack />
      </View>
      <View style={styles.content}>
        <View style={[styles.infoPlayer, { width }]}>
          <Text style={styles.namePlayer}>{ player.name }</Text>
          <Stars note={ player.stars } />
        </View>
        {loading ? (
          <View style={styles.image}>
            <Loading />
          </View>
        ) : (
          <Image style={styles.image} source={userImg} />
        )}
      </View>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <CardStats
            loading={loading}
            listKeysValue={[
              { key: 'GOLS', value: stats.goal },
              { key: 'ASSIST', value: stats.assistence },
              { key: 'MVP', value: stats.mvp },
              { key: 'PP', value: stats.pp },
            ]}
          />
          <OptionLine
            options={options}
            optionSelected={option}
            onSelected={setOption}
          />
          {option === 'Mais Opções' ?
            <PlusOptions
              idPlayer={player.id}
              disabled={player.disabled}
              onEditPlayer={handleGoEditPlayer}
              onEditStats={handleGoEditStatsPlayer}
            /> :
            <EditStats
              goal={stats.goal}
              assistence={stats.assistence}
              numberChampionship={stats.numberChampionship}
              sumStars={stats.sumStars}
              avarageStars={avarageStars}
              mvp={stats.mvp}
              pp={stats.pp}
              games={stats.games}
              ownGoal={stats.ownGoal}
            />
          }
        </ScrollView>
      </View>
    </Background>
  )
}