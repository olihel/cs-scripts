/*!
 * cs-scripts
 * https://github.com/olihel/cs-scripts
 *
 * Copyright (c) 2013 Oliver Hellebusch
 * Released under MIT license (https://raw.github.com/olihel/cs-scripts/master/LICENSE)
 */
/*global process:true*/
module.exports = function (grunt) {
  var isDevMode = grunt.option('dev');

  var DIST_FOLDER = 'dist/';
  var DIST_FOLDER_INDESIGN = !isDevMode ? DIST_FOLDER : process.env.HOME + '/Library/Preferences/Adobe InDesign/Version 8.0/de_DE/Scripts/Scripts Panel/';

  var SCRIPTS = [
    {
      id: 'updatePricesInSelectedCells',
      srcFile: 'indesign/update-prices-in-selected-cells/script.js',
      srcLibs: ['lib/json2.js'],
      distFile: DIST_FOLDER_INDESIGN + 'update-prices-in-selected-cells.jsx'
    }
  ];

  var gruntConfig = {
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'indesign/**/*.js'
      ]
    },

    uglify: {
      options: {
        mangle: true,
        compress: {
          'sequences': false
        },
        preserveComments: false, // 'some'
        banner: '/*!\n * cs-scripts\n * https://github.com/olihel/cs-scripts\n *\n * Copyright (c) 2013 Oliver Hellebusch\n * Released under MIT license (https://raw.github.com/olihel/cs-scripts/master/LICENSE)\n */\n'
      }
    },

    removelogging: {
      // default options go here
    }
  };

  SCRIPTS.forEach(function (script) {
    gruntConfig.jshint[script.id] = [script.srcFile];

    gruntConfig.uglify[script.id] = {
      src: script.srcLibs.concat([script.srcFile]),
      dest: script.distFile
    };

    gruntConfig.removelogging[script.id] = {
      src: script.distFile,
      dest: script.distFile
    };

    grunt.registerTask(script.id, ['jshint:' + script.id, 'uglify:' + script.id, 'removelogging:' + script.id]);
  });

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-remove-logging');

  grunt.registerTask('all', ['jshint:all', 'uglify', 'removelogging']);

  grunt.registerTask('default', 'Help screen', function () {
    grunt.log.subhead('Available tasks:\n');
    grunt.log.writeln('grunt all');
    SCRIPTS.forEach(function (script) {
      grunt.log.writeln('grunt ' + script.id);
    });
    grunt.log.writeln('');
    grunt.log.writeln('grunt all --dev');
  });
};
