import requests
from bs4 import BeautifulSoup
import urllib.parse

def bypass_shortlink(url):
    try:
        # Send a HEAD request to follow redirects and get the final URL
        response = requests.head(url, allow_redirects=True)
        final_url = response.url
        
        # If the URL doesn't redirect to another domain, try to fetch the HTML and find a potential final URL
        if urllib.parse.urlparse(final_url).netloc == urllib.parse.urlparse(url).netloc:
            response = requests.get(final_url)
            soup = BeautifulSoup(response.text, 'html.parser')
            meta_url = soup.find('meta', attrs={'name': 'url'})
            if meta_url and meta_url.get('content'):
                final_url = meta_url['content']
        
        return final_url
    except Exception as e:
        return f"Error bypassing URL: {e}"

# Example usage
if __name__ == "__main__":
    short_url = input("Enter a short URL: ")
    print(bypass_shortlink(short_url))
