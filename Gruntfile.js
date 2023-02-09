module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: ['src/scripts/module.js', 'src/**/*.js'],
                dest: 'dist/app.js',
            },
        },
        babel: {
            options: {
                sourceMap: false,
                presets: [["@babel/preset-env", {
                    debug: true,
                    exclude: [
                        // "transform-async-to-generator",
                        // "transform-regenerator",
                        // "proposal-async-generator-functions"
                    ]
                }]],
                plugins: ["transform-angular-async"],
                compact: false
            },
            dist: {
                files: {
                    "dist/app.js": 'dist/app.js',
                },
            },
        },
        watch: {
            src: {
                files: ["src/**/*.js"],
                tasks: ["default"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("default", [
        "concat",
        "babel",
    ]);

    grunt.registerTask("watcher", [
        "watch"
    ]);
}