Leaflet-Extended-Div-Icon
=========================

[![License](http://img.shields.io/:license-mit-blue.svg)](http://tonekk.mit-license.org)

L.ExtendedDivIcon - Adds the ability to set the ```id``` and ```style``` of the element created by ```L.DivIcon```


I always found it quite uncomfortable that you can only set classes for ```L.DivIcon```, so I built this thing.
Maybe somebody else needs this.


## Usage example

```javascript
var marker = L.marker(L.latLng(lat, lng), {
                      icon: L.extendedDivIcon({

                        // Set classes here, as usual
                        className: 'class-a class-b class-c',

                        // Set id here (new!)
                        id: 'my-awesome-id'

                        // Set style here (new!)
                        style: {
                          backgroundColor: '#fff'
                        }
                      })
                    });
```
