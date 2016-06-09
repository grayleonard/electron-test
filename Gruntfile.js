module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			build: ["build"]
		},
		copy: {
			build: {
				cwd: 'src/',
				src: ['**'],
				dest: 'build',
				expand: true,
			}
		},
		eslint: {
			scripts: {
				src: ['src/**.js']
			},
			options: {
				parser: "babel-eslint"
			}
		},
		shell: {
			electron: {
				command: 'electron .',
			}
		},
		watch: {
			copy: {
				files: ['src/**'],
				tasks: ['copy'],
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('build', ['eslint', 'clean', 'copy']);
	grunt.registerTask('run', ['shell:electron']);
	grunt.registerTask('watch', ['watch']);
}
