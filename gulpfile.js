var gulp=require('gulp');
var gulp=require('gulp-sass');
gulp.task('cope-index',function(){
	gulp.src('index.html')	
	.pipe(gulp.dest('dist'));
})


