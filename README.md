[![Netlify Status](https://api.netlify.com/api/v1/badges/c95a1d91-c06d-40a9-8a9e-3d5f64c535b2/deploy-status)](https://app.netlify.com/sites/creative-horse-2ce51f/deploys)


## はじめに

Node.jsの推奨バージョンは v20.15.0 です。

バージョンが異なる場合は、下記を参考にバージョンを切り替える。

https://guitto.notepm.jp/page/f67c03ad58

APIキーは下記に保存しています。（.env.development.local, .env.local）

作業開始前にダウンロードしアプリケーションのルートディレクトリに設置して下さい。

https://drive.google.com/drive/folders/1uUQyDRN4Ec-bsBcfx1Ltb5JU1RsV2Eic?usp=share_link

その後下記コマンドを実行。

下記は初回のみ（パッケージインストール後は不要）

```bash
yarn
```
パッケージインストール後下記、アプリケーション起動

```bash
yarn dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと、結果を見ることができます。

ページの編集は `pages/*.tsx` を修正することで開始できます。ファイルを編集すると、ページが自動更新されます。

[APIルート](https://nextjs.org/docs/api-routes/introduction)は、[http://localhost:3000/api/hello](http://localhost:3000/api/hello)でアクセスすることができます。このエンドポイントは `pages/api/hello.js` で編集することができる。

pages/api` ディレクトリは `/api/*` にマップされる。このディレクトリにあるファイルは React ページではなく、[API routes](https://nextjs.org/docs/api-routes/introduction) として扱われる。

