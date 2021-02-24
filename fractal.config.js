'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Cor Design System');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, '/src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));


/*
 * Tell Fractal use nunjucks template engine
 */
fractal.components.engine("@frctl/nunjucks"); // register the Nunjucks adapter for your components
fractal.components.set("ext", ".njk"); // look for files with a .nunj file extension