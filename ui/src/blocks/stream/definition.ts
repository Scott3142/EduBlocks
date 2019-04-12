export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_stream'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("import stream");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip(""); 
        }
    };     
}
