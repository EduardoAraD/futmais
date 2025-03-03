import { render, screen } from '@testing-library/react-native'
import { Background } from '.'
import { Text } from 'react-native'

describe('Component: Background', () => {
  it('should be render correctly', () => {
    render(<Background color='#343434'>
      <Text>Welcome!</Text>
    </Background>)

    expect(screen).toBeTruthy()
    expect(screen.getByText('Welcome!')).toBeTruthy();
  })
})
