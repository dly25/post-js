const {
	src,
	dest } = require('gulp');
const zip = require('gulp-zip');

module.exports = function createZip() {
	return src('build/**/*')
		.pipe(zip('build.zip'))
		.pipe(dest('.'));
}