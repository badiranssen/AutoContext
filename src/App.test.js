// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoContext title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoContext/i);
    expect(titleElement).toBeInTheDocument();
});
