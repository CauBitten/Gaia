function initMap() {
    var myLatLng = { lat: -8.042959, lng: -34.920371 };

    var mapOptions = {
        zoom: 12,
        center: myLatLng
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Meu Marcador'
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
key = AIzaSyA_NMGLIkSTXvTFV0TGwYJfmo8iAPMPQEU