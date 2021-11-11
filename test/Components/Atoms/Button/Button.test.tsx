/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import '@testing-library/jest-dom'

import { ButtonPegasus } from '../../../../src/Components'

import { fireEvent, render } from '@testing-library/react'

describe('ButtonPegasus', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ButtonPegasus testID="button-example">Test</ButtonPegasus>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render with children prop', () => {
    const { getByText } = render(
      <ButtonPegasus testID="button-example">hey</ButtonPegasus>
    )

    expect(getByText('hey')).toBeTruthy()
  })

  it('should increment number on click', () => {
    let number = 1
    const { getByTestId } = render(
      <ButtonPegasus
        testID="button-example"
        onClick={() => {
          number += 1
        }}
      >
        ButtonPegasus
      </ButtonPegasus>
    )

    fireEvent.click(getByTestId('button-example'), new MouseEvent('click'))

    expect(number).toBe(2)
  })

  it('should render gradient blue button by gradientColor property', () => {
    const { getByTestId } = render(
      <ButtonPegasus testID="button-example" gradientColor="blue">
        ButtonPegasus
      </ButtonPegasus>
    )

    expect(getByTestId('button-example')).toHaveStyle(
      'background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    )
  })

  it('should render gradient red button by gradientColor property', () => {
    const { getByTestId } = render(
      <ButtonPegasus testID="button-example" gradientColor="red">
        ButtonPegasus
      </ButtonPegasus>
    )

    expect(getByTestId('button-example')).toHaveStyle(
      'background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    )
  })
})
