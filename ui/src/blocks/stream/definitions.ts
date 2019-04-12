export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_stream'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("import stream");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
        this.setTooltip(""); 
        }
    }

    Blocks['start_stream'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("start stream");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
        this.setTooltip("");
        }
    }

    Blocks['stop_stream'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("stop stream");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
        this.setTooltip("");
        }
    }

}
