# テスト駆動開発

以下のサイト記事の写経です。  
テスト駆動開発をコーディングしながら学ぶ学習です。

https://qiita.com/Yametaro/items/3c537c003e6b1569d9e5

- 前提
```
TestDrivenDevelop$ yarn --version
1.13.0
TestDrivenDevelop$ node --version
v12.6.0
TestDrivenDevelop$ 
```

## cloneしたら

本リポジトリをcloneしたら以下の流れで試すことができます。  
以下のような出力がされれば成功です。

```
testdrivendevelop[master]$ yarn install
yarn install v1.13.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 6.31s.
testdrivendevelop[master]$ ls -l
total 640
-rw-r--r--    1 asano  staff  145509  7 10 14:55:59 2019 yarn.lock
-rw-r--r--    1 asano  staff     247  7 10 15:02:31 2019 package.json
-rw-r--r--    1 asano  staff    6059  7 10 15:07:09 2019 jest.config.js
-rw-r--r--    1 asano  staff    1395  7 10 15:17:40 2019 README.md
-rw-r--r--    1 asano  staff     882  7 10 15:27:47 2019 evenHello.test.js
-rw-r--r--    1 asano  staff     148  7 10 15:28:47 2019 evenHello.js
-rw-r--r--    1 asano  staff  153845  7 10 15:35:56 2019 yarn-error.log
drwxr-xr-x  414 asano  staff   13248  7 10 15:36:17 2019 node_modules/
testdrivendevelop[master]$ yarn test
yarn run v1.13.0
$ jest
 PASS  ./evenHello.test.js
  奇数を渡したら、その数値をそのまま返す
    ✓ 1を渡したら、1を返す (6ms)
    ✓ 3を渡したら、3を返す (1ms)
  偶数を渡したら、「ハロー」を返す
    ✓ 2を渡したら、「ハロー」を返す
    ✓ 4を渡したら、「ハロー」を返す
  負数を渡したら、「ワールド」を返す
    ✓ -1を渡したら、「ワールド」を返す (1ms)
    ✓ -2を渡したら、「ワールド」を返す

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.842s
Ran all test suites.
✨  Done in 2.18s.
testdrivendevelop[master]$ 
```

## 作成した流れ

```
#yarn管理のプロジェクト（？）を作る package.jsonが生成される
yarn init

#jestをインストール package.jsonにjestが追加されます
yarn add --dev jest

#jestの設定雛形ファイルを作成する。
#カバレッジをとるか？などを聞いてくれる。
#その他詳細は生成された設定ファイル or 公式HP参照
jest --init  #パスが通っている場合
#or
node_modules/jest/bin/jest.js --init  #node_modules配下のもので実行する場合
```

package.jsonに以下を追加してtestコマンドでjestが実行されるように。
```
{
  "scripts": {
    "test": "jest"
  }
}
```

- テストクラス作成
 - 慣例(?)的に [対象のjs名.test.js] というファイル名にするようだ。
 - 以下のようなテストケースを書く。

```js
const evenHello = require('evenHello');

test('1を渡したら、1を返す', () =>{
	expect(evenHello(1)).toBe(1);
});
```

- テスト実行
```
yarn test

#coverageとるときはこんな感じ。
#コンソールに出力されると共に
#カレントディレクトリに coverage ディレクトリが作成されindex.htmlに記録されている。
yarn test --coverage
```
