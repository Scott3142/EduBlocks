export default function define(Python: Blockly.BlockGenerators) {
    Python['import_stream'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = "import os\n";
      return code;
    }
    
    Python['start_stream'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = "os.system('bash /home/pi/software/raspberrybees/runstream.sh')\n";
      return code;
    }

    Python['stop_stream'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = "os.system('skill raspivid && skill ffmpeg')\n";
      return code;
    }
}
