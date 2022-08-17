import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greeter from './Greeter';

describe('<Greeter />', () => {
  test('it should mount', () => {
    render(<Greeter />);
    
    const greeter = screen.getByTestId('Greeter');

    expect(greeter).toBeInTheDocument();
  });
});