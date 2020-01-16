dataset_port = []
dataset_session = []

d3.csv("tunes.csv").then(function(data) {
    for(var i=0; i<data.length;i++){
        var item = data[i]
        var obj = {
            'track_name':item.TrackName,
            'genre':item.Genre,
            'top_ten':[
                {'tune':item.Tune1,'genre':item.Genre1},
                {'tune':item.Tune2,'genre':item.Genre2},
                {'tune':item.Tune3,'genre':item.Genre3},
                {'tune':item.Tune4,'genre':item.Genre4},
                {'tune':item.Tune5,'genre':item.Genre5},
                {'tune':item.Tune6,'genre':item.Genre6},
                {'tune':item.Tune7,'genre':item.Genre7},
                {'tune':item.Tune8,'genre':item.Genre8},
                {'tune':item.Tune9,'genre':item.Genre9},
                {'tune':item.Tune10,'genre':item.Genre10}
            ]
        }
        dataset_port.push(obj)
    }
  })

d3.csv("tunes_session.csv").then(function(data) {
    for(var i=0; i<data.length;i++){
        var item = data[i]
        var obj = {
            'track_name':item.TrackName,
            'genre':item.Genre,
            'top_ten':[
                {'tune':item.Tune1,'genre':item.Genre1},
                {'tune':item.Tune2,'genre':item.Genre2},
                {'tune':item.Tune3,'genre':item.Genre3},
                {'tune':item.Tune4,'genre':item.Genre4},
                {'tune':item.Tune5,'genre':item.Genre5},
                {'tune':item.Tune6,'genre':item.Genre6},
                {'tune':item.Tune7,'genre':item.Genre7},
                {'tune':item.Tune8,'genre':item.Genre8},
                {'tune':item.Tune9,'genre':item.Genre9},
                {'tune':item.Tune10,'genre':item.Genre10}
            ]
        }
        dataset_session.push(obj)
    }
  })

const searchTune = {
    searchText:''
}

var dataset

document.querySelector('#itma').addEventListener("click",function(e){
    document.querySelector('#tuneslist').innerHTML = ''
    dataset = dataset_port
    displayTunesList(dataset, "/Port_wav/")
})  

document.querySelector('#session').addEventListener("click",function(e){
    document.querySelector('#tuneslist').innerHTML = ''
    dataset = dataset_session
    displayTunesList(dataset,"/session_wav/")
    
})  

document.querySelector('form').addEventListener("submit",function(e){
    e.preventDefault()
    searchTune.searchText = e.target.elements.textArea.value
    const idx = displayTrackSummary(dataset,searchTune)
    displayTopTen(dataset,idx)
})