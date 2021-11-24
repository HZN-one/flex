/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { FARadio } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('FARadio', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FARadio testID="radio-example" />
     )
     expect(container).toMatchSnapshot()
   })
 })
 