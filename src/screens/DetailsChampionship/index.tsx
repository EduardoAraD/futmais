import { useState } from "react";

import { Background } from "../../components/Background";
import { InformationDetailsChampionship } from "./Information";
import { OptionLine } from "../../components/OptionLine";
import { PlayersDetailsChampionship } from "./Players";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";

export function DetailsChampionship() {
  const options: string[] = ['Informações', 'Jogadores']
  const [option, setOption] = useState(options[0])
  
  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Racha 27/01" />
        <OptionLine
          options={options}
          optionSelected={option}
          onSelected={setOption}
        />
        {option === 'Jogadores' ? (
          <PlayersDetailsChampionship />
        ) : (
          <InformationDetailsChampionship />
        )}
      </Background.Padding>
    </Background>
  )
}
