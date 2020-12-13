import { render, screen } from '@testing-library/react';
import Button from './Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom'


describe("Button", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Button />, div)
    })
 })

//  describe('Test Button component', () => {
//     it('Test click event', () => {
//       const mockCallBack = jest.fn();
  
//       const button = shallow((<Button onClick={mockCallBack}/>));
//       button.find('button').simulate('click');
//       expect(400);
//     });
//   });