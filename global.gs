const TemplateBlocks = [
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
      "text": `*申請者:*\n${obj['申請者名']}\n*タイトル:*\n${obj['タイトル']}\n*単価:*\n${obj['単価']}\n*用途:*\n${obj['用途']}\n*参考URL:*\n${obj['参考URL']}`
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
]