This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Get Started

1. `npm install`
2. Put this directory inside the plugins directory in your Wordpress repo. `site-repo/wp-content/plugins/`
3. Add the hidden `.env.js` file to the root directry of the plugin by copying the `env.example.js`, remove the example naming and fill out the variables in the file as required.
4. Activate the plugin in the Wordpress Admin/Plugins console.
5. Copy/Paste the `TemplateBlock` directory and modify the `blockName` in the `block.js` and start coding.
6. Edit a page and add a block. You should see the blocks in this repo appear in the blocks menu.

### 👉 `npm start`

- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉 `npm run build`

- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## Frontend Expectations

Classes setting colors for background, border, and color

```scss
// helpers
.h-background-[primary, secondary, tertiary] {
  background-color: ??????? !important;
}
.h-border-[primary, secondary, tertiary] {
  border-color: ??????? !important;
}
.h-color-[primary, secondary, tertiary] {
  color: ??????? !important;
}
```
