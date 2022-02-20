function testHello(text) {
  const url = 'https://hooks.slack.com/services/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';

  const params = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text: text})
  };
  UrlFetchApp.fetch(url, params);
}

function testSlack() {
  const text = 'Hello World!';
  testHello(text);
}
