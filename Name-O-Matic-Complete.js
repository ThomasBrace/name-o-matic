/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function

let speechOutput;
let reprompt;
let welcomeOutput = "Welcome to the name o matik generator, let me know the surname you would like me to pair with, and if you would like a boys or girls name. Then i'll see what i can come up with";
let welcomeReprompt = "Would you like a boys or a girls name?";
let boysNames = ["Aaron","Abel","Abraham","Adam","Addison","Adrian","Alan","Albert","Alden","Alec","Alex","Alexander","Alexis","Alf","Alfie","Alfred","Allan","Allen","Aloysius","Alpha","Alvin","Anderson","Andrew","Angel","Angus","Ansel","Anson","Anthony","Antony","Archibald","Archie","Arden","Aric","Ariel","Arlen","Arnold","Arron","Arthur","Arvel","Asher","Ashley","Ashton","Audley","August","Austin","Bailey","Baldwin","Barney","Barrett","Barry","Bart","Bartholomew","Basil","Baxter","Beau","Ben","Benedict","Benjamin","Bennett","Benson","Bentley","Benton","Bernard","Berry","Bertram","Bertrand","Beverly","Bill","Billy","Bishop","Blaine","Blair","Blake","Bob","Bobby","Booker","Boyce","Brad","Braden","Bradford","Bradley","Brady","Bram","Branden","Brandon","Brandt","Brannon","Brant","Braxton","Brendan","Brenden","Brendon","Brennan","Brent","Brenton","Bret","Brett","Brian","Brice","Britton","Brock","Brody","Brook","Brooks","Bruce","Bryan","Bryant","Bryce","Bryon","Bryson","Buck","Bud","Burke","Burt","Burton","Buster","Byron","Cade","Cal","Cale","Caleb","Callahan","Calvin","Cam","Cameron","Carl","Carlisle","Carlton","Carlyle","Carol","Carson","Carter","Casey","Cash","Casimir","Cass","Cassius","Cecil","Cedric","Celeste","Chad","Chadwick","Chance","Chandler","Charles","Charley","Charlie","Charlton","Chas","Chase","Chauncey","Chaz","Chesley","Chester","Chet","Chip","Chris","Christian","Cristopher","Chuck","Clair","Clarence","Clark","Claud","Claude","Clay","Clayton","Clement","Cleveland","Clifford","Clifton","Clinton","Clive","Clyde","Coby","Cody","Colbert","Colby","Cole","Coleman","Colin","Conor","Conrad","Conway","Cooper","Corbin","Cordell","Corey","Cornelius","Cornell","Cosmo","Courtney","Craig","Crawford","Cullen","Curtis","Cyril","Cyrus","Dallas","Dalton","Damian","Damon","Dan","Daniel","Darby","Darcy","Darel","Daren","Darian","Darin","Darius","Darrell","Darryl","Darwin","Dave","David","Davin","Davis","Dawson","Dax","Daton","Dean","Deforest","Delbert","Del","Delmar","Den","Denis","Denton","Denver","Denzil","Deon","Derek","Derrek","Des","Desmond","Devin","Devon","Dewayne","Dick","Dillon","Dion","Dirk","Dixon","Dolph","Dominic","Dorian","Doug","Douglas","Drake","Dre","Drew","Duane","Dudley","Duke","Duncan","Dustin","Dwane","Dwight","Dylan","Ernest","Eben","Ed","Edgar","Edison","Edmund","Edward","Edwin","Eldon","Edred","Elias","Elijah","Eliot","Ellery","Eliott","Elis","Elmer","Elroy","Elton","Elvin","Elvis","Elwin","Elwood","Emerson","Emery","Emil","Emmanuel","Emmett","Emory","Eric","Erick","Ernest","Ernie","Ethan","Ethelbert","Eugene","Eustace","Evan","Evander","Everet","Ewart","Ezekiel","Ezra","Farell","Felix","Fenton","Ferdinand","Fletcher","Floyd","Ford","Forest","Foster","Francis","Frank","Franklyn","Fred","Frederick","Freeman","Fulton","Gabby","Gabe","Gabriel","Gale","Galen","Gareth","Garey","Garfield","Garland","Garnet","Garret","Garry","Garth","Gavin","Gay","Gaylord","Gene","Geoff","Geoffrey","Geordie","George","Georgie","Gerald","Gerard","German","Gerry","Gib","Gideon","Gilbert","Giles","Glen","Godfrey","Gord","Gordon","Gordey","Gradt","Graham","Grant","Granville","Gray","Greg","Gregory","Griffin","Grover","Gus","Guy","Hal","Hale","Hamilton","Hank","Harding","Hardy","Harlan","Harland","Harley","Harmon","Harold","Harper","Harris","Harrison","Harry","Hartley","Harve","Harvey","Haven","Hayden","Haywood","Hector","Henry","Herb","Herbert","Herman","Hervey","Hilary","Hildred","Hillary","Hiram","Hollis","Homer","Horace","Horatio","Howard","Hoyt","Hubert","Hudson","Huey","Hugh","Hugo","Humphrey","Hunter","Iggy","Ike","Indiana","Ingram","Ira","Irvin","Irving","Irwin","Isaac","Isaiah","Isiah","Ivan","Ivor","Izzy","Jackson","Jacob","Jake","James","Jamey","Jamie","Jamison","Jared","Jarod","Jarvis","Jason","Jasper","Jay","Jayson","Jeb","Jed","Jeff","Jefferson","Jeffery","Jerald","Jere","Jeremiah","Jeremy","Jerold","Jerrod","Jerry","Jess","Jewel","Jim","Jimmy","Joe","Joel","Joey","John","Jon","Jonathan","Jordan","Josh","Joshua","Josiah","Joss","Joyce","Judd","Jude","Julian","Julius","Junior","Justin","Justy","Keegan","Keith","Kelley","Kelvin","Ken","Kendall","Kendrick","Kennard","Kennedy","Kenneth","Kennith","Kent","Kenton","Kenyon","Kenzie","Kermit","Kerry","Kevin","Kim","Kimball","King","Kip","Kirby","Kirk","Kit","Knox","Korey","Kris","Kurtis","Kyle","Lamar","Lambert","Lamont","Lance","Landon","Lane","Lanny","Larkin","Larry","Laurence","Laurie","Lavern","Lawrence","Lawson","Layne","Layton","Laz","Leland","Lenard","Lenny","Leo","Leon","Leonard","Leopold","Leroy","Les","Lesley","Lester","Levi","Lewis","Lex","Lincoln","Linden","Lindsey","Lindey","Linton","Linwood","Lloyd","Lockie","Logan","Lon","Lonnie","Lorin","Lou","Louis","Lovel","Lowell","Lucas","Lucian","Lucian","Lucky","Luke","Luther","Lyle","Lyndon","Lynn","Lynwood","Mackenzie","Madison","Major","Malachi","Malcolm","Malcom","Manley","Manny","Manuel","Marcus","Maria","Marion","Mark","Marlin","Marlon","Marlyn","Marshal","Martie","Martin","Marvis","Mason","Mat","Mathew","Maty","Maurice","Maverick","Max","Maximillian","Maxwell","Maynard","Mel","Melville","Melvin","Meredith","Merle","Merlin","Merill","Meritt","Merton","Merv","Mervin","Michael","Mike","Milburn","Miles","Milford","Millard","Milo","Milton","Mitch","Mitchell","Mo","Monroe","Monte","Montgomery","Monty","Morgan","Moris","Mortimer","Morton","Morty","Moses","Murphy","Murray","Myles","Myron","Nate","Nathan","Nathaniel","Neal","Ned","Nelly","Neil","Nelson","Newt","Newton","Nic","Nicholas","Nick","Nigel","Niles","Noah","Noble","Noel","Nolan","Norbert","Norm","Norman","Normand","Norris","Norwood","Ogden","Oli","Oliver","Ollie","Ora","Orson","Orval","Orville","Oscar","Oswald","Otis","Otto","Owen","Oz","Ozzie","Palmer","Parker","Pat","Patrick","Paul","Pearl","Perce","Percival","Percy","Perry","Pete","Peter","Peyton","Phil","Philip","Phillip","Pierce","Piers","Pip","Porter","Presley","Preston","Prince","Prosper","Quincy","Quinn","Quinten","Quinton","Raleigh","Ralph","Ralphie","Ramsey","Randal","Randall","Randel","Randolf","Randolph","Raphael","Raven","Ray","Raymond","Raynard","Reagan","Red","Reeg","Reg","Reggie","Regiland","Reid","Reuben","Rex","Reynold","Ret","Rian","Richard","Richie","Rick","Riley","Ritchie","Rob","Robert","Robin","Rocky","Rod","Rossy","Roderick","Rodge","Rodger","Rodney","Roger","Roland","Rolf","Rolland","Rollo","Roly","Rony","Roosevelt","Roscoe","Ross","Roswell","Rowland","Rowley","Roy","Royal","Royce","Rube","Rudolph","Rudy","Rufus","Rupert","Russ","Russell","Rusty","Ryan","Sal","Sammie","Sampson","Samson","Samuel","Sandy","Sanford","Schuyler","Scot","Scott","Scotty","Sean","Sebastian","Seward","Seymour","Shad","Shaun","Shawn","Shayne","Shel","Shelby","Sheldon","Shelley","Shelton","Sheridan","Sherman","Sherwood","Shirley","Sid","Sidney","Sigmund","Silas","Silvester","Simon","Sly","Smith","Solomon","Sonny","Spencer","Stacey","Stafford","Stan","Stanford","Ste","Steph","Stephen","Sterling","Steve","Steven","Stevie","Stew","Stewart","Stu","Stuart","Sullivan","Syd","Sydney","Sylvester","Tanner","Tate","Taylor","Ted","Teddy","Tel","Terance","Terence","Terrance","Terrell","Terry","Tex","Thad","Thaddeus","Theo","Theodore","Thom","Thomas","Thornton","Tibby","Tim","Timmy","Timothy","Titus","Tobias","Tobin","Toby","Tod","Todd","Tom","Tommy","Tony","Topher","Trace","Tracey","Travis","Trent","Trenton","Trev","Trevor","Tristan","Tristram","Troy","Truman","Ty","Tye","Tyler","Tyron","Tyrone","Tyson","Ulysses","Val","Valentine","Van","Vance","Vaughn","Vere","Vergil","Vern","Vernon","Vic","Victor","Vin","Vince","Vincent","Vinnie","Virgil","Vivian","Wade","Walder","Walker","Wallace","Wally","Walt","Walter","Walton","Ward","Wardell","Warner","Warren","Washington","Wat","Wayland","Wayne","Webster","Weldon","Wendell","Wesley","Westley","Weston","Whitney","Wil","Wilbur","Wiley","Wilf","Wilford","Wildred","Wilfrid","Wilkie","Will","Willard","William","Willie","Willis","Willy","Wilmer","Wilson","Wilton","Winfred","Winifred","Winny","Winston","Winthrop","Winton","Woodrow","Woody","Wright","Wyatt","Xavier","Yancy","York","Zach","Zachariah","Zachary","Zack","Zackary","Zak","Zane","Zed","Zeke","Zeph"];
let girlsNames = ["Abbey","Abigail","Ada","Addi","Addison","Adela","Adelaide","Adele","Adelia","Adria","Adirana","Adiranna","Adrianne","Agatha","Aggie","Agnes","Aileen","Alana","Allana","Alberta","Alice","Alecia","Alene","Alesia","Aleta","Aletha","Aletea","Alexa","Alexandra","Alexina","Alexis","Alfreda","Alicia","Aline","Alisha","Alison","Alisa","Alma","Almira","Alvena","Alvina","Alwilda","Amanda","Amber","Amelia","Ami","Amie","Amy","Anastacia","Anastasia","Andra","Andrea","Angel","Angela","Angelia","Angelica","Angelina","Angie","Anissa","Ann","Anna","Annabel","Annabelle","Anne","Annette","Annice","Annmarie","Anona","Antonette","Antonia","April","Arabella","Arden","Aretha","Aria","Arleen","Alene","Arrie","Ash","Ashley","Ashton","Aubrie","Auda","Audrey","Augusta","Aura","Aurora","Autumn","Ava","Avery","Avis","Bailey","Bambi","Barbara","Barbie","Barbra","Bea","Beatrice","Beatrix","Becka","Bee","Belinda","Bella","Belle","Berenice","Bernadine","Bernetta","Berniece","Bertha","Bertina","Beryl","Bess","Beth","Bethany","Betsy","Bette","Bettie","Betty","Beulah","Beverley","Beverly","Biddy","Billy","Bindy","Blair","Blanc","Blanche","Blossom","Bobbi","Bobbie","Bonita","Bonnie","Brandy","Brenda","Brenna","Brett","Briana","Brianna","Bridget","Brittany","Brook","Brooke","Buffy","Bunny","Caitlin","Calista","Calla","Cammy","Cam","Cameron","Camilla","Cammie","Candace","Candi","Candice","Candi","Candyce","Cara","Caren","Cari","Carry","Carina","Carissa","Carla","Carlene","Carlie","Carly","Carmel","Carmella","Carmen","Carol","Carolina","Carolin","Carrie","Carry","Carson","Casey","Cass","Cassandra","Cassey","Catherine","Cathleen","Cathryn","Cathy","Cecelia","Cecilia","Cecily","Celeste","Celestine","Celia","Chanel","Chantal","Chantel","Chantelle","Charissa","Charisse","Charity","Charla","Charleen","Charlene","Charlie","Charlotte","Charmaine","Chasity","Chastity","Chelle","Chelsea","Cher","Cherie","Cherilyn","Cherise","Cheryl","Cherry","Cheryl","Cheyenne","Cloe","Chriss","Chrissie","Christa","Christal","Christiana","Christie","Christina","Christine","Cicely","Cindy","Cissy","Claire","Clara","Claribel","Clarice","Clarinda","Clarissa","Claude","Claudia","Clemence","Cleo","Clotilda","Coby","Colleen","Connie","Constance","Cora","Coral","Cordelia","Coretta","Cori","Corina","Corine","Cornelia","Cortney","Courtney","Cyndy","Cynthia","Daisy","Dale","Dana","Danette","Daniella","Danielle","Danita","Daphne","Darby","Darcy","Daria","Dariana","Darla","Darleen","Darlene","Davina","Dawn","Dayna","Deanna","Deborah","Debrah","Deeann","Deena","Deidra","Deidre","Delia","Delilah","Dell","Della","Delma","Delora","Delores","Deloris","Delphia","Delta","Demelza","Dena Denice","Denise","Desiree","Destiny","Devin","Devon","Di","Diana","Diane","Dinah","Dione","Dixie","Docia","Dodie","Dollie","Dolly","Dolores","Dona","Donna","Dora","Doreen","Doretta","Dorinda","Dorin","Doris","Dorothea","Dorothy","Doris","Dortha","Dorthy","Dory","Dot","Dotty","Drea","Dulcie","Dusty","Dyan","Earlene","Earline","Earnestine","Eartha","Easter","Ebba","Abony","Eddie","Edith","Edna","Edna","Edwina","Edythe","Effie","Eileen","Elaine","Elea","Eleanor","Eleanora","Eleanore","Elfreda","Elfrieda","Elinor","Elisa","Elisabeth","Elisse","Elissa","Eliza","Elizabeth","Ella","Ellie","Elmira","Elnora","Eloise","Elouise","Elsa","Elsie","Elvina","Elise","Emelia","Emerson","Emery","Emily","Emma","Emmaline","Emmie","Emmy","Enola","Eppie","Erica","Erin","Erma","Ernestine","Esmeralda","Essie","Esta","Estella","Estelle","Esther","Ethel","Ethelyn","Etta","Ettie","Eugenia","Eula","Eulalia","Eunice","Eva","Evaline","Evalyn","Evangelina","Evangeline","Eve","Evelina","Eveline","Evette","Evie","Evonne","Evvie","Fae","Faith","Fanny","Fawn","Fay","Faye","Felicia","Felicity","Femmie","Fern","Fernie","Flick","Flo","Flora","Florence","Floretta","Florrie","Flossy","Fran","Frances","Francine","Francis","Frankie","Frannie","Franny","Freda","Frederica","Frieda","Frona","Gabriella","Gabrielle","Gail","Gale","Garnett","Gay","Gaye","Gayla","Gaynor","Gemma","Gena","Geneva","Genevive","Genevra","Gennie","Georgeana","Georgene","Georgia","Georgiana","Georgie","Georgina","Geraldine","Gerry","Gertrie","Gertrude","Gill","Gillian","Gina","Ginger","Giny","Ginni","Gladys","Glenda","Glenna","Gloria","Goldie","Grace","Gravie","Greta","Gretchen","Gretta","Griselda","Gussie","Gwen","Gwenda","Gwendoline","Dadley","Hally","Hanna","Harmony","Harper","Hariet","Hariette","Hattie","Haven","Hayden","Hazel","Heather","Heidi","Helen","Helena","Hellen","Henrietta","Hester","Hettie","Hilary","Hilda","Hidred","Hilary","Hollie","Hollis","Honora","Hope","Hortense","Hunter","Ida","Idella","Ilene","Imogen","Imogene","Ina","India","Indoana","Iona","Ione","Irene","Iris","Irma","Isabel","Isabella","Isabelle","Isadora","Ivy","Izzy","Jaci","Jacki","Jacklyn","Jacqueline","Jaquetta","Jada","Jaime","Jamie","Jan","Jane","Janel","Janelle","Janenne","Janet","Janette","Janey","Janice","Janine","Janis","Janna","Jannette","Jasmin","Jasmine","Jay","Jayme","Jayne","Jaynie","Jean","Jeana","Jeane","Jeanette","Jeanie","Jeanie","Janinne","Jemima","Jemma","Jen","Jenna","Jennelle","Jennifer","Jerri","Jerrie","Jess","Jessa","Jessica","Jessie","Jewel","Jill","Jillian","Jilly","Jimmie","Jinny","Jo","Joan","Joanna","Joanne","Jocelyn","Jodi","Jodie","Jody","Joella","Joetta","Johnie","Johnna","Johnnie","Jojo","Joleen","Jolene","Joley","Joni","Jools","Jordan","Jori","Josephine","Josie","Joss","Joyce","Joy","Judi","Judie","Judith","Judy","Jules","Julia","Juliana","Julianne","Julie","Juliet","June","Justice","Justina","Justine","Justie","Kallie","Kandi","Kara","Karen","Karin","Karina","Karissa","Karlene","Karolyn","Karin","Karon","Kasey","Kat","Kate","Katey","Katharin","Katharine","Katheryn","Kathi","Kathy","Kathlyn","Katrina","Katy","Kay","Kayla","Keely","Kelley","Kelli","Kelsey","Kendall","Kendra","Kenedy","Kenzie","Kerry","Kiki","Kiley","Kim","Kimberlee","Kimberley","Kimmi","Kirsten","Kit","Kitty","Kizzie","Krista","Kristal","Kristen","Kristin","Kyla","Kylee","Kylie","Kyra","Lacey","Layla","Lana","Laney","Lara","Laraine","Larissa","Laura","Lauren","Laurel","Laurene","Laurie","Laurine","Lavern","Laverne","Lavina","Lavonne","Layla","Leah","Leann","Leanne","Leanna","Leatrice","Lee","Leigh","Leila","Lela","Lena","Leni","Lenora","Lenor","Leona","Leone","Lesia","Lesley","Leslie","Leta","Letha","Letitia","Lettie","Letty","Lexa","Lexi","Lexia","Lex","Lexine","Lexus","Lexy","Liana","Libby","Liberty","Liddy","Lilian","Liliana","Lilibeth","Lillia","Lillian","Lina","Linda","Lindsey","Lindy","Linette","Linie","Lisa","Lisse","Lita","Livia","Livy","Liz","Liza","Lizbeth","Lizette","Logan","Lois","Lola","Lora","Loraine","Lorayne","Loreen","Loren","Lorena","Loretta","Lori","Lorinda","Lorna","Lottie","Lou","Louella","Louisa","Louise","Love","Luana","Luanna","Luanne","Lucetta","Lucia","Lucile","Lucinda","Lucy","Luella","Lula","Luvenia","Lidya","Lyn","Lynda","Linette","Lynn","Lynne","Lynnette","Lysa","Mabel","Mabelle","Mable","Macie","Mackenzie","Macy","Madalyn","Maddie","Madeleine","Madelyn","Madge","Madison","Madlyn","Madonna","May","Magdalen","Magdalene","Maggie","Magnolia","Mahala Mahalia","Malinda","Malvina","Mamie","Mandy","Mandi","Maralyn","Marci","Marcia","Marcie","Margaret","Margaretta","Marge","Margery","Margi","Margo","Maria","Mariah","Marian","Mariana","Marianne","Marie","Mariel","Marilou","Marilynn","Marinda","Marion","Marisa","Marissa","Marje","Marjorie","Marjory","Marla","Marleen","Marlena","Marlene","Marlyn","Marnie","Marsha","Martha","Martina","Marva","Mary","Maryann","Maryanne","Marybeth","Marylou","Marylynn","Mathilda","Matilda","Mattie","Maud","Maude","Maudie","Maura","Maureen","Maurine","Mavis","Maxine","May","Maya","Maybelle","Mayme","Meagan","Meaghan","Meg","Megan","Meghan","Mel","Melanie","Melba","Melina","Melinda","Melissa","Melody","Melva","Mercy","Meredith","Merilyn","Merle","Merlyn","Merry","Meryl","Mya","Michaela","Michelle","Mickey","Mikky","Mildred","Millicent","Millie","Mina","Mindy","Minerva","Minnie","Minta","Minty","Miranda","Miriam","Missy","Misty","Mo","Mollie","Molly","Mona","Monica","Monna","Moreen","Morgan","Muriel","Murphy","Myra","Myrtie","Myrtle","Nadia","Nan","Nanette","Nanny","Naomi","Narelle","Natalie","Natasha","Nelda","Nelle","Nella","Nellie","Nelly","Nena","Nessa","Netta","Neva","Nevada","Nichola","Nichole","Nina","Nita","Noelle","Nola","Nona","Nonnie","Nora","Norah","Noreen","Noren","Norma","Nova","Nyrie","Octavia","Odella","Odelle","Odellia","Olive","Olivia","Oneida","Opal","Ophelia","Ora","Orpha","Paige","Pam","Pamela","Pamelia","Pamella","Pansy","Parker","Pat","Patience","Patricia","Patsy","Patti","Pattie","Paula","Pauletta","Paulina","Pauline","Pearl","Pearle","Pearlie","Peg","Peggie","Peggy","Pen","Penelope","Penny","Peta","Petra","Peyton","Phebe","Phemie","Philippa","Phillis","Pippa","Polly","Poppy","Portia","Posey","Presley","Pris","Priscilla","Prissy","Pru","Prudence","Queen","Queenie","Quinn","Racheal","Rachel","Rachelle","Raquel","Rae","Ramona","Randi","Raven","Reagan","Reba","Rebecca","Rebeckah","Regan","Regena","Regina","Rena","Renae","Renee","Renita","Reta","Rhiannon","Rhoda","Rhonda","Richelle","Ricki","Riley","Rila","Rina","Rita","Robbie","Roberta","Robin","Robyn","Rochelle","Romy","Rona","Ronda","Ronnie","Ros","Rosa","Rosalind","Rosaline","Rosalyn","Rosamond","Rosanna","Rosanne","Rose","Roseann","Rosemary","Rowena","Roxana","Roxanne","Roxie","Roz","Rozanne","Ruby","Rubye","Rue","Ruth","Ruthie","Sabrina","Sadie","Sal","Salina","Sallie","Sally","Salome","Sam","Samantha","Sammie","Sandra","Sandy","Sarasarah","Savannah","Scarlett","Selina","Selma","Serena","Serina","Shan","Shana","Shanna","Shannon","Shantel","Shari","Sharla","Sharleen","Sharlene","Sharon","Sharron","Sharyl","Sharyn","Shauna","Shavonne","Shawna","Shawnda","Shayla","Sheena","Sheila","Shelby","Shelia","Shell","Shelley","Shelly","Sheree","Sheri","Sheridan","Sherilyn","Sherrie","Sheryll","Shirlee","Shirley","Shonda","Sibyll","Sidney","Silvia","Sissy","Sondra","Sonia","Sophia","Sophie","Spring","Stacey","Staci","Stacia","Star","Starla","Starr","Stella","Steph","Staphania","Stephanie","Stephany","Stevie","Sue","Suellen","Sukie","Summer","Sunday","Sunny","Sunshine","Susan","Susanna","Suzie","Suzie","Sybil","Sybilla","Sydney","Sylvia","Tabatha","Tabby","Tabitha","Tamara","Tameka","Tamela","Tamera","Tami","Tamika","Tammi","Tammie","Tammy","Tamra","Tamsin","Tamsyn","Tanya","Tara","Taryn","Tasha","Tatiana","Taylor","Tera","Teresa","Teri","Terra","Terri","Tess","Tessa","Tessie","Thea","Thelma","Theodora","Theresa","Thomasina","Tia","Tiana","Tibby","Tiffani","Tiffany","Tilda","Tilly","Tina","Titty","Toby","Tomie","Tony","Tonia","Tonya","Tori","Toria","Trotty","Tottie","Tracie","Tracey","Tracy","Tricia","Trina","Trinity","Trish","Trisha","Trista","Trix","Trixie","Trudy","Twila","Twyla","Tyler","Ursula","Val","Valarie","Valorie","Vanessa","Velda","Velma","Velvet","Vera","Verna","Veronica","Veva","Vi","Vic","Vicky","Victoria","Vikky","Viola","Violet","Virgee","Virgy","Virginia","Vivian","Vonda","Wanda","Wonda","Wendy","Whitney","Whelda","Whilhelmina","Willa","Willie","Wilma","Winnifred","Winona","Wynona","Yolanda","Yolonda","Yvette","Yvonne","Zandra","Zanna","Zelda","Zelma","Zena","Zoe","Zola","Zula"];
let pickArry = [];

