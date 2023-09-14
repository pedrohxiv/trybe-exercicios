import requests
import parsel

URL = "http://books.toscrape.com/catalogue/"
response = requests.get(URL + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price_css = ".product_main > .price_color::text"
price = selector.css(price_css).re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
if description.endswith("...more"):
    description = description[:-len("...more")]

cover = URL + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")
