$(document).ready(function(){

    $('#submit').click(function(){

        $('#albums').html("")
        var artist = $('#artist').val()

        console.log('https://api.deezer.com/search/artist?q=' + artist)

        $.ajax({
            type: 'GET',
            url: 'https://api.deezer.com/search/artist?q=' + artist + '&output=jsonp',
            dataType: 'jsonp',
            success: function(data){
                $('#result').html(
                    "<h2>" + data.data[0].name + "</h2>"
                )

                $.ajax({
                    type: 'GET',
                    url: 'https://api.deezer.com/artist/' + data.data[0].id + '/albums&output=jsonp',
                    dataType: 'jsonp',
                    success: function(albums){
                        
                        for(album in albums.data){
                          
                            $('#albums').append(

                                "<tr>"
                                + "<td>" + albums.data[album].title + "</td>"
                                + "<td><img class='img_cover' src='" + albums.data[album].cover + "'</td>"
                                + "<td>"+ albums.data[album].release_date + "</td>"
                                + "<td>"+ albums.data[album].record_type + "</td></tr>"
                       
                            ) // FIN APPEND
                        } // FIN FOR

                    } //FIN SUCCESS2

                }) // FIN AJAX2

            }//FIN SUCCESS1

        }) // FIN AJAX1

    }) // FIN CLICK

}) // FIN DOCUEMENT READY

    