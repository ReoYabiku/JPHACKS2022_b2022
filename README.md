# JPHACKS2022_b2212
JPHACKSに向けて開発中の初心者向け機械学習コード生成ツール

## development
1. git clone git@github.com:ReoYabiku/JPHACKS2022_b2022.git
1. cd ./fronted
1. npm install
1. cd ../
1. docker compose build --no-cache --force-recreate
1. docker compose up

- バックエンドは5000ポート、フロントエンドは3000ポートからアクセスできる。

## Environment Variables
1. ./frontend内に.env.localを作成する
1. 以下を書き込む
```
REACT_APP_BACKEND_URL = 'http://localhost:5000'
```

## production
### backend
[https://integral.pythonanywhere.com/](https://integral.pythonanywhere.com/)

### frontend
[https://jphacks-2022-b2212.vercel.app](https://jphacks-2022-b2212.vercel.app)

## how to deploy

### backend
1. [pythonantwhere](https://www.pythonanywhere.com/user/integral/)にアクセスする
1. コンソールを開く
1. pip install flask
1. pip install flask_cors
1. git pull origin main
1. pythonanywhereのWebを開く
1. Reloadする
（本当はhookでReloadできるようにしたい。今はintegralしかReloadできない）

### frontend
- すべてのブランチへのPushが自動でデプロイされる
- mainへのPushのみが本番環境に反映される

#### 手動デプロイ
[手動デプロイ用エンドポイント](https://api.vercel.com/v1/integrations/deploy/prj_4IndLAl5bwpfaoPKfx8uEc4fzJh9/P5juMy9FdM)を叩くことでリデプロイできる
** 叩くとデプロイが始まります **