### 導入

#### ESLint

```sh
npm install --save-dev eslint
npm init @eslint/config@latest # プロジェクトに適用する場合
``

linterを実行する

```sh
npx eslint test.js
```

#### Prettier

```sh
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```
