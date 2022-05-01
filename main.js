dog = 0;
cat = 0;
tiger = 0;
cow = 0;



function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wFXHMIHiV/model.json',modelReady);
}                  
function modelReady()
{
    classifier.classify(gotResult);
}

dog = 0;
cat = 0;
tiger = 0;
cow = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                       

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        
       document.getElementById("detected").style.color = "rgb("+ random_number_r +", "+ random_number_g +", "+ random_number_b +")";
       document.getElementById("animal_voices").innerHTML = "Detected voice is of - " + results[0].label;
       document.getElementById("animal_voices").style.color = "rgb("+ random_number_r +", "+ random_number_g +", "+ random_number_b+")";

        img = document.getElementById("animal_Image");
        
        if(results[0].label == "Barking")
        {
            img.src = "dog.gif";
            dog = dog + 1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+dog;
        }


        else if(results[0].label == "Meoing")
        {
            img.src = "Cat.gif";
            cat = cat + 1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+cat;
        }

        else if(results[0].label == "Roaring")
        {
            img.src = "Tiger.gif";
            tiger = tiger + 1;
            document.getElementById("detected").innerHTML = "Detected Tiger - "+tiger;
        }

        else if(results[0].label == "Mooing")
        {
            img.src = "Cow.gif";
            cow = cow + 1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+cow;
        }
        else
        {
            img.src = "ear.gif";
            background_noise = background_noise + 1;
        }

    }
}