
let allMovies = [];

function getAllRespons(pages) {

  let page = 1,
      total_pages = 46;
      //total_results =0

   $.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${pages}`,

    data: {
      page: page,
      total_pages: total_pages
    },
    
    success: function (data) {
      //total_results = data.total_results 
      //console.log(total_results);

      allMovies = data.results
      displayMovies(allMovies);

    }
  });
  
}

getAllRespons()



// function showUpdataData(){

//   let page = 1,
//       total_pages = 46,
//       total_results = 0;

//   getAllRespons();
  
//   $('#prev').click(function () { 

//     if(page > 1){
      
//       page;
  
//       console.log(page);
//     }

//     //console.log('prev');
    
//   });

//   $('#next').click(function () { 

//     if (page * total_pages < total_results) {
//         page++;
//         getAllRespons(page);
//         displayMovies(allMovies);
//         console.log(page);
//     }
//     //  console.log('next');
    
//   });

 

// }

// showUpdataData()










// async function getAllRespons() {

//   let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=1`;

//   let apiRespons = await fetch(apiUrl);

//   apiRespons = await apiRespons.json();

//   allMovies = apiRespons.results;

//   displayMovies(allMovies);

// }

//getAllRespons()


function displayMovies(movie) {

  let contianer = ``;

  for (let i = 0; i < movie.length; i++) {

    contianer += `
    <div class="col-md-4 my-3 item " >
      <div class="movie-item ">
        <img src="https://image.tmdb.org/t/p/w500/${movie[i].poster_path}" alt="" class="w-100">
        <div class="overlay py-5 px-3">
          <h2>${movie[i].title}</h2>
          <p>${movie[i].overview}</p>
          <h3>${movie[i].vote_average}</h3>
          <span>${movie[i].release_date}</span>
        </div>
      </div>
    </div>
    `

  }

  $('#showRow').html(contianer);

}


///search in array


$('#search').keyup(function () { 
  let search = $('#search').val();

  searchInMovies(search);

});

function searchInMovies (term){

  let contianer = ``;

  for (let i = 0; i < allMovies.length; i++) {
    
    if (allMovies[i].title.toLowerCase().includes(term.toLowerCase()) == true) {
      contianer += `
        <div class="col-md-4 my-3 item ">
          <div class="movie-item ">
            <img src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}" alt="" class="w-100">
            <div class="overlay py-5 px-3">
              <h2>${allMovies[i].title}</h2>
              <p>${allMovies[i].overview}</p>
              <h3>${allMovies[i].vote_average}</h3>
              <span>${allMovies[i].release_date}</span>
            </div>
          </div>
        </div>
        `
    }  
  }

  $('#showRow').html(contianer);
  
} 


///search Word In Api

$('#searchWord').keyup(function () { 
  let searchWord = $('#searchWord').val();

  //console.log(searchWord);
  searchWords(searchWord);

});


async function searchWords (search){

  if (search == '') {
    return
  }

  let allMovieSearch = [];

  let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&query=${search}&page=1&include_adult=false`;

  let apiRespons = await fetch(apiUrl);

  apiRespons = await apiRespons.json();

  allMovieSearch = apiRespons.results; 
  
  // for (let i = 0; i < allMovieSearch.length; i++) {
    
  //   if (allMovieSearch[i].poster_path ) {

  //     displayMovies(allMovieSearch)

  //   } else {
  //     console.log(allMovieSearch[i].backdrop_path);
  //   }
    
  // }

  displayMovies(allMovieSearch)

  



}

///////////////////////////////////////////////////////////////////////////////

/// open vedio in second layer

// function showVideos() {

//   $.ajax({
//     type: "Get",
//     url: `https://api.themoviedb.org/3/movie/718444/videos?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US`,
//     data:{
//       site:"YouTube",
//     },
   
//     success: function (response) {
//       console.log('yes');
//     }
//   });
  
// }



///////////////////////////////////////////////////////////

//slide menu

let isOpen =true   


let leftSide = $('.leftSide').outerWidth(); 
let menuSid = $('.leftSide ul li');

$('.icon').click(()=>{

  if (isOpen) {

    $('.icon').removeClass('fa-bars').addClass('fa-times');

    $('#sideMenu').animate({left:0} ,500);

 

  console.log(menuSid);

    for (let i = 0; i < menuSid.length; i++) {
      
      $(`.itemLi${i}`).animate({paddingTop:"30px"}, i*50+1000);

      console.log(menuSid[i]);
    }

    isOpen = false;

  }
  else{

    $('.icon').removeClass('fa-times').addClass('fa-bars');
    $('#sideMenu').animate({left:-leftSide} ,500);

    $('.leftSide ul li').animate({paddingTop:"500px"} ,1000);

    isOpen = true;

  }
  

})























