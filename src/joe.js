var images = document.getElementsByTagName('img');
var timeout = null;

const JOE_PICS = [
    'https://d.newsweek.com/en/full/1574861/joe-exotic.jpg?w=1600&h=1200&q=88&f=f99f7487d3874837c6d1a404df2cabd4',
    'https://www.pajiba.com/assets_c/2020/04/Joe-Exotic-Shaq-thumb-700x539-223969.png',
    'https://www.pajiba.com/assets_c/2020/03/Joe-Exotic-Netflix-thumb-700xauto-223888.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQXfHind6VdEg9EB-K_Ihl1WArggrXqmTo_SuVnBp1R1qyBgg2&usqp=CAU',
    'https://www.pajiba.com/assets_c/2020/03/Joe-Exotic-Music-Videos-thumb-700x513-223559.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwrIPSqlc1qNyvBpmzJcLTJ0e0siwDM9F0LgcORFUaAShW8wn1&usqp=CAU',
    'https://www.refinery29.com/images/9621144.jpg',
    'https://dazedimg-dazedgroup.netdna-ssl.com/1080/azure/dazed-prod/1280/8/1288392.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joseph-maldonado-passage-joe-exotic-1584703728.jpg?crop=1.00xw:0.682xh;0,0.0784xh&resize=1200:*',
    'https://pmcvariety.files.wordpress.com/2020/03/joe-exotic.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maxresdefault-1585069900.jpg?crop=0.461xw:0.821xh;0.532xw,0.0455xh&resize=480:*',
    'https://compote.slate.com/images/0e2954b1-40d3-44f1-887c-61d746608643.png?width=780&height=520&rect=702x468&offset=144x70',
    'https://i.pinimg.com/originals/cb/cc/97/cbcc97f19a6512802dfe05afe5ba545a.jpg',
    'https://www.realitytea.com/assets/uploads/2020/04/TK-Joe-exotic-1280x720.jpg'
]

function addSomeJoe() {
    for (var i = 0, l = images.length; i < l; i++) {
        images[i].src = JOE_PICS[Math.floor(Math.random() * JOE_PICS.length)];
    }
}

document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(addSomeJoe, 2000);
}, false);