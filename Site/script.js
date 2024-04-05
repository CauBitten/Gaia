function initMap() {
    var myLatLng = { lat: -8.042959, lng: -34.920371 };

    var mapOptions = {
        zoom: 12,
        center: myLatLng
    };
    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    map.addListener("click", function(event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();

        buscarNomeLocal(latitude, longitude);
    });
}

function buscarNomeLocal(latitude, longitude) {
    var geocoder = new google.maps.Geocoder();
    var latlng = { lat: latitude, lng: longitude };

    geocoder.geocode({ 'location': latlng }, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                // Obtém o nome do local a partir dos resultados da geocodificação reversa
                var nomeLocal = results[0].formatted_address;
                
                // Atualiza o texto na página com o nome do local
                document.getElementById('areaSelecionada').innerText = nomeLocal;
            } else {
                console.log('Nenhum resultado encontrado');
            }
        } else {
            console.log('Geocoder falhou devido a: ' + status);
        }
    });
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}
