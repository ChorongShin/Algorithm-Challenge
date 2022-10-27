function removeUrlAnchor(url) {
  url = url.split('');

  if (url.includes('#')) {
    let findIndex = url.indexOf('#')
    return url.slice(0, findIndex).join('')
  }

  return url.join('');
}


//Other solution
function removeUrlAnchor(url) {
  return url.split('#')[0];
}

//Examp;es
removeUrlAnchor("www.codewars.com#about") //"www.codewars.com"
removeUrlAnchor("www.codewars.com?page=1") //"www.codewars.com?page=1"
