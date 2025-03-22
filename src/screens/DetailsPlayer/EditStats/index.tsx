import { View } from "react-native";

import { Stats } from "../../../model/stats";
import { LineStats } from "../../../components/LineStats";

import { styles } from "./styles";

interface Props extends Stats {
  numberChampionship: number
  avarageStars: number
}

export function EditStats({
  goal, assistence, avarageStars, mvp, pp, numberChampionship, games
}: Props) {
  return (
    <View style={styles.container}>
      <LineStats name="Gols" value={goal} />
      <LineStats name="Assistências" value={assistence} />
      <LineStats name="Melhor do Racha (MVP)" value={mvp} />
      <LineStats name="Perna de Pau (PP)" value={pp} />
      <LineStats name="Jogos" value={games} />
      <LineStats name="Rachas presentes" value={numberChampionship} />
      <LineStats name="Nota Média" value={0} star={avarageStars} />
    </View>
  )
}