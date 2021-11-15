/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'

 
 import { TextFieldPegasus } from 'Components'
 
 import { render } from '@testing-library/react'
 
 describe('TextFieldPegasus', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <TextFieldPegasus testID="input-example"  />
     )
     expect(container).toMatchSnapshot()
   })
   
 })
 