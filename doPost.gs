function doPost(e) {
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('log');
  const payload = e.parameter.payload;

  sheet.getRange('A1').setValue(payload);

  // log
  
}

// {
// 	"type": "block_actions",
// 	"user": {
// 		"id": "U033FJ0U0TZ",
// 		"username": "mkataoka73",
// 		"name": "mkataoka73",
// 		"team_id": "T0348PU62QH"
// 	},
// 	"api_app_id": "A034L0G96SC",
// 	"token": "BBrbnhHBwlj6qhQF2IHsVNrD",
// 	"container": {
// 		"type": "message",
// 		"message_ts": "1647776029.773229",
// 		"channel_id": "C033W63DFEX",
// 		"is_ephemeral": false
// 	},
// 	"trigger_id": "3266451238691.3144810206833.631ca332f513bff36cf64f549512553d",
// 	"team": {
// 		"id": "T0348PU62QH",
// 		"domain": "w1645355938-t9c264482"
// 	},
// 	"enterprise": null,
// 	"is_enterprise_install": false,
// 	"channel": {
// 		"id": "C033W63DFEX",
// 		"name": "物品購入申請"
// 	},
// 	"message": {
// 		"type": "message",
// 		"subtype": "bot_message",
// 		"text": "This content can't be displayed.",
// 		"ts": "1647776029.773229",
// 		"bot_id": "B0348RYBPUH",
// 		"blocks": [
// 			{
// 				"type": "section",
// 				"block_id": "eNZ",
// 				"text": {
// 					"type": "mrkdwn",
// 					"text": "You have a new request:\n*<fakeLink.toEmployeeProfile.com|Fred Enriquez - New device request>*",
// 					"verbatim": false
// 				}
// 			},
// 			{
// 				"type": "section",
// 				"block_id": "+ixKq",
// 				"fields": [
// 					{
// 						"type": "mrkdwn",
// 						"text": "*Type:*\nComputer (laptop)",
// 						"verbatim": false
// 					},
// 					{
// 						"type": "mrkdwn",
// 						"text": "*When:*\nSubmitted Aut 10",
// 						"verbatim": false
// 					},
// 					{
// 						"type": "mrkdwn",
// 						"text": "*Last Update:*\nMar 10, 2015 (3 years, 5 months)",
// 						"verbatim": false
// 					},
// 					{
// 						"type": "mrkdwn",
// 						"text": "*Reason:*\nAll vowel keys aren't working.",
// 						"verbatim": false
// 					},
// 					{
// 						"type": "mrkdwn",
// 						"text": "*Specs:*\n\"Cheetah Pro 15\" - Fast, really fast\"",
// 						"verbatim": false
// 					}
// 				]
// 			},
// 			{
// 				"type": "actions",
// 				"block_id": "FFn+",
// 				"elements": [
// 					{
// 						"type": "button",
// 						"action_id": "lGs=",
// 						"text": {
// 							"type": "plain_text",
// 							"text": "Approve",
// 							"emoji": true
// 						},
// 						"style": "primary",
// 						"value": "click_me_123"
// 					},
// 					{
// 						"type": "button",
// 						"action_id": "1TqV",
// 						"text": {
// 							"type": "plain_text",
// 							"text": "Deny",
// 							"emoji": true
// 						},
// 						"style": "danger",
// 						"value": "click_me_123"
// 					}
// 				]
// 			}
// 		]
// 	},
// 	"state": {
// 		"values": {}
// 	},
// 	"response_url": "https://hooks.slack.com/actions/T0348PU62QH/3290221862496/2lQQmWfQBRqVh6a6XOBu38w0",
// 	"actions": [
// 		{
// 			"action_id": "lGs=",
// 			"block_id": "FFn+",
// 			"text": {
// 				"type": "plain_text",
// 				"text": "Approve",
// 				"emoji": true
// 			},
// 			"value": "click_me_123",
// 			"style": "primary",
// 			"type": "button",
// 			"action_ts": "1647777461.258647"
// 		}
// 	]
// }