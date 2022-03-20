function getRequestInfo(e){
  
}


function postToSlack_() {
  const url = ScriptProperties.getProperty('WEBHOOK_URL');

  const params = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ blocks: makeBlockKit_() })
  };
  UrlFetchApp.fetch(url, params);
}

function test_postToSlack() {
  // const text = 'Hello World!';
  postToSlack_();
}


function makeBlockKit_() {
  const blocks = [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "新しい物品購入リクエストがあります！"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*申請者:*\n{申請者}\n*タイトル:*\n{物品名}\n*単価:*\n{単価}\n*用途:*\n{用途}\n*参考URL:*\n{URL}"
      },
      "accessory": {
        "type": "image",
        "image_url": "https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png",
        "alt_text": "computer thumbnail"
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Approve"
          },
          "style": "primary",
          "value": "click_me_123"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Deny"
          },
          "style": "danger",
          "value": "click_me_123"
        }
      ]
    }
  ];
  return blocks;
}