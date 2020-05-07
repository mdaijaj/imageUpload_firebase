var storage=firebase.storage();
var storageRef=storage.ref();

$('List').find('tbody').html('');

var i=0;
storageRef.child('gs://image-upload-9acfb.appspot.com').listAll()
.then((result)=>{
    result.items.forEach(imageRef => {
        console.log("image reference..")
        // console.log(element.toString())
        i+=1;
        displayImage(i, imageRef);
    });
});

function displayImage(row, images) {
    images.getDownloadloadURL().then((url)=>{
        console.log(url)
        let new_html='';
        new_html+='<tr>';
            new_html+='<td>';
            new_html+= row;
            new_html+= '</td>'

            new_html+='<td>';
            new_html+='<img src="' +url+ '" width="100px" style="float: right">';
            new_html+= '</td>'
        new_html+='</tr>';

        $('#List').find('tbody').append(new_html); 

    })
}  