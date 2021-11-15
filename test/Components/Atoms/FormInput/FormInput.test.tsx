/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'

 
 import { FormInputPegasus } from 'Components'
 
 import { render } from '@testing-library/react'
 
 describe('FormInputPegasus', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FormInputPegasus testID="input-example"  />
     )
     expect(container).toMatchSnapshot()
   })
   
 })
 