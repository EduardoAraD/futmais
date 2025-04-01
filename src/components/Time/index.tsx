import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { secundsToStringMinuteSecunds } from '../../utils/functionsTime'
import theme from '../../theme'
import { styles } from './styles'

export type StatusTime = 'to start' | 'started' | 'restart'
interface TimeProps {
  status: StatusTime
}

export function Time({ status }: TimeProps) {
  const duration = 60 * 7;
  const [timeStarted, setTimeStarted] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeExtra, setTimeExtra] = useState(0)
  const [startTime, setStartTime] = useState(false)

  function handleStartTime() {
    setStartTime(true)
    setTimeStarted(Math.floor(new Date().getTime() / 1000))
  }

  function handleRestart() {
    setStartTime(false)
    setCurrentTime(0)
  }

  const handleTimeExtra = useCallback((value: number) => {
    setTimeExtra(state => state + value)
  }, []);
  const handleResetTimeExtra = useCallback(() => {
    setTimeExtra(0)
  }, [])

  const updateTime = useCallback(() => {
    const now = Math.floor(new Date().getTime() / 1000)
    const currentSecund = now - timeStarted
    setCurrentTime(currentSecund)
  }, [timeStarted])

  const timeFinal = useMemo(() => {
    return duration + timeExtra
  }, [timeExtra])

  useEffect(() => {
    if (status === 'started') {
      handleStartTime()
    } else if (status === 'restart') {
      handleRestart()
    }
  }, [status])

  useEffect(() => {
    if (!startTime) {
      return
    }
    if (currentTime >= timeFinal) {
      return
    }
    const timeOut = setInterval(() => {
      updateTime()
    }, 1000)

    return () => clearInterval(timeOut)
  }, [currentTime, timeFinal, startTime, updateTime])

  const width = useMemo(() => {
    const porcentage = (currentTime / timeFinal) * 100
    return `${porcentage.toFixed(1)}%`
  }, [currentTime])

  return (
    <View style={styles.container}>
      <View style={styles.timeView}>
        <Text style={styles.timer}>{secundsToStringMinuteSecunds(currentTime)}</Text>
        { timeExtra > 0 && (
          <Text style={styles.timeExtra}>+ {secundsToStringMinuteSecunds(timeExtra)}</Text>
        )}
      </View>
      <View style={styles.bar}>
        <Text style={styles.textBar}>{secundsToStringMinuteSecunds(timeFinal)}</Text>
        <View style={[styles.barGreen, { width }]} />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Tempo Extra: </Text>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={0.8}
          onPress={() => handleTimeExtra(5)}>
          <Text style={styles.textBar}>+ 5 s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={0.8}
          onPress={() => handleTimeExtra(10)}>
          <Text style={styles.textBar}>+ 10 s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={0.8}
          onPress={() => handleTimeExtra(30)}>
          <Text style={styles.textBar}>+ 30 s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={0.8}
          onPress={() => handleTimeExtra(60)}>
          <Text style={styles.textBar}>+ 1 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          activeOpacity={0.8}
          onPress={handleResetTimeExtra}>
          <MaterialCommunityIcons name='restart' size={16} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
