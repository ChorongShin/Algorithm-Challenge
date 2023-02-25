function convertHTML(str) {
   const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
    };

    const words = str.split('');
    return words.map(word => {
      return htmlEntities[word] || word
    }).join('');
  }

  //Example
convertHTML("<>") //--> "&lt;&gt;"
