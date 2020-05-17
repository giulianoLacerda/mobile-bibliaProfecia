import React, { useLayoutEffect, useState,  } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-ionicons';

import styles from '../home/styles';

export default function Home(props) {
    const { count } = props;
    const people = [
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Nicholas",
            "last": "Ray"
          },
          "location": {
            "street": {
              "number": 9234,
              "name": "E Sandy Lake Rd"
            },
            "city": "Tweed",
            "state": "Western Australia",
            "country": "Australia",
            "postcode": 4774,
            "coordinates": {
              "latitude": "-88.6657",
              "longitude": "-21.7945"
            },
            "timezone": {
              "offset": "+10:00",
              "description": "Eastern Australia, Guam, Vladivostok"
            }
          },
          "email": "nicholas.ray@example.com",
          "login": {
            "uuid": "bbfe3ef8-b804-42e3-b412-6f737473ae79",
            "username": "beautifulcat473",
            "password": "cricket",
            "salt": "TFbsj6nS",
            "md5": "668f61323cfde6c42bc32f251a6c676f",
            "sha1": "5168ffce099e7245b6362602d2d8f95be066176b",
            "sha256": "05270311055cd0490e3592f30b3ca72c06422c602eca18afe57079621c861013"
          },
          "dob": {
            "date": "1996-01-31T22:18:03.620Z",
            "age": 24
          },
          "registered": {
            "date": "2010-12-03T22:09:58.762Z",
            "age": 10
          },
          "phone": "04-2416-9469",
          "cell": "0425-910-471",
          "id": {
            "name": "TFN",
            "value": "378740102"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/20.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
          },
          "nat": "AU"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Simão",
            "last": "Silva"
          },
          "location": {
            "street": {
              "number": 1592,
              "name": "Rua Onze "
            },
            "city": "Campo Grande",
            "state": "Rio de Janeiro",
            "country": "Brazil",
            "postcode": 80249,
            "coordinates": {
              "latitude": "73.5347",
              "longitude": "-91.7100"
            },
            "timezone": {
              "offset": "+6:00",
              "description": "Almaty, Dhaka, Colombo"
            }
          },
          "email": "simao.silva@example.com",
          "login": {
            "uuid": "8f206b25-ceb7-4021-8712-eec273bc9c96",
            "username": "bigfrog139",
            "password": "bamboo",
            "salt": "JXJxR4vS",
            "md5": "cf1ca36b9ab9c645131d063408a7d450",
            "sha1": "c038bb1d87dd6ebd783fbf522b48a7fc1d62f022",
            "sha256": "fc6723fca6d87104b0dbf35fed66c31a8aebca5ff2b5f2c142cf045eed7c2989"
          },
          "dob": {
            "date": "1945-12-12T09:00:25.975Z",
            "age": 75
          },
          "registered": {
            "date": "2012-06-11T21:59:12.503Z",
            "age": 8
          },
          "phone": "(10) 6599-8919",
          "cell": "(85) 8215-4877",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/91.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
          },
          "nat": "BR"
        },
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Megan",
            "last": "Mackay"
          },
          "location": {
            "street": {
              "number": 7714,
              "name": "Dieppe Ave"
            },
            "city": "Jasper",
            "state": "Northwest Territories",
            "country": "Canada",
            "postcode": "B8K 7I3",
            "coordinates": {
              "latitude": "37.3522",
              "longitude": "140.8424"
            },
            "timezone": {
              "offset": "-2:00",
              "description": "Mid-Atlantic"
            }
          },
          "email": "megan.mackay@example.com",
          "login": {
            "uuid": "5b114009-e20b-49ff-8e2f-d9d3287dcc29",
            "username": "orangelion708",
            "password": "sporting",
            "salt": "xUbmtEsD",
            "md5": "85526d9d5a68355d14a10dc7f671b354",
            "sha1": "fdeda54d4f39106baeb34674aacd14e5e57ff7f3",
            "sha256": "dd6ef5e18c5fba013d6021594b500ea1bbba130a884905b75c63d3c00f7dfd4e"
          },
          "dob": {
            "date": "1961-09-27T14:04:39.554Z",
            "age": 59
          },
          "registered": {
            "date": "2017-01-10T03:29:38.742Z",
            "age": 3
          },
          "phone": "100-833-6279",
          "cell": "624-019-3635",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/2.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
          },
          "nat": "CA"
        },
        {
          "gender": "female",
          "name": {
            "title": "Mrs",
            "first": "یلدا",
            "last": "گلشن"
          },
          "location": {
            "street": {
              "number": 9616,
              "name": "تقوی"
            },
            "city": "کاشان",
            "state": "چهارمحال و بختیاری",
            "country": "Iran",
            "postcode": 14725,
            "coordinates": {
              "latitude": "54.2429",
              "longitude": "41.3832"
            },
            "timezone": {
              "offset": "+5:45",
              "description": "Kathmandu"
            }
          },
          "email": "yld.glshn@example.com",
          "login": {
            "uuid": "16c57656-b035-4747-989a-5d0111d55a4b",
            "username": "ticklishswan340",
            "password": "palermo",
            "salt": "MD7xjb5B",
            "md5": "566cdbcf8e4697559f83065c6a460b27",
            "sha1": "5a59269e9855feb1ec82aad2f46531d2f5fee56c",
            "sha256": "7814729e9c3b2aa74bba4cf89058b3bef46086b2b7effbdf5504f799248a74de"
          },
          "dob": {
            "date": "1988-02-09T16:26:15.055Z",
            "age": 32
          },
          "registered": {
            "date": "2019-02-23T06:21:18.127Z",
            "age": 1
          },
          "phone": "061-41457632",
          "cell": "0904-832-9882",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/21.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
          },
          "nat": "IR"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Arron",
            "last": "Young"
          },
          "location": {
            "street": {
              "number": 3508,
              "name": "St. John’S Road"
            },
            "city": "Gloucester",
            "state": "Mid Glamorgan",
            "country": "United Kingdom",
            "postcode": "U3 7BX",
            "coordinates": {
              "latitude": "81.4165",
              "longitude": "58.8392"
            },
            "timezone": {
              "offset": "+5:45",
              "description": "Kathmandu"
            }
          },
          "email": "arron.young@example.com",
          "login": {
            "uuid": "3601e5a5-90d6-4c55-abff-8cf2dc0a7e62",
            "username": "beautifulbutterfly146",
            "password": "rommel",
            "salt": "fBbZl6mk",
            "md5": "c83b29ba4c666f9dee0bbc46c9aa2457",
            "sha1": "d9a64da87898be18cdfddb0022d04e56a721c116",
            "sha256": "d81536c3a811b5ebd20ddf808a800116e6bdf5a0fe2a29e9ce657e8fd054f62d"
          },
          "dob": {
            "date": "1956-08-03T04:45:55.132Z",
            "age": 64
          },
          "registered": {
            "date": "2018-06-11T20:16:57.202Z",
            "age": 2
          },
          "phone": "01861 45882",
          "cell": "0761-859-927",
          "id": {
            "name": "NINO",
            "value": "PM 78 01 42 D"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/48.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
          },
          "nat": "GB"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Jimmie",
            "last": "Freeman"
          },
          "location": {
            "street": {
              "number": 9227,
              "name": "Hamilton Ave"
            },
            "city": "Bunbury",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 6464,
            "coordinates": {
              "latitude": "-86.3804",
              "longitude": "146.9735"
            },
            "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
            }
          },
          "email": "jimmie.freeman@example.com",
          "login": {
            "uuid": "7ade4cf3-a162-479b-b631-7d64ede3930f",
            "username": "silverdog157",
            "password": "222333",
            "salt": "qoZIBuyk",
            "md5": "dfec3273648242e2e772313c736cdd68",
            "sha1": "08d4c65b1ac1b972d32277bdcb7a03e335952b1e",
            "sha256": "7dfdb3534537091cada34e7d0d4bfab57c558b61fd86e0c82b6335f3985a3453"
          },
          "dob": {
            "date": "1947-06-22T07:01:47.325Z",
            "age": 73
          },
          "registered": {
            "date": "2010-04-03T12:07:25.297Z",
            "age": 10
          },
          "phone": "09-7614-3788",
          "cell": "0404-535-917",
          "id": {
            "name": "TFN",
            "value": "423053307"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/7.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/7.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/7.jpg"
          },
          "nat": "AU"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Anatol",
            "last": "Tröger"
          },
          "location": {
            "street": {
              "number": 7032,
              "name": "Bergstraße"
            },
            "city": "Norderstedt",
            "state": "Thüringen",
            "country": "Germany",
            "postcode": 18224,
            "coordinates": {
              "latitude": "45.2590",
              "longitude": "-53.7055"
            },
            "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
            }
          },
          "email": "anatol.troger@example.com",
          "login": {
            "uuid": "c5aa170d-2e32-4c01-83e7-da279de36aae",
            "username": "greendog187",
            "password": "nevada",
            "salt": "yFfawrH2",
            "md5": "cba98e6a36777d780f51117950f239ba",
            "sha1": "8287a260219159d1c18285c2339058d3cb78558b",
            "sha256": "f31ad9de93cc27bb46438c910b6f87a51233585857db03afa765ab48d526e98f"
          },
          "dob": {
            "date": "1965-08-08T13:07:24.690Z",
            "age": 55
          },
          "registered": {
            "date": "2008-05-12T17:49:11.219Z",
            "age": 12
          },
          "phone": "0336-9916763",
          "cell": "0172-6736232",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
          },
          "nat": "DE"
        },
        {
          "gender": "female",
          "name": {
            "title": "Ms",
            "first": "کیانا",
            "last": "نكو نظر"
          },
          "location": {
            "street": {
              "number": 7273,
              "name": "مصطفی خمینی"
            },
            "city": "نیشابور",
            "state": "کهگیلویه و بویراحمد",
            "country": "Iran",
            "postcode": 13705,
            "coordinates": {
              "latitude": "-82.7234",
              "longitude": "-87.2797"
            },
            "timezone": {
              "offset": "-12:00",
              "description": "Eniwetok, Kwajalein"
            }
          },
          "email": "khyn.nkwnzr@example.com",
          "login": {
            "uuid": "03dea941-4c9c-4910-9df0-6b1e3c1f36fa",
            "username": "whiteladybug655",
            "password": "shai",
            "salt": "au85M0I5",
            "md5": "1b1531238f7fb75e124e26895cc58f08",
            "sha1": "d04b04cf7340a861687b5abb00b6ac2a727b6fee",
            "sha256": "a9c1150ff3b46b864fb6a6b1084414c9ac4a36965a7752953f928b3953207249"
          },
          "dob": {
            "date": "1948-12-22T10:33:03.132Z",
            "age": 72
          },
          "registered": {
            "date": "2016-07-04T03:19:10.430Z",
            "age": 4
          },
          "phone": "042-72370227",
          "cell": "0937-748-9948",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
          },
          "nat": "IR"
        },
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Madison",
            "last": "Mitchell"
          },
          "location": {
            "street": {
              "number": 3164,
              "name": "Disputed Rd"
            },
            "city": "Chatham",
            "state": "Nova Scotia",
            "country": "Canada",
            "postcode": "R9T 5B6",
            "coordinates": {
              "latitude": "-82.8342",
              "longitude": "15.9193"
            },
            "timezone": {
              "offset": "+2:00",
              "description": "Kaliningrad, South Africa"
            }
          },
          "email": "madison.mitchell@example.com",
          "login": {
            "uuid": "85779f77-4f91-47cf-890f-52fe72da7895",
            "username": "sadostrich197",
            "password": "abnormal",
            "salt": "OAuYs1sf",
            "md5": "fbc4a8fbf6bd15d249e2bca1143dc009",
            "sha1": "d16686eefcaf082a4fcb8c64e4a2a8df06bb4b17",
            "sha256": "7b7d0e1adca8c1e56d99a97edf189aa5c3c55f6b620b3d1593ee7de0f9e4ec04"
          },
          "dob": {
            "date": "1973-09-30T15:33:07.490Z",
            "age": 47
          },
          "registered": {
            "date": "2012-05-15T20:05:31.138Z",
            "age": 8
          },
          "phone": "829-209-0659",
          "cell": "582-657-3438",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
          },
          "nat": "CA"
        },
        {
          "gender": "female",
          "name": {
            "title": "Mrs",
            "first": "Christie",
            "last": "Bunnik"
          },
          "location": {
            "street": {
              "number": 7278,
              "name": "Andelhof"
            },
            "city": "Wolsum",
            "state": "Overijssel",
            "country": "Netherlands",
            "postcode": 15671,
            "coordinates": {
              "latitude": "2.7451",
              "longitude": "-121.4597"
            },
            "timezone": {
              "offset": "+8:00",
              "description": "Beijing, Perth, Singapore, Hong Kong"
            }
          },
          "email": "christie.bunnik@example.com",
          "login": {
            "uuid": "108ea691-5c7e-4b57-9005-b4081ee84a09",
            "username": "bluepanda970",
            "password": "citroen",
            "salt": "pisVZCsU",
            "md5": "0d64b16ab4e75c0d3df46bb09749b7fd",
            "sha1": "b3c06f4eca956ddcb80013b02cc474455e1cbbb4",
            "sha256": "6cd0b89e420fc19f59d5d75ccd8ef7d6d18e7f1d5f9b323f44cef058bac210c0"
          },
          "dob": {
            "date": "1975-08-03T19:39:33.517Z",
            "age": 45
          },
          "registered": {
            "date": "2003-10-13T22:48:31.854Z",
            "age": 17
          },
          "phone": "(642)-259-7930",
          "cell": "(222)-481-3265",
          "id": {
            "name": "BSN",
            "value": "68059283"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/67.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
          },
          "nat": "NL"
        },
        {
          "gender": "male",
          "name": {
            "title": "Monsieur",
            "first": "Gregory",
            "last": "Guillot"
          },
          "location": {
            "street": {
              "number": 6656,
              "name": "Rue Bataille"
            },
            "city": "Farnern",
            "state": "Ticino",
            "country": "Switzerland",
            "postcode": 4741,
            "coordinates": {
              "latitude": "-61.8841",
              "longitude": "141.2452"
            },
            "timezone": {
              "offset": "+3:00",
              "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
          },
          "email": "gregory.guillot@example.com",
          "login": {
            "uuid": "9fe4bc5b-1d5f-415b-a717-054b0451e1fb",
            "username": "organicfrog535",
            "password": "1010",
            "salt": "rJ7N2GK2",
            "md5": "45a05d71d284b939b10e02835f79f9dc",
            "sha1": "f66a2fd9df78e2b675b89915bbda45a2ff4f9f12",
            "sha256": "c40cc2571c039ad2c291dd1b95528c77525718918a3605498df5898c7c16c066"
          },
          "dob": {
            "date": "1945-06-24T11:20:46.413Z",
            "age": 75
          },
          "registered": {
            "date": "2010-05-17T23:34:50.060Z",
            "age": 10
          },
          "phone": "077 536 36 32",
          "cell": "079 813 15 02",
          "id": {
            "name": "AVS",
            "value": "756.4343.9836.32"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/15.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
          },
          "nat": "CH"
        },
        {
          "gender": "female",
          "name": {
            "title": "Mrs",
            "first": "Mandy",
            "last": "Otoole"
          },
          "location": {
            "street": {
              "number": 3252,
              "name": "Novara Avenue"
            },
            "city": "Cavan",
            "state": "Meath",
            "country": "Ireland",
            "postcode": 68883,
            "coordinates": {
              "latitude": "-42.1946",
              "longitude": "142.6885"
            },
            "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
            }
          },
          "email": "mandy.otoole@example.com",
          "login": {
            "uuid": "3ad91e9f-a1a8-4bd1-a632-0784be531e43",
            "username": "bigsnake896",
            "password": "concrete",
            "salt": "O6R8mJL3",
            "md5": "6e4123fce469aa3a99631f597bb6b5fb",
            "sha1": "070c607c25c091a4c2942f31df12fa12cc58ae0a",
            "sha256": "99016d2558416cead79ae8831939ddbf43846951b13d259e363d7e6d70deb112"
          },
          "dob": {
            "date": "1993-11-13T09:52:35.647Z",
            "age": 27
          },
          "registered": {
            "date": "2005-05-09T21:28:54.650Z",
            "age": 15
          },
          "phone": "061-984-9788",
          "cell": "081-693-5541",
          "id": {
            "name": "PPS",
            "value": "9904610T"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
          },
          "nat": "IE"
        },
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Judy",
            "last": "Rice"
          },
          "location": {
            "street": {
              "number": 6318,
              "name": "Highfield Road"
            },
            "city": "Ennis",
            "state": "Waterford",
            "country": "Ireland",
            "postcode": 17297,
            "coordinates": {
              "latitude": "60.2000",
              "longitude": "20.5421"
            },
            "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
            }
          },
          "email": "judy.rice@example.com",
          "login": {
            "uuid": "75620c21-071f-4ba2-a5bd-c06959f2c745",
            "username": "bluefrog780",
            "password": "juggalo",
            "salt": "wySsQaeV",
            "md5": "168055d3499006e748f6ea92994a78de",
            "sha1": "3e8a45b112418a72a0ea2677437bdb0d0ed30c35",
            "sha256": "666388d11767c4d10f490cb84a8b439a5b1709206e786d98dcbb4521825bcd1a"
          },
          "dob": {
            "date": "1979-02-10T12:06:28.301Z",
            "age": 41
          },
          "registered": {
            "date": "2006-07-22T00:44:23.100Z",
            "age": 14
          },
          "phone": "051-267-3355",
          "cell": "081-878-1617",
          "id": {
            "name": "PPS",
            "value": "7191320T"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/67.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
          },
          "nat": "IE"
        },
        {
          "gender": "female",
          "name": {
            "title": "Ms",
            "first": "Andrea",
            "last": "White"
          },
          "location": {
            "street": {
              "number": 1493,
              "name": "Broadway"
            },
            "city": "Aberdeen",
            "state": "Warwickshire",
            "country": "United Kingdom",
            "postcode": "YR4C 6AF",
            "coordinates": {
              "latitude": "-77.6264",
              "longitude": "19.5223"
            },
            "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
            }
          },
          "email": "andrea.white@example.com",
          "login": {
            "uuid": "551ba470-e6b1-4af1-a810-548da62165d5",
            "username": "redmeercat861",
            "password": "thanatos",
            "salt": "Pgw5PWMt",
            "md5": "e80dbb9b436a1b76e9c968d77016ad0c",
            "sha1": "14f3cad3edcab8da9583c0e6863382f908683a2e",
            "sha256": "b8cd230f197961df7a863d2a6eadc25df745f8bf1eb1a6845ac9ce2d74f2ca44"
          },
          "dob": {
            "date": "1980-06-23T04:50:15.857Z",
            "age": 40
          },
          "registered": {
            "date": "2015-01-17T06:45:19.743Z",
            "age": 5
          },
          "phone": "016977 33560",
          "cell": "0708-941-379",
          "id": {
            "name": "NINO",
            "value": "JN 92 25 71 C"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/85.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
          },
          "nat": "GB"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Eef",
            "last": "Daniëls"
          },
          "location": {
            "street": {
              "number": 7762,
              "name": "De Bas"
            },
            "city": "Zorgvlied",
            "state": "Limburg",
            "country": "Netherlands",
            "postcode": 52571,
            "coordinates": {
              "latitude": "-22.1217",
              "longitude": "58.9234"
            },
            "timezone": {
              "offset": "+2:00",
              "description": "Kaliningrad, South Africa"
            }
          },
          "email": "eef.daniels@example.com",
          "login": {
            "uuid": "fe2aca64-ac5a-4453-a8eb-f0b9ce005fe9",
            "username": "sadpanda955",
            "password": "bills",
            "salt": "Me8Y4wIE",
            "md5": "9b7ac1847db091f8250a64430fc13613",
            "sha1": "cac4a76df78c84b69bca3d999bc45bf00221243e",
            "sha256": "385843c405879809e8f90ba13490d321c3d40f2ea3f636568825510e4aa80263"
          },
          "dob": {
            "date": "1945-04-06T14:46:51.644Z",
            "age": 75
          },
          "registered": {
            "date": "2005-07-10T15:06:56.495Z",
            "age": 15
          },
          "phone": "(745)-268-6401",
          "cell": "(528)-641-9580",
          "id": {
            "name": "BSN",
            "value": "39474879"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/51.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
          },
          "nat": "NL"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Morgan",
            "last": "Philippe"
          },
          "location": {
            "street": {
              "number": 532,
              "name": "Rue de L'Abbé-Groult"
            },
            "city": "Villeurbanne",
            "state": "Ardèche",
            "country": "France",
            "postcode": 72600,
            "coordinates": {
              "latitude": "89.7785",
              "longitude": "18.6347"
            },
            "timezone": {
              "offset": "-3:00",
              "description": "Brazil, Buenos Aires, Georgetown"
            }
          },
          "email": "morgan.philippe@example.com",
          "login": {
            "uuid": "ece791d0-64c4-45c0-b4b6-cb7cff7c2cba",
            "username": "heavyleopard890",
            "password": "gone",
            "salt": "ZTIpg3nS",
            "md5": "879546cb78c6c5a58e9665f06acb5da1",
            "sha1": "cf9d51b6e96de89875fcd7acd4cf28a0d267d5f2",
            "sha256": "2b84fedc708729da79ccef96f67fb95b7237a09065ed6a0e09f3c11abe7cc69c"
          },
          "dob": {
            "date": "1985-06-19T19:33:02.950Z",
            "age": 35
          },
          "registered": {
            "date": "2009-02-20T18:34:33.766Z",
            "age": 11
          },
          "phone": "03-76-75-59-15",
          "cell": "06-68-13-59-19",
          "id": {
            "name": "INSEE",
            "value": "1NNaN70891400 33"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/9.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
          },
          "nat": "FR"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Ruben",
            "last": "Mauseth"
          },
          "location": {
            "street": {
              "number": 2342,
              "name": "Henrik Mohns plass"
            },
            "city": "Solerød",
            "state": "Oslo",
            "country": "Norway",
            "postcode": "7421",
            "coordinates": {
              "latitude": "-58.1773",
              "longitude": "7.3895"
            },
            "timezone": {
              "offset": "+5:00",
              "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
          },
          "email": "ruben.mauseth@example.com",
          "login": {
            "uuid": "56289a65-d4d4-411b-a189-4d4f40f099f9",
            "username": "bluewolf293",
            "password": "wildwood",
            "salt": "i39xFCP5",
            "md5": "c6cc93f3656adf5ea1582798e486547f",
            "sha1": "439e0c06c3f1922f7da6d54783659b0bc08d2dc4",
            "sha256": "a9de501f72456c081f9d91b9c0ca49aad3fa4abf2e64c490067cc5eb35ad79a8"
          },
          "dob": {
            "date": "1947-01-10T00:28:25.413Z",
            "age": 73
          },
          "registered": {
            "date": "2019-01-04T19:11:37.615Z",
            "age": 1
          },
          "phone": "86158423",
          "cell": "99408947",
          "id": {
            "name": "FN",
            "value": "10014719305"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/29.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
          },
          "nat": "NO"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Aleksi",
            "last": "Lehtola"
          },
          "location": {
            "street": {
              "number": 3279,
              "name": "Visiokatu"
            },
            "city": "Laukaa",
            "state": "Northern Ostrobothnia",
            "country": "Finland",
            "postcode": 89341,
            "coordinates": {
              "latitude": "58.2694",
              "longitude": "-82.9366"
            },
            "timezone": {
              "offset": "-2:00",
              "description": "Mid-Atlantic"
            }
          },
          "email": "aleksi.lehtola@example.com",
          "login": {
            "uuid": "99c566da-fc91-49be-a15d-b0fb1424cd74",
            "username": "bigbird289",
            "password": "vikings",
            "salt": "FJuvWKdo",
            "md5": "0ac7865f505cc84108b77aa088ac7e2d",
            "sha1": "2415e3d29eb1ae99e2f1fbfb6e68cef9172bc2d3",
            "sha256": "a5d9735b290d2e8e87e490177fc9d45e20e6f30133f574b0ae9469b8b1907246"
          },
          "dob": {
            "date": "1987-07-13T00:17:26.269Z",
            "age": 33
          },
          "registered": {
            "date": "2007-08-14T01:33:19.897Z",
            "age": 13
          },
          "phone": "07-229-314",
          "cell": "044-749-50-92",
          "id": {
            "name": "HETU",
            "value": "NaNNA341undefined"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/55.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
          },
          "nat": "FI"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Felix",
            "last": "Kowalski"
          },
          "location": {
            "street": {
              "number": 1838,
              "name": "Maple Ave"
            },
            "city": "Clinton",
            "state": "British Columbia",
            "country": "Canada",
            "postcode": "B8Y 2U4",
            "coordinates": {
              "latitude": "45.7031",
              "longitude": "-95.1202"
            },
            "timezone": {
              "offset": "+9:00",
              "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
          },
          "email": "felix.kowalski@example.com",
          "login": {
            "uuid": "3bf91ba6-438e-4ce4-9433-7e254a8ad09f",
            "username": "beautifulfish758",
            "password": "bigfish",
            "salt": "AbYiDN3V",
            "md5": "6cf32983959adb25924857dfe51efc6b",
            "sha1": "21882e0796a6584f11a364f171f5eef8c54a3450",
            "sha256": "c332bcc823dead516f94ee8df1e15404f1f2c7e81554d97183a59e0dc301c821"
          },
          "dob": {
            "date": "1962-08-22T04:45:47.863Z",
            "age": 58
          },
          "registered": {
            "date": "2015-10-08T21:39:14.996Z",
            "age": 5
          },
          "phone": "572-665-6151",
          "cell": "862-963-0624",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/74.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
          },
          "nat": "CA"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Ahmet",
            "last": "Adan"
          },
          "location": {
            "street": {
              "number": 4319,
              "name": "Şehitler Cd"
            },
            "city": "İzmir",
            "state": "Tekirdağ",
            "country": "Turkey",
            "postcode": 33077,
            "coordinates": {
              "latitude": "-51.3542",
              "longitude": "114.9245"
            },
            "timezone": {
              "offset": "+1:00",
              "description": "Brussels, Copenhagen, Madrid, Paris"
            }
          },
          "email": "ahmet.adan@example.com",
          "login": {
            "uuid": "537668a6-4ca4-49fa-989d-09570726784a",
            "username": "ticklishkoala506",
            "password": "patrol",
            "salt": "FkFPvAha",
            "md5": "4822125439cfbbc7077b28fe139e8f55",
            "sha1": "83fe38a53cc1732aecf1174417f6e589969f0368",
            "sha256": "911cabdd6806dbfcbd65432d9faec4bf123ccd711c0a9a9b50f0dbc32c34903f"
          },
          "dob": {
            "date": "1978-03-01T11:05:56.018Z",
            "age": 42
          },
          "registered": {
            "date": "2014-04-06T16:53:26.911Z",
            "age": 6
          },
          "phone": "(333)-094-1272",
          "cell": "(508)-493-7403",
          "id": {
            "name": "",
            "value": null
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/0.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
          },
          "nat": "TR"
        }
      ]
    
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={people}
                style={styles.incidentList}
                keyExtractor={person => String(person.email)}
                showsVerticalScrollIndicator={false}
                //onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: person }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{person.name.first}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{person.gender}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{person.location.number}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            //onPress={() => navigateToDetail(incident)}
                            >

                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
                />
        </View>
    );
}