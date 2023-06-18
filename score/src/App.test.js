import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText('Рейтинг студентів');
    expect(titleElement).toBeInTheDocument();
  });

  test('updates student score', () => {
    render(<App />);

    const inputs = screen.getAllByTestId('score-input');
    const input = inputs[0]; 
    fireEvent.change(input, { target: { value: '80' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(input.value).toBe('80');
  });

  test('displays average score', () => {
    render(<App />);

    const averageScore = screen.getByText(/Середній бал:/);
    expect(averageScore).toBeInTheDocument();
  });
});