let nameArr = new Array();

// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.25c4f3bb-949b-4952-93fc-fe49d62ced13";
speechOutput = '';
const handlers = {
	'LaunchRequest': function () {
console.log('launch')
console.log(this.attributes.savedNames)
 		if (Object.keys(this.attributes).length === 0) {
			//fresh login

			this.response
				.speak("Welcome to the name o matik generator, let me know the surname you would like me to pair with, and if you would like a boys or girls name. Then i'll see what i can come up with")
				.listen("Would you like a boys or a girls name?, or a name begining with a particular Letter?");
		}else{
			//retuning user
			this.response
				.speak("Welcome back to the name o matik generator. Your family name is currently set as " + this.attributes.familyName + ", and you have " + this.attributes.savedNames.length + " saved names. Shall I generate a new name for you?")
				.listen("Would you like a boys or a girls name?, or a name begining with a particular Letter? or revew your saved names?");
		}


		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		// add better help
		speechOutput = "I'm here to generate baby names. I can give basic suggestions by just asking me for a name, or I can generate names by gender and names by specific letters. I can suggest multiple names at a time if you want too. Try asking me one of the following: <break time='500ms'/>Generate a Boys name<break time='500ms'/>, or something like Give me three girls names<break time='500ms'/>, or maybe Can I have 5 names that begin with B?<break time='500ms'/> If I come up with a name you like, you can ask me to save it. By asking Review my saved names you can hear your list of current favourites. You can manage this list by asking me to add, remove names, or clear the list entirely.";
		reprompt = '';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'AMAZON.StopIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'SessionEndedRequest': function() {
		speechOutput = 'Ok, thanks bye.';
    console.log('session ended!');
    this.emit(':saveState', true);
	},
	'AMAZON.FallbackIntent': function () {
		speechOutput = "I didn't quite get that, please try again.";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'getNameIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

		//get slots
		let sexSlot = this.event.request.intent.slots.sex.value;
		let lengthSlot = this.event.request.intent.slots.length.value; // not currently used
		let surnameSlot = this.event.request.intent.slots.surname.value;
		let numberSlot = this.event.request.intent.slots.number.value;
		let letterSlot = this.event.request.intent.slots.letter.value;
		let middleNameSlot = this.event.request.intent.slots.middleName.value; // not currently used
		let firstNameSlot = this.event.request.intent.slots.firstName.value; // not currently used


		//Save the sessions slots if they haven't been updated in the latest requests
		if (typeof sexSlot != "undefined"){
			this.attributes['sexSlot'] = sexSlot;
		}
		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		//setup pick list by gender
		if (typeof this.attributes['sexSlot'] == "undefined"){
			pickArry = boysNames.concat(girlsNames);
		} else if (this.attributes['sexSlot'].toLowerCase() === "boys" || this.attributes['sexSlot'].toLowerCase() === "boy") {
			pickArry = boysNames;
		} else {
			pickArry = girlsNames;
		}
		//filter by letter if required
		if (typeof letterSlot != "undefined"){
			pickArry = pickArry.filter((name) => name.startsWith(letterSlot.toUpperCase()));
		}
		//get number of names to pick
		if (typeof numberSlot != "undefined"){


			let pickedNames = "";
			let pickedIndex = "";

			if (numberSlot > 20) {numberSlot = 20};

			for (var i=0; i<numberSlot; i++){
				pickedIndex = Math.floor(Math.random() * pickArry.length)
				this.attributes['currentName'] = pickArry[pickedIndex] + " " + this.attributes['familyName'] //save last name for potential save
				pickedNames = pickedNames + this.attributes['currentName'] + ", "
				pickArry.splice(pickedIndex,1)
			}

			speechOutput = " How about these?: " + pickedNames;
		} else {

			// random pick from remaining list
			let pickedName = pickArry[Math.floor(Math.random() * pickArry.length)];
			speechOutput = " How's this? " + pickedName + " " + this.attributes['familyName'];

			//save current name for potential save
			this.attributes['currentName'] = pickedName + " " + this.attributes['familyName'];
		}

		this.response
			.speak(speechOutput + ". should I generate another?")
			.listen("should I generate another?");

		this.emit(':responseReady');
	},
	'AMAZON.PauseIntent': function () {
		speechOutput = "Ok, I'll wait....";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
    },
	'AMAZON.ResumeIntent': function () {
		speechOutput = "Ok, please let me know the type of name you would like me to generate";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
    },
	'saveNameIntent': function () {
		//get slots
		let lastNameSlot = this.event.request.intent.slots.lastName.value; // not currently used
		let firstNameSlot = this.event.request.intent.slots.firstName.value; // not currently used

		let currentName = resloveName(firstNameSlot,lastNameSlot,this)

		nameArr.push(currentName)
		this.attributes.savedNames = nameArr;

		this.response
			.speak("I've added " + currentName + " to your saved names")
			.listen("should I generate name?");

		this.emit(':responseReady');
	},
	'reviewNamesIntent': function () {
		if (this.attributes.savedNames.length == 0){
			this.response
			.speak("you have no saved names. To add some just ask me to save any names you like the sound of. would you like me to suggest some names?")
			.listen("should I generate name?");

		} else {
			this.response
			.speak("Your saved names are:" + this.attributes.savedNames)
			.listen("Ask me to remove any names or ask me new ones?");
		}
		this.emit(':responseReady');
	},
	'removeNameIntent': function () {
		let firstNameSlot = this.event.request.intent.slots.firstName.value;
		let lastNameSlot = this.event.request.intent.slots.lastName.value;

		let currentName = resloveName(firstNameSlot,lastNameSlot,this)
		let index = this.attributes.savedNames.indexOf(currentName)
		//try and find name in saved names
		if (index != -1) {
			this.attributes.savedNames.splice(index,1)
			this.response
				.speak("I've removed " + currentName + " from your saved names. Would you like me to generate some new names?" )
				.listen("should I generate name?");
		} else {
			this.response
				.speak("I could not find " + currentName + " in your saved names. Would you like me to generate some new names?" )
				.listen("should I generate name?");
		}

		this.emit(':responseReady');
	},
	'emptySavedNamesIntent': function () {
console.log(this.attributes.savedNames)
		this.attributes.savedNames = [];
		this.response
			.speak("I have emptyed your saved names. Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	},
	'changeFamilyNameIntent': function () {

		let surnameSlot = this.event.request.intent.slots.surname.value;

		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		this.response
			.speak("I have updated your family name to " + this.attributes['familyName'] + ". Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	},
	'Unhandled': function () {
		speechOutput = "I didn't understand that, What type of name you would like me to generate";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'finishedIntent': function () {
		speechOutput = "ok, you can ask me to save names you like at any point. You can then review them or remove them just by asking. Alternatively, If your finished with the name o matik generator, just ask me to close.";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	}
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
		// fire up DynameDB and add table. rememebr to setup IAM and set ececution role on lambda
		alexa.dynamoDBTableName = 'name-o-matic';
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

function resloveName(first,last,_this){
	let current = ""
	if (typeof first != "undefined" && typeof last != "undefined"){
		current = first + " " + last;
	} else if (typeof first != "undefined" && typeof last == "undefined") {
		current = first + " " + _this.attributes['familyName']
	} else {
		current = _this.attributes['currentName']
	}
	return current;
}

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
			let updatedIntent = "";

		if (Object.keys(this.attributes).length != 0) { // If object is not empty assume they have a saved surname

		  updatedIntent = this.event.request.intent;
			updatedIntent.slots.surname.value = this.attributes.familyName;

			this.event.request.intent = updatedIntent;
		}
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code is necessary if using ASK SDK versions prior to 1.0.9
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');

    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}

function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
