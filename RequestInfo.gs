class RequestInfo {
  constructor(e) {
    //[TODO]: ガード節つくる？ if(e) != 
    this.namedValues = e.namedValues; //e.
  }

  stripArray() {

    const obj = {};
    for (const prop in this.namedValues) {
      obj[prop] = this.namedValues[prop][0];
    }

    return obj;

    // { 
    //  '申請者名': [ 'モブプロ' ],
    //  '参考URL': [ 'https://www.lenovo.com/jp/ja/accessories-and-monitors/monitors/home/L29w-30F212902E029inch-Monitor-HDMI/p/66E5GAC3JP?ef_id=CjwKCAjwoduRBhA4EiwACL5RP9x7wjwdVglvVkSX9FO1i26zcJoUkSapKP5RKBgMEU7qv6T_OBk9KxoCE0UQAvD_BwE:G:s&s_kwcid=AL!736!3!494714765034!!!g!1445323494189!&&cid=jp:sem:100005_TFSM1Q12YF&gclid=CjwKCAjwoduRBhA4EiwACL5RP9x7wjwdVglvVkSX9FO1i26zcJoUkSapKP5RKBgMEU7qv6T_OBk9KxoCE0UQAvD_BwE&gclsrc=aw.ds' ],
    //  'タイムスタンプ': [ '2022/03/20 21:32:30' ],
    //  '画像': [ '' ],
    //  'タイトル': [ 'ディスプレイ' ],
    //  '単価': [ '30360' ],
    //  '用途': [ 'デュアルモニタリング' ]
    // }
  }

  makeBlockKit() {
    const obj = this.stripArray();
    const blocks = TemplateBlocks;
    return blocks;
  }
}

function test_RequestInfo() {
  const e = {
    namedValues: {
      '申請者名': ['モブプロ'],
      '参考URL': ['https://www.lenovo.com/jp/ja/accessories-and-monitors/monitors/home/L29w-30F212902E029inch-Monitor-HDMI/p/66E5GAC3JP?ef_id=CjwKCAjwoduRBhA4EiwACL5RP9x7wjwdVglvVkSX9FO1i26zcJoUkSapKP5RKBgMEU7qv6T_OBk9KxoCE0UQAvD_BwE:G:s&s_kwcid=AL!736!3!494714765034!!!g!1445323494189!&&cid=jp:sem:100005_TFSM1Q12YF&gclid=CjwKCAjwoduRBhA4EiwACL5RP9x7wjwdVglvVkSX9FO1i26zcJoUkSapKP5RKBgMEU7qv6T_OBk9KxoCE0UQAvD_BwE&gclsrc=aw.ds'],
      'タイムスタンプ': ['2022/03/20 21:32:30'],
      '画像': [''],
      'タイトル': ['ディスプレイ'],
      '単価': ['30360'],
      '用途': ['デュアルモニタリング']
    }
  };

  const requestInfo = new RequestInfo(e);

  console.log(requestInfo.makeBlockKit());

}

