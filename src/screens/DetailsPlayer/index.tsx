import { useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

import { Background } from "../../components/Background";
import { CardStatsPlayer } from "../../components/CardStatsPlayer";
import { EditStats } from "./EditStats";
import { LineBackground } from "../../components/LineBackground";
import { OptionLine } from "../../components/OptionLine";
import { PlusOptions } from "./PlusOptions";
import { TouchBack } from "../../components/TouchBack";
import { Stars } from "../../components/Stars";

import theme from "../../theme";
import userImg from '../../assets/user.png'
import { styles } from "./styles";

export function DetailsPlayer() {
  const options: string[] = ['Editar Estatísticas', 'Mais Opções']
  const width = Dimensions.get('screen').width - 190
  const [option, setOption] = useState(options[0])

  return (
    <Background color={theme.colors.primary}>
      <View style={{ paddingLeft: 20, paddingTop: 20, }}>
        <TouchBack />
      </View>
      <View style={styles.content}>
        <View style={[styles.infoPlayer, { width }]}>
          <Text style={styles.namePlayer}>JAIME VARDY</Text>
          <Stars note={2.4} />
        </View>
        <Image style={styles.image} source={userImg} />
      </View>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <CardStatsPlayer />
          <OptionLine
            options={options}
            optionSelected={option}
            onSelected={setOption}
          />
          {option === 'Mais Opções' ? <PlusOptions /> : <EditStats />}
        </ScrollView>
      </View>
    </Background>
  )
}