/**
 * Created by stephanegarnier on 17/04/2014.
 */

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-istanbul-coverage');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');

    var path = require('path');

    grunt.initConfig({
        globals: {
            releasePath: 'build/release',
            debugPath: 'build/debug',
            appFolder: 'app',
            staticFiles: [
                './**/*.html',
                'img/**',
                'fonts/**',
                '*.json'
            ]
        },
        useminPrepare: {
            release: '<%= globals.appFolder %>/index.html',
            debug: '<%= globals.appFolder %>/index.html',
            options: {
                flow: {
                    release: {
                        steps: {
                            'js': [
                                {
                                    name: 'karma',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            filesDef = {src: []};

                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        context.options.generated.options = {
                                            files: [ filesDef.src,
                                                'bower_components/angular-mocks/angular-mocks.js',
                                                'test/unit/<%= globals.appFolder %>/**/*.js'
                                            ],
                                            preprocessors: {
                                                '!(bower_components|node_modules|externalJS|test|build)/**/*.js': ['coverage']
                                            },
                                            reporters: ['progress', 'coverage', 'html'],
                                            htmlReporter: {
                                                'outputFile': 'test/coverage/<%= globals.appFolder %>/units.html'
                                            },
                                            coverageReporter: {
                                                reporters: [
                                                    {type: ['html'], dir: 'test/coverage/', subdir: '<%= globals.appFolder %>/'},
                                                    {type: ['json'], dir: 'test/coverage/', subdir: '<%= globals.appFolder %>/'}
                                                ]}
                                        };

                                        context.options.minified = {
                                            options: {
                                                files: [ path.join('<%= globals.releasePath %>', block.dest),
                                                    'bower_components/angular-mocks/angular-mocks.js',
                                                    'test/unit/<%= globals.appFolder %>/**/*.js'
                                                ]
                                            }
                                        }
                                        context.outFiles = context.inFiles;
                                        context.outDir = context.inDir;

                                        return cfg;
                                    }
                                },
                                {
                                    name: 'coverage',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []};

                                        context.options.options = {
                                            thresholds: {
                                                'statements': 90,
                                                'branches': 90,
                                                'lines': 90,
                                                'functions': 90
                                            },
                                            dir: 'coverage/<%= globals.appFolder %>',
                                            root: 'test'
                                        };

                                        context.outFiles = context.inFiles;
                                        context.outDir = context.inDir;

                                        return cfg;
                                    }
                                },
                                'concat',
                                {
                                    name: 'uglify',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.releasePath %>', block.dest),
                                            filesDef = {};


                                        filesDef.dest = outfile;
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        cfg.files.push(filesDef);
                                        //context.outFiles = [block.dest];
                                        return cfg;
                                    }
                                }
                            ],
                            'css': ['concat',
                                {
                                    name: 'cssmin',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.releasePath %>', block.dest),
                                            filesDef = {};


                                        filesDef.dest = outfile;
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        cfg.files.push(filesDef);
                                        //context.outFiles = [block.dest];
                                        return cfg;
                                    }
                                }],
                            'less': [
                                {
                                    name: 'less',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.releasePath %>', block.dest),
                                            filesDef = {};

                                        context.options.generated.options = {
                                            cleancss: true
                                        };

                                        filesDef.dest = outfile;
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        cfg.files.push(filesDef);
                                        return cfg;
                                    }
                                }
                            ]
                        },
                        post: {

                        }
                    },
                    debug: {
                        steps: {
                            'js': [
                                {
                                    name: 'karma',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            filesDef = {src: []};

                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        context.options.generated.options = {
                                            files: [ filesDef.src,
                                                'bower_components/angular-mocks/angular-mocks.js',
                                                'test/unit/<%= globals.appFolder %>/**/*.js'
                                            ],
                                            preprocessors: {
                                                '!(bower_components|node_modules|externalJS|test|build)/**/*.js': ['coverage']
                                            },
                                            reporters: ['progress', 'coverage', 'html'],
                                            htmlReporter: {
                                                'outputFile': 'test/coverage/<%= globals.appFolder %>/units.html'
                                            },
                                            coverageReporter: {
                                                reporters: [
                                                    {type: ['html'], dir: 'test/coverage/', subdir: '<%= globals.appFolder %>/'},
                                                    {type: ['json'], dir: 'test/coverage/', subdir: '<%= globals.appFolder %>/'}
                                                ]}
                                        };
                                        context.outFiles = context.inFiles;
                                        context.outDir = context.inDir;

                                        return cfg;
                                    }
                                },
                                {
                                    name: 'coverage',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []};

                                        context.options.options = {
                                            thresholds: {
                                                'statements': 90,
                                                'branches': 90,
                                                'lines': 90,
                                                'functions': 90
                                            },
                                            dir: 'coverage/<%= globals.appFolder %>',
                                            root: 'test'
                                        };

                                        context.outFiles = context.inFiles;
                                        context.outDir = context.inDir;

                                        return cfg;
                                    }
                                },
                                {
                                    name: 'copy',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.debugPath %>/<%= globals.appFolder %>', block.dest),
                                            filesDef = {};


                                        filesDef.dest = '<%= globals.debugPath %>/';
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });

                                        cfg.files.push(filesDef);
                                        return cfg;
                                    }
                                }
                            ],
                            'css': [
                                {
                                    name: 'copy',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.debugPath %>/<%= globals.appFolder %>', block.dest),
                                            filesDef = {};


                                        filesDef.dest = '<%= globals.debugPath %>/';
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });
                                        context.options.generatedcss = {files: [filesDef]};
                                        //cfg.files.push(filesDef);
                                        //context.outFiles = [block.dest];
                                        return cfg;
                                    }
                                }
                            ],
                            'less': [
                                {
                                    name: 'copy',
                                    createConfig: function (context, block) {
                                        var cfg = {files: []},
                                            outfile = path.join('<%= globals.debugPath %>/<%= globals.appFolder %>', block.dest),
                                            filesDef = {};


                                        filesDef.dest = '<%= globals.debugPath %>/';
                                        filesDef.src = [];
                                        context.inFiles.forEach(function (inFile) {
                                            filesDef.src.push(path.join(context.inDir, inFile));
                                        });
                                        context.options.generatedless = {files: [filesDef]};

                                        return cfg;
                                    }
                                }
                            ]
                        },
                        post: {

                        }
                    }
                }
            }
        },
        usemin: {
            html: '<%= globals.releasePath %>/index.html',
            options: {
                blockReplacements: {
                    less: function (block) {
                        return '<link rel=\"stylesheet\" href=\"' + block.dest + '\"/>';
                    }
                }
            }
        },
        copy: {
            release: {
                files: [
                    {expand:true, cwd:'<%= globals.appFolder %>/', src: ['<%= globals.staticFiles %>'], dest: '<%= globals.releasePath %>'}
                ]
            },
            debug: {
                files: [
                    {expand:true, cwd:'<%= globals.appFolder %>/', src: ['<%= globals.staticFiles %>'], dest: '<%= globals.debugPath %>/<%= globals.appFolder %>/'},
                    {src: ['bower_components/less/dist/less-1.7.4.min.js'], dest: '<%= globals.debugPath %>/'},
                    {src: ['index.html'], dest: '<%= globals.debugPath %>/'}
                ]
            }
        },
        'karma': {
            'options': {
                'singleRun': true,
                'reporters': ['progress'],

                'frameworks': ['jasmine'],

                'browsers': ['PhantomJS'],

                'plugins': [
                    'karma-phantomjs-launcher',
                    'karma-jasmine',
                    'karma-coverage',
                    'karma-htmlfile-reporter'
                ]

            }
        },
        clean: {
            release: ['<%= globals.releasePath %>/*'],
            debug: ['<%= globals.debugPath %>/*']
        }
    });
    grunt.registerTask('release', [
        'clean:release',
        'useminPrepare:release',
        'karma:generated',
        'coverage:generated',
        'concat:generated',
        'uglify:generated',
        'karma:minified',
        'copy:release',
        'cssmin:generated',
        'less:generated',
        'usemin'
    ]);
    grunt.registerTask('debug', [
        'clean:debug',
        'useminPrepare:debug',
        'karma:generated',
        'coverage:generated',
        'copy:debug',
        'copy:generated',
        'copy:generatedcss',
        'copy:generatedless'
    ]);
    grunt.registerTask('test', [
        'useminPrepare:debug',
        'karma:generated',
        'coverage:generated'
    ]);

};