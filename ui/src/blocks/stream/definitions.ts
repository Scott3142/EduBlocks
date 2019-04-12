export default function define(Blocks: Blockly.BlockDefinitions) {

    Blocks['start_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("start video");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
        this.setTooltip("");
        }
    }

    Blocks['send_stream_key'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('send_stream_key(')
          .appendField(new Blockly.FieldTextInput('0'), 'value')
          .appendField(')');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
        this.setTooltip('Paste your Youtube streaming key in the box.');
        this.setHelpUrl('');
      },
    };

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
