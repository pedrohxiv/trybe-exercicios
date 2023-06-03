def validate_email(email):
    username, websitename_extension = email.split('@')

    if len(email.split('@')) != 2 or '.' not in websitename_extension:
        raise ValueError("Endereço de e-mail inválido.")

    websitename, extension = websitename_extension.split('.')

    if not username[0].isalpha() or not set(username).issubset(
                set('abcdefghijklmnopqrstuvwxyz'
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    '0123456789-_')):
        raise ValueError("Nome de usuário inválido.")

    if not all(c.isalpha() or c.isdigit() for c in websitename):
        raise ValueError("Nome do website inválido.")

    if len(extension) > 3:
        raise ValueError("Extensão inválida.")

    return True


try:
    validate_email('a_a1a-a@nomewebsite.ext')
    print("Endereço de e-mail válido.")
except ValueError as error:
    print("Erro:", str(error))
