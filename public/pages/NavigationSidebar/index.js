const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="../HomeScreen/home.html"><i class="fa-solid fa-house-chimney"></i><span class="hidden-md hidden-sm hidden-xs ">  Home</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-film"></i><span class="hidden-md hidden-sm hidden-xs ">  Movie Details</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-comment"></i><span class="hidden-md hidden-sm hidden-xs ">  Review</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-user"></i><span class="hidden-md hidden-sm hidden-xs ">  Profile</span></a>
                
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-secondary btn-block rounded-pill">
                    Sign Out</a>
            </div>
    `);
}
export default NavigationSidebar;

