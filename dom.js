
//function to display list of tunes
var db = ''

const displayTunesList = function(dataset, str){
    db = str
    console.log(db)
    document.querySelector('#tuneslist').innerHTML = ''
    var tbl = document.createElement('table')
    tbl.setAttribute(
        "class","table table-responsive"
    )
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.textContent = 'Tune'
    var col2 = document.createElement('td')
    col2.textContent = 'Genre'
    document.querySelector('#tunesList').appendChild(tbl)
    tbl.appendChild(row)
    row.appendChild(col1)
    row.appendChild(col2)
    for(var i=0; i<dataset.length;i++){
        var newrow = document.createElement('tr')
        var newcol1 = document.createElement('td')
        newcol1.textContent = dataset[i].track_name
        var newcol2 = document.createElement('td')
        newcol2.textContent = dataset[i].genre
        tbl.appendChild(newrow)
        newrow.appendChild(newcol1)
        newrow.appendChild(newcol2)
    }
}

//function to display selected track summary

const displayTrackSummary = function(dataset,searchTune){
    document.querySelector('#tuneslist').innerHTML = ''
    for(var i=0;i<dataset.length;i++){
        if(dataset[i].track_name.toLowerCase().includes(searchTune.searchText.toLowerCase())){
            const summary = document.createElement('h3')
            summary.textContent = `Track-Name: "${dataset[i].track_name}" Genre:"${dataset[i].genre}"`
            document.querySelector('#tuneslist').appendChild(summary)

            const myAudio = document.createElement('audio')
            myAudio.controls = true
            const mySource = document.createElement('source')
            var track = `${db}${dataset[i].track_name}.wav`
            mySource.src = track
            mySource.type = "audio/wav"
            myAudio.appendChild(mySource)
            document.querySelector('#tuneslist').appendChild(myAudio)

            return(i)
        }
    }
}

const displayTopTen = function(dataset,idx){
    //header
    const header = document.createElement('h3')
    header.textContent = 'Top ten similar songs are:'
    document.querySelector('#tuneslist').appendChild(header)

    //table
    const tbl = document.createElement('table')
    tbl.setAttribute(
        "class","table table-responsive"
    )
    const row = document.createElement('tr')
    const col1 = document.createElement('td')
    col1.textContent = "Track Name"
    const col2 = document.createElement('td')
    col2.textContent = "Genre"
    const col3 = document.createElement('td')
    col3.textContent = "Play Tune"
    tbl.appendChild(row)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    for(var i=0;i<dataset[idx].top_ten.length;i++){
        const newrow = document.createElement('tr')
        const newcol1 = document.createElement('td')
        newcol1.textContent = dataset[idx].top_ten[i].tune
        const newcol2 = document.createElement('td')
        newcol2.textContent = dataset[idx].top_ten[i].genre
        //audio file
        const myAudio = document.createElement('audio')
        myAudio.controls = true
        const mySource = document.createElement('source')
        var track = `${db}${dataset[idx].top_ten[i].tune}.wav`
        mySource.src = track
        mySource.type = "audio/wav"
        myAudio.appendChild(mySource)
        document.querySelector('#tuneslist').appendChild(myAudio)



        tbl.appendChild(newrow)
        newrow.appendChild(newcol1)
        newrow.appendChild(newcol2)
        newrow.appendChild(myAudio)
    }
    document.querySelector('#tuneslist').appendChild(tbl)
}