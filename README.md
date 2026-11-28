# ARES Project Official Website
<div align="center">
  <img src="https://user-images.githubusercontent.com/59753159/201552931-fee75d06-cd55-4d7c-b3c3-7ca51f6aba9d.png" width="320">
</div>

## 開発環境
- `yarn install`でパッケージをインストール
- `yarn dev`で開発用サーバー起動
- ブラウザで`localhost:3000`にアクセスするとトップページが表示される

## お問い合わせフォーム

お問い合わせ専用の Cloudflare Turnstile ウィジェットを Managed モードで作成し、フォームを提供するホスト名をウィジェットに登録してください。デプロイ環境に以下の変数を設定します。ローカルでは `.env.local` を使用できます。

| 環境変数 | 設定値 |
| --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | ウィジェットの公開サイトキー。ビルド時に設定します。 |
| `TURNSTILE_SECRET_KEY` | ウィジェットのサーバー専用秘密鍵。 |
| `TURNSTILE_ALLOWED_HOSTNAMES` | Siteverify が返すホスト名の許可リスト。複数ある場合はカンマで区切ります。 |
| `GMAIL_USER` / `GMAIL_PASSWORD` | Gmail SMTP の認証情報。 |
| `MAIL_TO` | ARES 宛ての通知を受け取るアドレス。 |

ローカルの動作確認には [Cloudflare 公式のテストキー](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) が使えます。成功用テストキーが返すホスト名に合わせて `TURNSTILE_ALLOWED_HOSTNAMES=example.com` を設定し、送信先にはテスト用メールアドレスを使用してください。本番では実際のサイトキー、秘密鍵、ホスト名を設定してください。
