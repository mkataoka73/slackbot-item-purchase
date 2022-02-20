function postToSlack_(text) {
  const url = ScriptProperties.getProperty('WEBHOOK_URL');

  const params = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text: text})
  };
  UrlFetchApp.fetch(url, params);
}

function test_postToSlack() {
  const text = 'Hello World!';
  postToSlack_(text);
}