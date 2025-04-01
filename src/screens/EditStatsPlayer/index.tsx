import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { emptyStats, emptyStatsComplete, Stats, StatsComplete } from "../../model/stats";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { LineStats } from "../../components/LineStats";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import {
  getAllStatsInChampionshipToPlayerServices,
  getStatsExtraToPlayerServices,
  saveStatsExtraToPlayerServices
} from "../../services/stats";
import theme from "../../theme";
import { styles } from "./styles";

export interface EditStatsRouteParams {
  idPlayer: string
  namePlayer: string
  stars: number
}

type ParamList = {
  Details: EditStatsRouteParams
}

export function EditStatsPlayer() {
  const { goBack } = useNavigation()
  const { idPlayer, namePlayer, stars } = useRoute<RouteProp<ParamList, 'Details'>>().params

  const [stats, setStats] = useState<StatsComplete>(emptyStatsComplete)
  const [statsExtra, setStatsExtra] = useState<Stats>(emptyStats)
  const [loading, setLoading] = useState(true)
  const [goals, setGoals] = useState(0)
  const [assistences, setAssistences] = useState(0)

  const handleSaveStatsExtra = useCallback(async () => {
    setLoading(true)
    const newStatsExtra: Stats = {
      ...statsExtra,
      goal: goals,
      assistence: assistences,
    }

    await saveStatsExtraToPlayerServices({
      idPlayer,
      stats: newStatsExtra
    })
    setLoading(false)
    goBack()
  }, [statsExtra, goals, assistences, goBack])

  const loadDetailsPlayer = useCallback(async () => {
    setLoading(true)
    const stats = await getAllStatsInChampionshipToPlayerServices({ idPlayer })
    const statsExtra = await getStatsExtraToPlayerServices({ idPlayer })

    setStats(stats)
    setStatsExtra(statsExtra)
    setGoals(statsExtra.goal)
    setAssistences(statsExtra.assistence)
    setLoading(false)
  }, [idPlayer])

  useEffect(() => {
    loadDetailsPlayer()
  }, [loadDetailsPlayer])

  const avarageStars = useMemo(() => {
    if(stats.numberChampionship === 0) {
      return stars
    }

    return stats.sumStars / stats.numberChampionship
  }, [stats.sumStars, stats.numberChampionship, stars])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title={namePlayer} />
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Estatísticas Gerais</Text>
          <View style={styles.content}>
            <LineStats name="Gols" value={stats.goal + goals} />
            <LineStats name="Assistências" value={stats.assistence + assistences} />
            <LineStats name="Melhor do Racha (MVP)" value={stats.mvp} />
            <LineStats name="Perna de Pau (PP)" value={stats.pp} />
            <LineStats name="Nota Média" value={0} star={avarageStars} />
          </View>
          <Text style={styles.title}>Editar valores extras</Text>
          <View style={styles.content}>
            <LineStats
              name="Gols"
              value={goals}
              onChangeValue={setGoals}
            />
            <LineStats
              name="Assistências"
              value={assistences}
              onChangeValue={setAssistences}
            />
          </View>
          <Button style={{ marginTop: 30 }} isLoading={loading} onPress={handleSaveStatsExtra}>
            <Button.Title>Salvar</Button.Title>
          </Button>
        </ScrollView>
      </Background.Padding>
    </Background>
  )
}