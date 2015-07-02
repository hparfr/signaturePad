# signaturePad
A very simple signature pad in ionic

This project is based on [HTML5 implementation with canvas : szimek/signature_pad](https://github.com/szimek/signature_pad).

When hitting the "Save" button, a png (in base64) is saved on the fileSystem.

## Install

    $ git clone https://github.com/hparfr/signaturePad
    $ cd signaturePad
    $ bower install
    $ ionic platform add android
    
    # Build and run to a connected Android device
    $ ionic run android
    
    # Build and deploy to android -> read ionic docs


## More info

The file is saved in __cordova.file.externalDataDirectory/signaturePad.png_dataURL__

For converting this file in png: 

- 1) remove _data:image/png;base64,_ from the beggining of the file
- 2) apply a base64 decode


Oneliner

    $ cat signaturePad.png_dataURL | sed "s#data:image/png;base64,##" | base64 --decode > signaturePad.png

