This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Get Started
1. `npm install`
2. Put this directory inside the plugins directory in your Wordpress repo.
`site-repo/wp-content/plugins/`
3. Activate the plugin in the Wordpress Admin/Plugins console.
4. Edit a page and add a block. You should see the blocks in this repo appear in the blocks menu.

### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.


## Frontend Expectations
- Classes setting colors for background, border, and color
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
These classes are available in the backend if you add them to be imported to admin styles. You just have to be sure to add the entry point in your blocks. This is almost automated but I need to get a env file going.

`./assets/source/scss/admin/index.scss`
```scss
.backend-theme-styles-entry {
  @import '../helpers/helpers';
  @import '../components/buttons';
  @import '../mixins/media-query';
  @import '../settings/settings';
}
```