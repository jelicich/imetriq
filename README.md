# imetriq

## Install
Run `npm install`

## Build
Run `gulp` or `gulp --prod` to include minified files in the html

## Watch
Run `gulp watch`

(Node version v13.7.0)

## Project conventions

### Styles
Styles are global and follow the [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

They are structured under `views` and `components` folders.
Views: used to store the custom styles for each section (ie: home, header, contact, etc).
Components: used to store global css components used accross the site following [OOCSS pattern](https://github.com/stubbornella/oocss/wiki)
Only one file is included in the html which is `styles.scss`. All styles must be imported there.
Gulpfile will build the styles based on that file.

### Templates
This projects uses Nunjuks in order to keep files tidy and organized. Each section is saved under `template` directory and they are included in `index.html` using just the name of the template as the path is already configured in the `gulpfile.js`.

### JS Components 
Components are to be in `js/app` directory, this is the place where the gulpfile will look for them. They are created under `imetriq` namespace, must be registered in `app.components` and must have an `init` method. 

### JS Libraries
Third party libraries are to be stored in `js/libs`. Gulpfile will collect all the libraries and concatenate them into one single file.

### About copy directory
Everything in this directory will be copied as it is to the `dist` folder when building. 
Here you can find the service to handle the contact form.
