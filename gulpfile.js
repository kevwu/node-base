var gulp = require("gulp")
var scss = require("gulp-sass")
var babel = require("gulp-babel")
var rename = require("gulp-rename")
var sourcemaps = require("gulp-sourcemaps")

gulp.task("js", function () {
		return gulp.src("./js/*.js")
			.pipe(babel({
							presets: ['es2015'],
							sourceMaps: "inline",
						}))
			.on("error", swallowError)
			.pipe(gulp.dest("./static/js/"))
})

gulp.task("scss", function () {
		return gulp.src("./scss/*.scss")
			.pipe(sourcemaps.init())
			.pipe(scss().on("error", scss.logError))
			.pipe(sourcemaps.write())
			.pipe(rename({
							extname: ".css"
						}))
			.pipe(gulp.dest("./static/css/"))
})

gulp.task("watch", ["js", "scss"], function () {
		gulp.watch("./scss/*.scss", ['scss'])
		gulp.watch("./js/*.js", ['js'])
})

// watch by default
gulp.task("default", ["watch"])

function swallowError(error) {
	console.log(error.toString())
 	this.emit('end')
}  
