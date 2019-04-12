export default function define(Python: Blockly.BlockGenerators) {
    
    Python['start_video'] = function(block) {
      var code = "import os\nos.system('raspivid -o - -t 0 -w 1280 -h 720 -fps 40 -b 8000000 -g 40 ";
      return code;
    }

    Python['send_stream_key'] = function(block) {
      let text_value = block.getFieldValue('value');
      let code = "| ffmpeg -ac 1 -f alsa -ac 1 -i hw:1,0 -f h264 -i pipe:0 -c:v copy -c:a aac -ab 128k -g 40 -f flv -r 30 rtmp://a.rtmp.youtube.com/live2/" + text_value + "')\n";
      return code;
    }

    Python['stop_stream'] = function(block) {
      var code = "os.system('skill raspivid && skill ffmpeg')\n";
      return code;
    }
}
