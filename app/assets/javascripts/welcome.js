jQuery(function(){
    $('#portfolio').mixItUp({
        transitionSpeed: 450,

        callbacks: {
            onMixFail: function(state){
                alert('No elements found matching '+state.activeFilter);
            },
            onMixEnd: function(state){
                console.log(state.activeFilter);
            }
        }
    });

    handler = Gmaps.build('Google');
      handler.buildMap({ provider: { maxZoom: 16}, internal: {id: 'map'}}, function(){
        markers = handler.addMarkers([
          {
            lat: -34.82930922,
            lng: -55.96452579
          }
        ]);
        handler.bounds.extendWith(markers);
        handler.fitMapToBounds();
      });
});