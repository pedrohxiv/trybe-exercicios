import requests


has_next = True
page = 1
counter = 0
while has_next:
    URL = f"http://quotes.toscrape.com/api/quotes?page={page}"
    response = requests.get(URL)
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1

print(counter)
