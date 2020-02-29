# Dormio
![GitHub Actions](https://github.com/KoichiKiyokawa/dormio/workflows/GitHub%20Actions/badge.svg?branch=master)

## 概要
寮で暮らす人々の生活を便利にするツールです。寮の住人と管理人向けです。
- [特徴](#特徴)
- [実行方法](#実行方法)
- [機能](#機能)

## 特徴
- React Nativeによるクロスプラットフォーム開発
- 自動テスト
- Firestoreによる、リアルタイムなデータ同期

## 実行方法
### Expo
1. スマホに[Expo Client](https://expo.io/tools#client)をインストールしてください。
1. Expo Clientを起動し、`Scan QR Code`をタップしてください。
1. https://expo.io/@kiyoshi910/dormio にあるQRコードを読み取るとDormioが起動します。

### ローカル環境
#### 依存関係
- Node
- yarn
```bash
$ yarn install
$ yarn dev
# ブラウザが起動するのでQRコードをExpo Clientアプリで読み取ってください
```
#### デバッグ方法
[react-native-debugger](https://github.com/jhen0409/react-native-debugger)をインストールしてください。
```bash
$ yarn dev
```

## 機能
### 管理人の所在地がわかる！
左のiPhoneが住人の画面で、右のAndroidが管理人の画面です  
住人がボタンをタップしても、管理人の居場所は切り替えられません。  
管理人はボタンをタップして、管理人の居場所「管理室にいます」←→「出かけています」を切り替えることができます。切り替えると、住人側のアプリに自動で反映されます  

![location](https://user-images.githubusercontent.com/40315079/73530134-3f201000-445b-11ea-91db-eff88d704cc4.gif)


### お知らせ機能
お知らせをタップすると詳細が読めます。  
![notice_movie](https://user-images.githubusercontent.com/40315079/73530564-151b1d80-445c-11ea-8bfd-a21be46bf501.gif)

### 食事の申込み機能
左のiPhoneが住人の画面で、右のAndroidが管理人の画面です  
住人は食事の申込みをスウィッチで切り替えられます。
管理人は住人の申込状況をリアルタイムで見られます。  
(左の画面は301号室の清川が操作しているという設定です)  
![meal_order](https://user-images.githubusercontent.com/40315079/73531153-329cb700-445d-11ea-9173-290506b1a42e.gif)

### チャット機能
住人←→管理人、住人←→住人全員(グループチャット)間でメッセージのやり取りができます。  
![chat](https://user-images.githubusercontent.com/40315079/73533097-6974cc00-4461-11ea-9555-4ce48d52d15f.gif)
