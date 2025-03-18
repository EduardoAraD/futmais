import { View } from "react-native";

import { Stats } from "../../../model/stats";
import { LineStats } from "../../../components/LineStats";

import { styles } from "./styles";

interface Props extends Stats {
  numberChampionship: number
  avarageStars: number
}

export function EditStats({
  goal, assistence, avarageStars, mvp, pp, numberChampionship
}: Props) {
  return (
    <View style={styles.container}>
      <LineStats name="GOLS" value={goal} />
      <LineStats name="Assistências" value={assistence} />
      <LineStats name="Melhor do Racha (MVP)" value={mvp} />
      <LineStats name="Perna de Pau (PP)" value={pp} />
      <LineStats name="Rachas presentes" value={numberChampionship} />
      <LineStats name="Nota Média" value="2" star={avarageStars} />
    </View>
  )
}