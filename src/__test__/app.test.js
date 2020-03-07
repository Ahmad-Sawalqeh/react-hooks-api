/* eslint-disable no-unused-vars */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), });

import Enzyme, {shallow , mount} from 'enzyme';
import renderer from 'react-test-renderer';

import ToDoList from '../components/to-do-list/toDoList.js';


describe('<ToDoList />', () => {

  it('already exist in our app' , () => {
    let test = shallow(<ToDoList/>);
    expect(test.find('button').exists()).toBeTruthy();
  });

  it('Assert DOM stability via snapshot', ()=> {
    let test = renderer.create(<ToDoList />);
    expect(test).toMatchSnapshot();
  });

});
