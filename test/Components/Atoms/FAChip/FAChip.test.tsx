/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { FAChip } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('FAChip', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FAChip testID="chip-example" />
     )
     expect(container).toMatchSnapshot()
   })
 })
 