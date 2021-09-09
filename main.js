var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","http://clipart-library.com/img1/734325.jpg", "https://as2.ftcdn.net/v2/jpg/01/38/71/15/500_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg" , "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25673826.jpg", "https://previews.123rf.com/images/dualororua/dualororua1708/dualororua170800192/83761031-cute-little-girl-cartoon.jpg", "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3329440.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = [i];
    var updatedName = [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
