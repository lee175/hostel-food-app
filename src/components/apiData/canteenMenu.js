const canteenMenu = [
    { name: "mango", pic: "location", available: true, price: 124, category: "non-veg", id: 101 },
    { name: "mango2", pic: "location", available: true, price: 124, category: "non-veg", id: 102 },
    { name: "mango3", pic: "location", available: true, price: 124, category: "non-veg", id: 103 },
    { name: "mango4", pic: "location", available: true, price: 124, category: "non-veg", id: 104 },
    { name: "mango5", pic: "location", available: true, price: 124, category: "non-veg", id: 105 },
    { name: "mango6", pic: "location", available: true, price: 124, category: "non-veg", id: 106 },
    { name: "mango7", pic: "location", available: true, price: 124, category: "non-veg", id: 107 },
    { name: "mango8", pic: "location", available: true, price: 124, category: "non-veg", id: 108 },
    { name: "mango9", pic: "location", available: true, price: 124, category: "non-veg", id: 109 },
    { name: "mango0", pic: "location", available: true, price: 124, category: "non-veg", id: 1010 },
    { name: "mango11", pic: "location", available: true, price: 124, category: "non-veg", id: 1011 },
    { name: "mango12", pic: "location", available: true, price: 124, category: "non-veg", id: 1012 },
    { name: "mango13", pic: "location", available: true, price: 124, category: "non-veg", id: 1013 },
    { name: "mango14", pic: "location", available: true, price: 124, category: "non-veg", id: 1014 },
    { name: "mango15", pic: "location", available: true, price: 124, category: "non-veg", id: 1015 },
    { name: "mango16", pic: "location", available: true, price: 124, category: "non-veg", id: 1016 },
    { name: "mango17", pic: "location", available: true, price: 124, category: "non-veg", id: 1017 },
    { name: "banana1", pic: "location", available: true, price: 124, category: "veg", id: 1018 },
    { name: "banana2", pic: "location", available: true, price: 124, category: "veg", id: 1019 },
    { name: "banana3", pic: "location", available: true, price: 124, category: "veg", id: 1020 },
    { name: "banana4", pic: "location", available: true, price: 124, category: "veg", id: 1021 },
    { name: "banana5", pic: "location", available: true, price: 124, category: "veg", id: 1022 },
    { name: "banana6", pic: "location", available: true, price: 124, category: "veg", id: 1023 },
    { name: "banana7", pic: "location", available: true, price: 124, category: "veg", id: 1024 },
    { name: "banana8", pic: "location", available: true, price: 124, category: "veg", id: 1025 },
    { name: "banana9", pic: "location", available: true, price: 124, category: "veg", id: 1026 },
    { name: "banana0", pic: "location", available: true, price: 124, category: "veg", id: 1027 },
    { name: "orange1", pic: "location", available: true, price: 124, category: "fruits", id: 1037 },
    { name: "orange2", pic: "location", available: true, price: 124, category: "fruits", id: 1038 },
    { name: "orange3", pic: "location", available: true, price: 124, category: "fruits", id: 1039 },
    { name: "orange4", pic: "location", available: true, price: 124, category: "fruits", id: 1040 },
    { name: "orange5", pic: "location", available: true, price: 124, category: "fruits", id: 1041 },
    { name: "orange6", pic: "location", available: true, price: 124, category: "fruits", id: 1042 },
    { name: "orange7", pic: "location", available: true, price: 124, category: "fruits", id: 1043 },
    { name: "orange8", pic: "location", available: true, price: 124, category: "fruits", id: 1044 },
    { name: "orange9", pic: "location", available: true, price: 124, category: "fruits", id: 1045 },
    { name: "orange0", pic: "location", available: true, price: 124, category: "fruits", id: 1046 },
    { name: "spicy maggi1", pic: "location", available: true, price: 124, category: "maggi", id: 1060 },
    { name: "spicy maggi2", pic: "location", available: true, price: 124, category: "maggi", id: 1061 },
    { name: "spicy maggi3", pic: "location", available: true, price: 124, category: "maggi", id: 1062 },
    { name: "spicy maggi4", pic: "location", available: true, price: 124, category: "maggi", id: 1063 },
    { name: "spicy maggi5", pic: "location", available: true, price: 124, category: "maggi", id: 1064 },
    { name: "spicy maggi6", pic: "location", available: true, price: 124, category: "maggi", id: 1065 },
    { name: "spicy maggi7", pic: "location", available: true, price: 124, category: "maggi", id: 1066 },
    { name: "spicy maggi8", pic: "location", available: true, price: 124, category: "maggi", id: 1067 },
    { name: "spicy maggi9", pic: "location", available: true, price: 124, category: "maggi", id: 1068 },
    { name: "spicy maggi0", pic: "location", available: true, price: 124, category: "maggi", id: 1069 },
    { name: "watermellon1", pic: "location", available: true, price: 124, category: "juice", id: 1081 },
    { name: "watermellon2", pic: "location", available: true, price: 124, category: "juice", id: 1082 },
    { name: "watermellon3", pic: "location", available: true, price: 124, category: "juice", id: 1083 },
    { name: "watermellon4", pic: "location", available: true, price: 124, category: "juice", id: 1084 },
    { name: "watermellon5", pic: "location", available: true, price: 124, category: "juice", id: 1085 },
    { name: "watermellon6", pic: "location", available: true, price: 124, category: "juice", id: 1086 },
    { name: "watermellon7", pic: "location", available: true, price: 124, category: "juice", id: 1087 },
    { name: "watermellon8", pic: "location", available: true, price: 124, category: "juice", id: 1088 },
    { name: "watermellon9", pic: "location", available: true, price: 124, category: "juice", id: 1089 },
    { name: "watermellon0", pic: "location", available: true, price: 124, category: "juice", id: 1090 },
    { name: "no burger1", pic: "location", available: true, price: 124, category: "burger", id: 10110 },
    { name: "no burger2", pic: "location", available: true, price: 124, category: "burger", id: 10111 },
    { name: "no burger3", pic: "location", available: true, price: 124, category: "burger", id: 10112 },
    { name: "no burger4", pic: "location", available: true, price: 124, category: "burger", id: 10113 },
    { name: "no burger5", pic: "location", available: true, price: 124, category: "burger", id: 10114 },
    { name: "no burger6", pic: "location", available: true, price: 124, category: "burger", id: 10115 },
    { name: "no burger7", pic: "location", available: true, price: 124, category: "burger", id: 10116 },
    { name: "no burger8", pic: "location", available: true, price: 124, category: "burger", id: 10117 },
    { name: "no burger9", pic: "location", available: true, price: 124, category: "burger", id: 10118 },
    { name: "no burger0", pic: "location", available: true, price: 124, category: "burger", id: 10119 },
];


export default canteenMenu;