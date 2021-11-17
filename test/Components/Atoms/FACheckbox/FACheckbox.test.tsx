/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { FACheckbox } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('FACheckbox', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FACheckbox testID="checkbox-example" />
     )
     expect(container).toMatchSnapshot()
   })
 })
 