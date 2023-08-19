import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
// import userEvent from '@testing-library/user-event';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
// import randomNumber from './utils/randomNumber';

describe('Página principal', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(mockFetch as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const buttonEl = await screen.findByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  test.skip('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    // Remova o 'skip' e implemente seu teste
  });
});
