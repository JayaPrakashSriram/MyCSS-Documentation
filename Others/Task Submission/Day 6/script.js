/*Task 1:
    a)  Write a constructor for the class Movie, which takes a String representing the title of the
        movie, a String representing the studio, and a String representing the rating as its
        arguments, and sets the respective class properties to these values.
*/

        class Movie_One{
            constructor(Title,Studio,Rating){
                this.Title=Title;
                this.Studio=Studio;
                this.Rating=Rating;
            }
        }
        var Film1 =new Movie_One("The Dark Knight","DC Comics","Pg13");
        console.log(Film1);

/*  b)  The constructor for the class Movie will set the class property rating to "PG" as default 
        when no rating is provided.
*/

        class Movie_Two{
            constructor(Title,Studio,Rating){
                this.Title=Title;
                this.Studio=Studio;
                this.Rating="PG";
            }
        }
        var Film2 =new Movie_Two("Ant Man","Marvel");
        console.log(Film2);

/*  c)  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
        You may assume the input array is full of Movie instances. The returned array need not be full.
*/

        class Movie{ 
            constructor(Movies,Ratings){
                this.Movies=Movies;
                this.Ratings=Ratings;   
            }
    
            getPg(Cinema){
                Cinema=Cinema.filter((ele)=>ele.Ratings=="PG");
                Cinema=Cinema.map((ele)=>ele.Movies)
                return Cinema;
            }
        }
        var flm1 = new Movie("Ant Man","PG");
        var flm2 = new Movie("ShangChi","U/A");
        var flm3 = new Movie("Troy","R");
        var flm4 = new Movie("Punisher","PG");
        var flm5 = new Movie("DareDevil","PG"); 
        var film = new Movie();
        var Cinema = [flm1,flm2,flm3,flm4,flm5];
    
        console.log(film.getPg(Cinema));

/*  d)  Write a piece of code that creates an instance of the class Movie with the 
          title “Casino Royale”, 
          the studio “Eon Productions”,and 
          the rating “PG-13”;
*/

        class Mov_Name{
            constructor(Title,Studio,Rating){  
                this.Title=Title;
                this.Studio=Studio;
                this.Rating=Rating;
            }
        }
        var Movie4 =new Mov_Name("Casino Royale","Eon Productions","PG-13");
        console.log(Movie4);

//Task 3: Write a “person” class to hold all the details.

class Info{
constructor(FirstName,LastName,Age,Gender,Contact,Education,Profession,MaritalStatus){ 
  this.FirstName=FirstName;
  this.LastName=LastName;
  this.Age=Age;
  this.Gender=Gender;
  this.Education=Education;
  this.Profession=Profession;
  this.MaritalStatus=MaritalStatus;
  this.Contact=Contact;
}
}
var Details=new Info("Saravana","Kumar","32","Male","Civil Engineer","Real Estate & Construction","Single","9852616618");
console.log(Details);


//Task 4: write a class to calculate the uber price.
class UberPrice{ 
constructor(pasangerName,pickup,drop,distance,amount){  
  this.pasangerName=pasangerName;
  this.pickup=pickup;
  this.drop=drop;
  this.distance=distance;
  this.amount=kilometers*10;
}
}
var Bill=new UberPrice("Surya","Ambattur","Meenambakkam","20");
console.log(Bill);