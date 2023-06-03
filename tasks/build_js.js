const { 
	src, 
	dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function build_js() {
	return src(['src/js/components/**/*.+(js|jsx)', 'src/js/main.js'])
		.pipe(babel({
			presets: ['@babel/env', '@babel/preset-react'] // добавляем пресет для React
		}))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js/'));
}
