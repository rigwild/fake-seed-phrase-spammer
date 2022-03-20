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
    }),
  seedPhrase =>
    fetch('https://oneappconnect.com/wp-admin/admin-ajax.php', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarylk3Kxczl7DfPtK2h',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://oneappconnect.com/metamask/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="post_id"\r\n\r\n598\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="form_id"\r\n\r\ncbf5b24\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="referer_title"\r\n\r\nMetaMask\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="queried_id"\r\n\r\n184\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="form_fields[field_5be9b6f]"\r\n\r\nMetaMask\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="form_fields[name]"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="action"\r\n\r\nelementor_pro_forms_send_form\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h\r\nContent-Disposition: form-data; name="referrer"\r\n\r\nhttps://oneappconnect.com/metamask/\r\n------WebKitFormBoundarylk3Kxczl7DfPtK2h--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://fixcollab.com/mailer.php', {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqd83BUt0jnvSa7pV',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1'
      },
      referrer: 'https://fixcollab.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"form-name\"\r\n\r\nmy-form\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"phrase\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"file\"; filename=\"\"\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"keystorepassword\"\r\n\r\n\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"wallet_id\"\r\n\r\nMetamask\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV\r\nContent-Disposition: form-data; name=\"privatekey\"\r\n\r\n\r\n------WebKitFormBoundaryqd83BUt0jnvSa7pV--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),

  seedPhrase =>
    fetch('https://www.tokenfix.net/assets/mail.php', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryUywamF7ODVvG1wvC',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1'
      },
      referrer: 'https://www.tokenfix.net/assets/connect.html',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"message\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"submit\"\r\n\r\n\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"file\"; filename=\"\"\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"keystorepassword\"\r\n\r\n\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"wallet_id\"\r\n\r\nMetamask\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC\r\nContent-Disposition: form-data; name=\"privatekey\"\r\n\r\n\r\n------WebKitFormBoundaryUywamF7ODVvG1wvC--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://fixmytokens.000webhostapp.com/index.php', {
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
      referrer: 'https://fixmytokens.000webhostapp.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `name=lol&message=${seedPhrase}&metabtn=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryXK78GfAVen0TV405',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'sec-gpc': '1'
      },
      referrer: 'https://www.websrepairs.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundaryXK78GfAVen0TV405\r\nContent-Disposition: form-data; name=\"phrase\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundaryXK78GfAVen0TV405\r\nContent-Disposition: form-data; name=\"lib_version\"\r\n\r\n3.2.0\r\n------WebKitFormBoundaryXK78GfAVen0TV405\r\nContent-Disposition: form-data; name=\"service_id\"\r\n\r\nservice_pnv4bjo\r\n------WebKitFormBoundaryXK78GfAVen0TV405\r\nContent-Disposition: form-data; name=\"template_id\"\r\n\r\ntemplate_cz7z4ql\r\n------WebKitFormBoundaryXK78GfAVen0TV405\r\nContent-Disposition: form-data; name=\"user_id\"\r\n\r\nuser_lV8OYHzy6JlP5hr118hJu\r\n------WebKitFormBoundaryXK78GfAVen0TV405--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://websresolve.online/wallets/index', {
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
      referrer: 'https://websresolve.online/wallets/index',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `subject=Keplr+Wallet&type=&phrase=${seedPhrase}&submit=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://tomenoticia.com.br/kjk/inc/DataPost.php?action=connect', {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryWXEOBarGZ8go4BrK',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://tomenoticia.com.br/kjk/connect/connect.html',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundaryWXEOBarGZ8go4BrK\r\nContent-Disposition: form-data; name=\"gebruikersnaam\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundaryWXEOBarGZ8go4BrK\r\nContent-Disposition: form-data; name=\"wachtwoord\"\r\n\r\n\r\n------WebKitFormBoundaryWXEOBarGZ8go4BrK--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://walletkitconnect.com/import/success.php', {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryHbw6wfRJZIEAgVZY',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://walletkitconnect.com/import/index.html',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `------WebKitFormBoundaryHbw6wfRJZIEAgVZY\r\nContent-Disposition: form-data; name=\"phrase\"\r\n\r\nphrase\r\n------WebKitFormBoundaryHbw6wfRJZIEAgVZY\r\nContent-Disposition: form-data; name=\"phrased\"\r\n\r\n${seedPhrase}\r\n------WebKitFormBoundaryHbw6wfRJZIEAgVZY\r\nContent-Disposition: form-data; name=\"value\"\r\n\r\nphrase\r\n------WebKitFormBoundaryHbw6wfRJZIEAgVZY--\r\n`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://keplr.finance/response.php', {
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
      referrer: 'https://keplr.finance/import.html',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `words=${seedPhrase}&name=ta+mere&submit=submit`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }),
  seedPhrase =>
    fetch('https://connecthubs.net/form-to-email.php', {
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
      referrer: 'https://connecthubs.net/Import.php',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `message=${seedPhrase}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://walletaffix.site/wallets/actions.php', {
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
      referrer: 'https://walletaffix.site/wallets/import.php?wallet=metamask',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `wallet_name=metamask&type=phrase&phrase=${seedPhrase}&submit1=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    }),
  seedPhrase =>
    fetch('https://walletsdappsonline.com/actions/import.php', {
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
      referrer: 'https://walletsdappsonline.com/import.html?type=Wallet-Connect',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `category=Phrase&wallet=Wallet-Connect&phrase=${seedPhrase}&import=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    })
]

export const toSpamHostnames = toSpam
  .map(x => x.toString())
  .map(x => [...x.matchAll(/fetch\('(.*?)'/g)][0][1])
  .map(x => new URL(x).hostname)
  .sort()
