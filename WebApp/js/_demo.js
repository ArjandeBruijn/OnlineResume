 

function DemoFinished(metaInfo, results) {    
    $('#meta').append('Time spent: ' + (finished - started) + 'ms.' + (metaInfo ? '<br>' + metaInfo : ''));
   
}

function Read() {

    var m = MalinauMap;

    $('#meta').html('');


    if ($('#file-select')[0].files.length == 0 || $('#file-select')[0].files[0] == null) {
        $('#meta').html('Please, choose file!');
        return null;
    }
    var file = $('#file-select')[0].files[0];

    //var file = InitDemo('Read all lines');
    if (!file) return;
    
    var navigator = new FileNavigator(file);
    
    var indexToStartWith = 0;
    
    var countLines = 0;

    navigator.readSomeLines(indexToStartWith, function linesReadHandler(err, index, lines, eof, progress) {
        if (err) {
            finished = new Date();
            DemoFinished('Error: ' + err);
            return;
        }

        countLines += lines.length;

        SetPixelLines(lines);

        if (eof) {
            finished = new Date();
            DemoFinished('Total ' + countLines + ' lines readed');
            return;
        }

        navigator.readSomeLines(index + lines.length, linesReadHandler);
    });
}
$('#read').click(Read);

 

 












