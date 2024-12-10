import * as reduxHooks from "react-redux";
import ItemList from "../components/ItemList/ItemList";
import { render } from "@testing-library/react";

const exampleList = [
  {
    id: 0,
    text: '',
    status: false,
    day: '01',
  },
  {
    id: 1,
    text: '',
    status: true,
    day: '02',
  }
];

jest.mock('react-redux');

describe('ItemList', ()=> {
  it('should create ItemList list empty', ()=>{
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    const utils = render(<ItemList/>);

    expect(utils).toMatchSnapshot();
  });

  it('should create ItemList with exampleList', ()=>{
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(exampleList);
    const utils = render(<ItemList/>);

    expect(utils).toMatchSnapshot();
  });

});