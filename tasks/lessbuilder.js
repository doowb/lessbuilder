/*
 * lessbuilder
 * https://github.com/doowb/lessbuilder
 *
 * Copyright (c) 2013 Brian Woodward
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('lessbuilder', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      app: ''
    });

    var tasks = [];

    var i = 0;
    while(i <= 100) {
      var name = 'min_' + i + '_max_' + (i+10);
      grunt.config.set(['random', name], {
        options: {
          min: i,
          max: i+10
        }
      });

      tasks.push('random:' + name);
      i+=10;
    }

    grunt.log.writeln(options.app.cyan);

    grunt.task.run(tasks);
  });

};
