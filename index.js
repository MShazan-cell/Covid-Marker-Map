function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {

            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases=element.infected;
                if(cases>255){
                    color="rgb(255,0,0)";
                }
                else{
                    color=`rgb(${cases},0,0)`;
                }
                new maplibregl.Marker({
                    color: color
                })
            .setLngLat([longitude, latitude])
            .addTo(map);
            });
            
        })
}
//For keep updating the map after some time
//let interval=20000;
//setInterval(updateMap,interval);
updateMap();