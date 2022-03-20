import fetch from 'node-fetch'

export const toSpam = [
  seedPhrase =>
    fetch('https://safeskyline.com/success.php', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1'
      },
      referrer: 'https://safeskyline.com/connect',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `category=Phrase&phrase=${seedPhrase}&import=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://webdappsvalidate.us/address/sent.php', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
      },
      referrer: 'https://webdappsvalidate.us/address/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `phrase=${seedPhrase}&submit=Import`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://www.aiconne.com/es/actions/import.php', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1'
      },
      referrer: 'https://www.aiconne.com/es/import.html?type=metamask',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `category=Phrase&wallet=metamask&phrase=${seedPhrase}&import=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://indexapp.info/wp-admin/admin-ajax.php', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7aGXvi9DDkUbmnU5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://indexapp.info/wallet/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"post_id\"\r\n\r\n223\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"form_id\"\r\n\r\n52538ca2\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"referer_title\"\r\n\r\nWallet - Execute Contract | Best Cryptocurrency Wallet\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"queried_id\"\r\n\r\n11\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"form_fields[message]\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nelementor_pro_forms_send_form\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5\r\nContent-Disposition: form-data; name=\"referrer\"\r\n\r\nhttps://indexapp.info/wallet/\r\n------WebKitFormBoundary7aGXvi9DDkUbmnU5--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }),
  seedPhrase =>
    fetch('https://wallconnow.com/en/img/conn.php', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarykxc3dpWm0rJ0NOfS',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1'
      },
      referrer: 'https://wallconnow.com/en/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundarykxc3dpWm0rJ0NOfS\r\nContent-Disposition: form-data; name="pm_phrase"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundarykxc3dpWm0rJ0NOfS--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    })
]
