import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Exercício 1', () => {
  test('Verifique se o botão com o texto "Adicionar" está sendo renderizado', () => {
    render(<App />);
    const button = screen.getByText(/Adicionar/i);
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
  });
  test('Verifique o comportamento de adicionar uma tarefa', () => {
    render(<App />);
    const button = screen.getByText(/Adicionar/i);
    const input = screen.getByLabelText(/Tarefa/i);
    userEvent.type(input, 'Estudar');
    expect(screen.queryByText('Estudar')).not.toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('Estudar')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});
