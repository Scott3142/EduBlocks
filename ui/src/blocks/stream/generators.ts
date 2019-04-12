export default function define(Python: Blockly.BlockGenerators) {
    Python['import_stream'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = "import os
                  myCmd = 'raspivid -o - -t 0 -w 1280 -h 720 -fps 40 -b 8000000 -g 40 | ffmpeg -ac 1 -f alsa -ac 1 -i hw:1,0 -f h264 -i pipe:0 -c:v copy -c:a aac -ab 128k -g 40 -f flv -r 30 rtmp://a.rtmp.youtube.com/live2/rvu9-tj9v-cb5p-29xp'
                  os.system(myCmd)";
      return code;
    };
}
