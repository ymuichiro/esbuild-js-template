# esbuild-js-template

esbuild を活用した JS 開発環境のテンプレート

# 開発環境

- visual studio code
  - extention: debugger for chrome
- Node.js v14.8.0
- esbuild v0.8.42
- typescript v4.1.3

# 使い方

## デバッグするとき

- launch.json を実行下さい
  - esbuild が watch モードで実行されると同時に、tsc による型チェックも実行されます。
  - 上記２つの処理実行開始後に Chrome が起動されます。

## 本番ビルドする時

- npm run build を実行ください
