var models = [
    {
        name : 'Image 1',
        image : 'imgs/1.jpg'
    },
    {
        name : 'Image 2',
        image : 'imgs/2.jpg'
    },
    {
        name : 'Image 3',
        image : 'imgs/3.jpg'
    },
    {
        name : 'Image 4',
        image : 'imgs/4.jpg'
    },
    {
        name : 'Image 5',
        image : 'imgs/5.jpg'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '1000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}


function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href','https://getbootstrap.com/docs/4.5/getting-started/introduction/');
}