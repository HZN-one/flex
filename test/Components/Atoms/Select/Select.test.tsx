/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { SelectFlex } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('SelectFlex', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <SelectFlex testID="select-example" />
     )
     expect(container).toMatchSnapshot()
   })
 })
 