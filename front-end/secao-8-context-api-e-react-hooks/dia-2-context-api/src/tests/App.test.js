import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import Header from '../components/Header';
import Favorites from '../pages/Favorites';
import { createMemoryHistory } from 'history';
import Home from '../pages/Home';
import mock from './mock';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('1 - Montando a estrutura', () => {
  test('A API é chamada corretamente com o Endpoint correto', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: async () => mock });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(async () => {
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(
        'https://api-trybe-frontend.vercel.app/api/ghibli-animations'
      );
    });

    await screen.findByText('Films');
  });
});

describe('2 - Exibindo a lista de filmes na página Home', () => {
  test('Liste todos os filmes recebidos pela API', async () => {
    const filmsArr = [...mock];

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: async () => mock });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    for (const film of filmsArr) {
      const titleEl = await screen.findByText(film.title);
      const imageEl = await screen.findByAltText(film.title);
      expect(titleEl).toBeInTheDocument();
      expect(imageEl).toBeInTheDocument();
    }

    const buttonEls = await screen.findAllByRole('button');
    expect(buttonEls.length).toBe(filmsArr.length);
  });
});

describe('3 - Exibindo a lista de filmes favoritados na página Favorites', () => {
  test('É possível favoritar e remover dos favoritos', async () => {
    const filmsArr = [...mock];
    const history = createMemoryHistory();

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: async () => mock });
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Ir para página favoritos - não deve haver filme
    let favoriteLinkEl = await screen.getByRole('link', { name: /favorites/i });
    expect(favoriteLinkEl).toHaveAttribute('href', '/favorites');
    userEvent.click(favoriteLinkEl);
    const favoriteFilmTitleEl = screen.queryByText('My Neighbor Totoro');
    expect(favoriteFilmTitleEl).not.toBeInTheDocument();

    // Voltar para home
    let homeLinkEl = await screen.getByRole('link');
    expect(homeLinkEl).toHaveAttribute('href', '/');
    userEvent.click(homeLinkEl);

    // Favoritar 2 filmes
    const buttonEls = await screen.findAllByRole('button');
    userEvent.click(buttonEls[2]);
    userEvent.click(buttonEls[3]);

    // Voltar para Favoritos
    favoriteLinkEl = await screen.findByRole('link', { name: /favorites/i });
    expect(favoriteLinkEl).toHaveAttribute('href', '/favorites');
    userEvent.click(favoriteLinkEl);

    // Deve haver 2, e apenas 2 filmes
    const titleEls = await screen.findAllByRole('heading', { level: 2 });
    expect(titleEls.length).toBe(2);
    expect(titleEls[0].innerHTML).toBe('My Neighbor Totoro');
    expect(titleEls[1].innerHTML).toBe("Kiki's Delivery Service");

    // Voltar para home e desfavoritar 1 filme
    homeLinkEl = await screen.findByRole('link');
    userEvent.click(homeLinkEl);
    const favoriteButtons = await screen.findAllByRole('button')
    userEvent.click(favoriteButtons[2]);

    // Voltar para Favoritos, deve haver apenas 1 filme
    favoriteLinkEl = await screen.findByRole('link');
    userEvent.click(favoriteLinkEl);

    const newTitleEl = await screen.findByRole('heading', { level: 2 });
    expect(newTitleEl.innerHTML).toBe('Kiki\'s Delivery Service');
  });
});
