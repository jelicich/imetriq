# imetriq

## Install
Run `npm install`

## Build
Run `gulp`

## Watch
Run `gulp watch`

## Project conventions

### Styles
Styles are global and follow the [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

They are structured under `views` and `components` folders.
Views: used to store the custom styles for each section (ie: home, header, contact, etc).
Components: used to store global css components used accross the site following [OOCSS pattern](https://github.com/stubbornella/oocss/wiki)

### Templates
This projects uses Nunjuks in order to keep files tidy and organized. Each section is saved under `template` directory and they are included in `index.html` using just the name of the template as the path is already configured in the `gulpfile.js`.
