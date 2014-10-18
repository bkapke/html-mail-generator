var gruntTasks = [
    "grunt-contrib-watch",
    "grunt-contrib-jshint",
    "grunt-email-builder"
];
/*******************************************************************************************************
 *
 * Begin the grunt module and task configuration 
 * 
 *******************************************************************************************************/ 
 
module.exports = function (grunt) {
    
    //Start the grunt config
    grunt.initConfig({
        emailBuilder: {
          test :{
            files : {
              'html/output.html' : 'source-html/input.html'
            }
          }
        },
        watch : {
            html : {
                files : ['source-html/*.html', 'source-css/*.css'],
                tasks: ['default']
            }
            //css : {
            //    files : ['source-css/*.css'],
            //    tasks: ['default']
            //}
        }
    });
    
    //Loop through and Load all tasks from the task array above
    (function loadTasks() {
      for(var i = 0; i < gruntTasks.length; i++) {
        grunt.loadNpmTasks(gruntTasks[i]);
      }
    })();

    //running 'grunt' will run both tools
    grunt.registerTask('default', ['emailBuilder']);

};