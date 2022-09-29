function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');

  const dotIndex = url.indexOf('.');
  url = url.slice(0, dotIndex);
  return url;

  /*OR
  return url.split('.')[0];
  */

}

//Examples
domainName('https://www.google.co.jp') //-> 'google'
domainName('www.cnet.com') //--> 'cnet'
