import NavigationSidebar from "../NavigationSidebar/index.js";

import MovieList from "../MovieList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        
        <div class="col-4 col-md-2 col-lg-1 col-xl-2">
          <p><i class="fa-solid fa-film"></i> OMDB Movie</p>   
        </div>
        
        <div class="col-6 ">
         <input class="form-control form-rounded account-bg-color " style="font-family:Arial, FontAwesome" placeholder="&#xF002 Search Movies..." type="text"/>
        </div>
        
        <div class="col-2 pt-sm-2">
          <div class="float-right">
          <a class="bg-color-black text-decoration-none" href="#"><i class="fa-solid fa-user"></i><span class="hidden-md hidden-sm hidden-xs ">  Profile</span></a>
          </div>
        </div>
        
        
        </div>
        
<!--        end of top row-->
        <div class="row ">
        <div class="col-4 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
        <!--main-->
        <div class="col-8 ">
<!--        <div class="row ps-sm-2">-->
               

            

          
            
            <!--content-->
            <div class="list-group " >
            ${MovieList()}

            </div>
            
            <!--content end-->
        
        
        </div>
        
         
        

        
<!--        </div>-->
    `);
})($);
