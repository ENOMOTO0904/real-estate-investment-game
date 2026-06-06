# real-estate-investment-game

不動産投資シミュレーションゲーム (Web)。10 ターン × 5 年 = 50 年スパンで区分マンションを売買し、最終的な純資産を最大化するシングルプレイゲーム。

詳細仕様: [docs/specs/2026-06-06-real-estate-investment-game-design.md](./docs/specs/2026-06-06-real-estate-investment-game-design.md)

---

## 環境構築

### 前提

- Node.js **24.1.0** が必要 (`.node-version` で指定)
  - [fnm](https://github.com/Schniz/fnm) / [asdf](https://asdf-vm.com/) / [nodenv](https://github.com/nodenv/nodenv) のいずれかを入れておくと `.node-version` を自動で読んでくれます
  - インストール例 (fnm): `brew install fnm && fnm install 24.1.0`
- npm (Node.js 同梱の標準版で OK)

### セットアップ手順

```sh
# リポジトリをクローン
git clone git@github.com:ENOMOTO0904/real-estate-investment-game.git
cd real-estate-investment-game

# Node.js のバージョンを切り替え (fnm の場合)
fnm use

# 依存ライブラリのインストール (postinstall で lefthook の git hooks も自動セットアップ)
npm install
```

### 起動確認

```sh
# 開発サーバ起動 (http://localhost:5173)
npm run dev
```

ブラウザで http://localhost:5173 にアクセスして、「不動産投資シミュレーションゲーム」と表示されれば成功。

---

## 開発コマンド

### 開発

```sh
npm run dev          # Vite 開発サーバ (http://localhost:5173)
npm run preview      # ビルド成果物のプレビュー (build 後に実行)
```

### ビルド

```sh
npm run build        # tsc + Vite ビルド (dist/ に成果物)
```

### Lint / Format

```sh
npm run lint         # lint:biome + lint:tsc を順に実行
npm run lint:biome   # Biome の lint + format チェック
npm run lint:tsc     # TypeScript 型チェック
npm run fix          # Biome で自動修正
```

### テスト

```sh
npm run test         # Vitest watch モード
npm run test:run     # Vitest 1 回実行 (CI / pre-push hook 相当)
npm run test:ui      # Vitest UI モード (ブラウザで test 結果を見る)
```

---

## Git hooks (Lefthook)

`npm install` 時に自動セットアップされます。手動でセットアップする場合:

```sh
npx lefthook install
```

| フック | 実行内容 |
|---|---|
| pre-commit | Biome の format を staged ファイルに自動適用 |
| pre-push | Biome lint + tsc 型チェック + Vitest を並列実行。失敗すると push がブロックされる |
