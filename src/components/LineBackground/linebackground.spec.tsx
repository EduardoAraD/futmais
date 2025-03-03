import { render, screen } from '@testing-library/react-native'
import { LineBackground } from '.'

describe('Component: LineBackground', () => {
  it('should be render correctly', () => {
    render(<LineBackground color='#343434'/>)

    expect(screen).toBeTruthy()
  })
})
