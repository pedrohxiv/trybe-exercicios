import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Exercício 2', () => {
  test('Verifique o comportamento de adicionar várias tarefas', () => {
    const arrList = ['Estudar', 'Treinar', 'Dormir'];
    render(<App />);
    const button = screen.getByText(/Adicionar/i);
    const input = screen.getByLabelText(/Tarefa/i);
    arrList.forEach((arrItem) => {
      userEvent.type(input, arrItem);
      userEvent.click(button);
    });
    arrList.forEach((arrItem) => {
      expect(screen.getByText(arrItem)).toBeInTheDocument();
    });
  });
  test('Teste apenas o componente Item', () => {
    render(<Item content="Estudar" />);
    expect(screen.getByText('Estudar')).toBeInTheDocument();
  });
});
