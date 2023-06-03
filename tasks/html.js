const {
	src,
	dest
} = require('gulp');
//const include = require('gulp-file-include');
const bs = require('browser-sync');
const pug = require('gulp-pug'); // Добавляем пакет gulp-pug

module.exports = function html() {
	return src(['src/**/*.pug', '!src/pug/**/*.pug']) //.html
		.pipe(pug({ pretty: true })) // Компилируем Pug в HTML
		//.pipe(include())
		.pipe(dest('build'))
		.pipe(dest('src'))
		.pipe(bs.stream())
}