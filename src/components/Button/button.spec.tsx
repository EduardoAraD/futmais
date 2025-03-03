import { fireEvent, render, screen } from '@testing-library/react-native'
import { Button } from '.'

describe('Component: Button', () => {
  it('should be render correctly', () => {
    const onPress = jest.fn()

    render(
      <Button onPress={onPress}>
        <Button.Title>Continue</Button.Title>
      </Button>
    )

    expect(screen.getByText('Continue')).toBeTruthy();

    const touch = screen.getByTestId('touch')
    fireEvent.press(touch)

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
