/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'

 
 import { FMFormTextField } from 'Components'
 
 import { render } from '@testing-library/react'
 
 describe('FMFormTextField', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FMFormTextField testID="input-example"  />
     )
     expect(container).toMatchSnapshot()
   })
   
 })
 