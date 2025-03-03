import { render, screen } from '@testing-library/react-native'
import { Loading } from '.'

describe('Component: Loading', () => {
  it('should be render correctly', () => {
    render(<Loading />)

    expect(screen).toBeTruthy()
  })
})
