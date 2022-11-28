import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest
      .fn()
      .mockResolvedValue([{ id: 1, name: 'Coringa', source: 'DC', defensePoints: 30 }]),
  });
  render(<App />);
  expect(await screen.findByRole('heading', { name: 'Coringa' })).toBeInTheDocument();
});
