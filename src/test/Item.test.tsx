import * as reduxHooks from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../store/actions/actions";

import Item from "../components/Item/Item";

const exampleElem = {
  id: 0,
  text: '',
  status: false,
  day: '01',
};

type DispatchType = (id: number, status: boolean) => void;

jest.mock('react-redux');

describe('Item', ()=> {
  it('should dispatch', ()=>{
    const dispatch: DispatchType = jest.fn();
    const mockClickCompleted = jest.spyOn(actions, 'completedItem');
    const mockRemoveItem = jest.spyOn(actions, 'removeItem');
        
    (reduxHooks.useDispatch as jest.Mock).mockReturnValue(dispatch);

    render(<Item elem={exampleElem}/>);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[exampleElem.id]);

    expect(dispatch).toBeCalledTimes(1);
    expect(mockClickCompleted).toHaveBeenCalledWith(exampleElem.id, !exampleElem.status);

    const removeBtn = screen.getAllByRole('button');
    fireEvent.click(removeBtn[exampleElem.id]);

    expect(dispatch).toBeCalledTimes(2);
    expect(mockRemoveItem).toHaveBeenCalledWith(exampleElem.id);
  });

});