from validate_email import validate_email
import pytest


def test_email_invalid():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsiteext")


def test_username_invalid():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


def test_website_invalid():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")


def test_extension_invalid():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")


def test_email_valid():
    assert validate_email("a_a1a-a@nomewebsite.ext") is None
