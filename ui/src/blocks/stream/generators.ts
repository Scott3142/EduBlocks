export default function define(Python: Blockly.BlockGenerators) {
    Python['import_stream'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = "import os\n";
      return code;
    }
}
