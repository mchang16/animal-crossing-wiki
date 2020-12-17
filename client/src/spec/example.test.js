import "jasmine";
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from "../Components/TestComponent.js";

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestComponent />, div);
    const h1 = div.querySelector('h1');
    expect(h1.textContent).toBe("Hello World!");
  });

it("contains data when created", () => {
    const component = new TestComponent();
    expect(component.data.length).not.toBe(0);
})

it("returns true when searching for an item that exists", () => {
    const fakeDb = jasmine.createSpyObj(['getData']);
    fakeDb.getData.and.returnValue(['eggs']);
    const component = new TestComponent(fakeDb);
    expect(component.searchData('eggs')).toBe(true);
})