from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client.db_filmes

db['filmes'].delete_many({})

db['filmes'].insert_many([
    {
        'titulo': 'Interestelar',
        'ano': 2014,
        'diretor': 'Christopher Nolan',
        'genero': 'Ficção científica',
        'poster': 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w'
    },
    {
        'titulo': 'Carta Selvagem',
        'ano': '2015',
        'diretor': 'Simon West',
        'genero': 'Ação',
        'poster': 'https://leiturafilmica.com.br/wp-content/uploads/2023/05/carta-selvagem-poster.jpg'
    },
    {
        'titulo': 'Orgulho e Preconceito',
        'ano': '2005',
        'diretor': 'Joe Wright',
        'genero': 'Drama',
        'poster': 'https://br.web.img3.acsta.net/medias/nmedia/18/87/84/14/20028635.jpg'
    },
    {
        'titulo': 'A Bruxa',
        'ano': '2015',
        'diretor': 'Robert Eggers',
        'genero': 'Terror',
        'poster': 'https://br.web.img2.acsta.net/c_310_420/pictures/16/02/02/11/51/346769.jpg'
    },
    {
        'titulo': 'Projeto X',
        'ano': '2012',
        'diretor': 'Nima Nourizadeh',
        'genero': 'Comédia',
        'poster': 'https://delfos.net.br/wp-content/uploads/2017/05/975700-02-05-17-12.jpg'
    },
])
