const { 
	src, 
	dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');
const babel = require('gulp-babel');

module.exports = function dev_js() {
	return src(['src/js/components/**/*.+(js|jsx)', 'src/js/main.js'])
		.pipe(map.init())
		.pipe(babel({
			presets: ['@babel/env', '@babel/preset-react']
		}))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js/'))
		.pipe(bs.stream());
}
