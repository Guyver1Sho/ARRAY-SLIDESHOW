///IMAGE ARRAY///


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'image2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'image3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'image5.jpg';



/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}