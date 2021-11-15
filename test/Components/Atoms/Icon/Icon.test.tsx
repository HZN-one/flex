/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { IconPegasus } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('IconPegasus', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <IconPegasus testID="icon-example"  iconName="add_circle"/>
     )
     expect(container).toMatchSnapshot()
   })
 
   it('should increment number on click', () => {
     let number = 1
     const { getByTestId } = render(
       <IconPegasus
         testID="icon-example"
         onClick={() => {
           number += 1
         }}
        iconName="add_circle"/>
     )
 
     fireEvent.click(getByTestId('icon-example'), new MouseEvent('click'))
 
     expect(number).toBe(2)
   })
 
   it('should render android icon by iconName property', () => {
     const { getByTestId } = render(
       <IconPegasus testID="icon-example" iconName="android"/>
     )
 
     expect(`${getByTestId('icon-example').innerHTML}`).toMatch(
      'android'
     )
   })
 })
 