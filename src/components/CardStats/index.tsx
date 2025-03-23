import { Text, View } from "react-native";

import { LineBackground } from "../LineBackground";
import { Loading } from "../Loading";

import { styles } from "./styles";
import theme from "../../theme";

interface Props {
  loading: boolean
  type?: 'PRIMARY' | 'SECUNDARY',
  listKeysValue: { key: string, value: number }[]
}

export function CardStats({
  loading, type = 'PRIMARY', listKeysValue
}: Props) {
  return (
    <View style={[
      styles.container,
      type === 'SECUNDARY' && styles.secundary,
    ]}>
      <LineBackground color={type === 'SECUNDARY' ? theme.colors.gold : theme.colors.primary} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {listKeysValue.map(item => (
            <View style={styles.content} key={item.key}>
              <Text style={styles.title}>{ item.value }</Text>
              <Text style={styles.subTitle}>{ item.key }</Text>
            </View>
          ))}
        </>
      )}
    </View>
  )
}