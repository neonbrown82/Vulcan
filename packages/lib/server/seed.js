/**
 * Seed the database with default Card list.
 */

import BlackCards from '../modules/black-cards/collection.js';
import WhiteCards from '../modules/white-cards/collection.js';
import Games from '../modules/games/collection.js';
import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';

const dummyFlag = {
  fieldName: 'isDummy',
  fieldSchema: {
    type: Boolean,
    optional: true,
    hidden: true,
  },
};

Users.addField(dummyFlag);
Games.addField(dummyFlag);

const seedDataWhite = [
  {
    text: 'Being on fire.',
  },
  {
    text: 'Racism.',
  },
  {
    text: 'Old-people smell.',
  },
  {
    text: 'A micropenis.',
  },
  {
    text: 'Women in yogurt commercials.',
  },
  {
    text: 'Classist undertones.',
  },
  {
    text: 'Not giving a shit about the Third World.',
  },
  {
    text: 'Inserting a mason jar into my anus.',
  },
  {
    text: 'Court-ordered rehab.',
  },
  {
    text: 'A windmill full of corpses.',
  },
  {
    text: 'The gays.',
  },
  {
    text: 'An oversized lollipop.',
  },
  {
    text: 'African children.',
  },
  {
    text: 'An asymmetric boob job.',
  },
  {
    text: 'Bingeing and purging.',
  },
  {
    text: 'The hardworking Mexican.',
  },
  {
    text: 'An Oedipus complex.',
  },
  {
    text: 'A tiny horse.',
  },
  {
    text: 'Boogers.',
  },
  {
    text: 'Penis envy.',
  },
  {
    text: 'Barack Obama.',
  },
  {
    text: 'My humps.',
  },
  {
    text: 'The Tempur-Pedic Swedish Sleep System.',
  },
  {
    text: 'Scientology.',
  },
  {
    text: 'Dry heaving.',
  },
  {
    text: 'Skeletor.',
  },
  {
    text: 'Darth Vader.',
  },
  {
    text: 'Figgy pudding.',
  },
  {
    text: 'Advice from a wise, old black man.',
  },
  {
    text: 'Five-Dollar Footlongs.',
  },
  {
    text: 'Elderly Japanese men.',
  },
  {
    text: 'Free samples.',
  },
  {
    text: 'Estrogen.',
  },
  {
    text: 'Sexual tension.',
  },
  {
    text: 'Famine.',
  },
  {
    text: 'A stray pube.',
  },
  {
    text: 'Men.',
  },
  {
    text: 'Heartwarming orphans.',
  },
  {
    text: 'Chunks of dead hitchhiker.',
  },
  {
    text: 'A bag of magic beans.',
  },
  {
    text: 'Repression.',
  },
  {
    text: 'Prancing.',
  },
  {
    text: 'My relationship status.',
  },
  {
    text: 'Overcompensation.',
  },
  {
    text: 'Peeing a little bit.',
  },
  {
    text: 'Pooping back and forth. Forever.',
  },
  {
    text: 'A ball of earwax, semen, and toenail clippings.',
  },
  {
    text: 'Testicular torsion.',
  },
  {
    text: 'The Devil himself.',
  },
  {
    text: 'The World of Warcraft.',
  },
  {
    text: 'Dick Cheney.',
  },
  {
    text: 'MechaHitler.',
  },
  {
    text: 'Being fabulous.',
  },
  {
    text: 'Pictures of boobs.',
  },
  {
    text: 'A gentle caress of the inner thigh.',
  },
  {
    text: 'The Amish.',
  },
  {
    text: 'The rhythms of Africa.',
  },
  {
    text: 'Lance Armstrong\'s missing testicle.',
  },
  {
    text: 'Pedophiles.',
  },
  {
    text: 'The Pope.',
  },
  {
    text: 'Flying sex snakes.',
  },
  {
    text: 'Sarah Palin.',
  },
  {
    text: 'Feeding Rosie O\'Donnell.',
  },
  {
    text: 'Sexy pillow fights.',
  },
  {
    text: 'Invading Poland.',
  },
  {
    text: 'Cybernetic enhancements.',
  },
  {
    text: 'Civilian casualties.',
  },
  {
    text: 'Jobs.',
  },
  {
    text: 'The female orgasm.',
  },
  {
    text: 'Bitches.',
  },
  {
    text: 'The Boy Scouts of America.',
  },
  {
    text: 'Auschwitz.',
  },
  {
    text: 'Finger painting.',
  },
  {
    text: 'The Care Bear Stare.',
  },
  {
    text: 'The Jews.',
  },
  {
    text: 'Being marginalized.',
  },
  {
    text: 'The Blood of Christ.',
  },
  {
    text: 'Dead parents.',
  },
  {
    text: 'The art of seduction.',
  },
  {
    text: 'Dying of dysentery.',
  },
  {
    text: 'Mr. Clean, right behind you.',
  },
  {
    text: 'Magnets.',
  },
  {
    text: 'Jewish fraternities.',
  },
  {
    text: 'Hot Pockets.',
  },
  {
    text: 'Natalie Portman.',
  },
  {
    text: 'Agriculture.',
  },
  {
    text: 'Judge Judy.',
  },
  {
    text: 'Surprise sex!',
  },
  {
    text: 'The homosexual agenda.',
  },
  {
    text: 'Robert Downey, Jr.',
  },
  {
    text: 'The Trail of Tears.',
  },
  {
    text: 'An M. Night Shyamalan plot twist.',
  },
  {
    text: 'Funky fresh rhymes.',
  },
  {
    text: 'The light of a billion suns.',
  },
  {
    text: 'Amputees.',
  },
  {
    text: 'Throwing a virgin into a volcano.',
  },
  {
    text: 'Italians.',
  },
  {
    text: 'Explosions.',
  },
  {
    text: 'A good sniff.',
  },
  {
    text: 'Destroying the evidence.',
  },
  {
    text: 'Children on leashes.',
  },
  {
    text: 'Catapults.',
  },
  {
    text: 'One trillion dollars.',
  },
  {
    text: 'Friends with benefits.',
  },
  {
    text: 'Dying.',
  },
  {
    text: 'Silence.',
  },
  {
    text: 'Growing a pair.',
  },
  {
    text: 'YOU MUST CONSTRUCT ADDITIONAL PYLONS.',
  },
  {
    text: 'Justin Bieber.',
  },
  {
    text: 'The Holy Bible.',
  },
  {
    text: 'Balls.',
  },
  {
    text: 'Praying the gay away.',
  },
  {
    text: 'Teenage pregnancy.',
  },
  {
    text: 'German dungeon porn.',
  },
  {
    text: 'The invisible hand.',
  },
  {
    text: 'My inner demons.',
  },
  {
    text: 'Powerful thighs.',
  },
  {
    text: 'Getting naked and watching Nickelodeon.',
  },
  {
    text: 'Crippling debt.',
  },
  {
    text: 'Kamikaze pilots.',
  },
  {
    text: 'Teaching a robot to love.',
  },
  {
    text: 'Police brutality.',
  },
  {
    text: 'Horse meat.',
  },
  {
    text: 'All-you-can-eat shrimp for $4.99.',
  },
  {
    text: 'Heteronormativity.',
  },
  {
    text: 'Michael Jackson.',
  },
  {
    text: 'A really cool hat.',
  },
  {
    text: 'Copping a feel.',
  },
  {
    text: 'Crystal meth.',
  },
  {
    text: 'Shapeshifters.',
  },
  {
    text: 'Fingering.',
  },
  {
    text: 'A disappointing birthday party.',
  },
  {
    text: 'The Patriarchy.',
  },
  {
    text: 'My soul.',
  },
  {
    text: 'A sausage festival.',
  },
  {
    text: 'The chronic.',
  },
  {
    text: 'Eugenics.',
  },
  {
    text: 'Synergistic management solutions.',
  },
  {
    text: 'RoboCop.',
  },
  {
    text: 'Serfdom.',
  },
  {
    text: 'Stephen Hawking talking dirty.',
  },
  {
    text: 'A man on the brink of orgasm.',
  },
  {
    text: 'Fiery poops.',
  },
  {
    text: 'Public ridicule.',
  },
  {
    text: 'White-man scalps.',
  },
  {
    text: 'The morbidly obese.',
  },
  {
    text: 'Object permanence.',
  },
  {
    text: 'GoGurt.',
  },
  {
    text: 'Lockjaw.',
  },
  {
    text: 'Joe Biden.',
  },
  {
    text: 'Bio-engineered assault turtles with acid breath.',
  },
  {
    text: 'Wet dreams.',
  },
  {
    text: 'Hip hop jewels.',
  },
  {
    text: 'Firing a rifle into the air while balls deep in a squealing hog.',
  },
  {
    text: 'Panda sex.',
  },
  {
    text: 'Necrophilia.',
  },
  {
    text: 'Grave robbing.',
  },
  {
    text: 'A bleached asshole.',
  },
  {
    text: 'Muhammad (Praise Be Unto Him).',
  },
  {
    text: 'Multiple stab wounds.',
  },
  {
    text: 'Daniel Radcliffe\'s delicious asshole.',
  },
  {
    text: 'A monkey smoking a cigar.',
  },
  {
    text: 'Smegma.',
  },
  {
    text: 'A live studio audience.',
  },
  {
    text: 'Making a pouty face.',
  },
  {
    text: 'The violation of our most basic human rights.',
  },
  {
    text: 'Unfathomable stupidity.',
  },
  {
    text: 'Sunshine and rainbows.',
  },
  {
    text: 'Whipping it out.',
  },
  {
    text: 'The token minority.',
  },
  {
    text: 'The terrorists.',
  },
  {
    text: 'The Three-Fifths compromise.',
  },
  {
    text: 'A snapping turtle biting the tip of your penis.',
  },
  {
    text: 'Vehicular manslaughter.',
  },
  {
    text: 'The Great Depression.',
  },
  {
    text: 'Emotions.',
  },
  {
    text: 'Getting so angry that you pop a boner.',
  },
  {
    text: 'Same-sex ice dancing.',
  },
  {
    text: 'An M16 assault rifle.',
  },
  {
    text: 'Man meat.',
  },
  {
    text: 'Incest.',
  },
  {
    text: 'A foul mouth.',
  },
  {
    text: 'Flightless birds.',
  },
  {
    text: 'Doing the right thing.',
  },
  {
    text: 'When you fart and a little bit comes out.',
  },
  {
    text: 'Frolicking.',
  },
  {
    text: 'Being a dick to children.',
  },
  {
    text: 'Poopy diapers.',
  },
  {
    text: 'Seeing grandma naked.',
  },
  {
    text: 'Raptor attacks.',
  },
  {
    text: 'Swooping.',
  },
  {
    text: 'Concealing a boner.',
  },
  {
    text: 'Full frontal nudity.',
  },
  {
    text: 'Vigorous jazz hands.',
  },
  {
    text: 'Nipple blades.',
  },
  {
    text: 'A bitch slap.',
  },
  {
    text: 'Michelle Obama\'s arms.',
  },
  {
    text: 'Mouth herpes.',
  },
  {
    text: 'A robust mongoloid.',
  },
  {
    text: 'Mutually-assured destruction.',
  },
  {
    text: 'The Rapture.',
  },
  {
    text: 'Road head.',
  },
  {
    text: 'Stalin.',
  },
  {
    text: 'Lactation.',
  },
  {
    text: 'Hurricane Katrina.',
  },
  {
    text: 'The true meaning of Christmas.',
  },
  {
    text: 'Self-loathing.',
  },
  {
    text: 'A brain tumor.',
  },
  {
    text: 'Dead babies.',
  },
  {
    text: 'New Age music.',
  },
  {
    text: 'A thermonuclear detonation.',
  },
  {
    text: 'Geese.',
  },
  {
    text: 'Kanye West.',
  },
  {
    text: 'God.',
  },
  {
    text: 'A spastic nerd.',
  },
  {
    text: 'Harry Potter erotica.',
  },
  {
    text: 'Kids with ass cancer.',
  },
  {
    text: 'Lumberjack fantasies.',
  },
  {
    text: 'The American Dream.',
  },
  {
    text: 'Puberty.',
  },
  {
    text: 'Sweet, sweet vengeance.',
  },
  {
    text: 'Winking at old people.',
  },
  {
    text: 'The wonders of the Orient.',
  },
  {
    text: 'Oompa-Loompas.',
  },
  {
    text: 'Authentic Mexican cuisine.',
  },
  {
    text: 'Preteens.',
  },
  {
    text: 'The Little Engine That Could.',
  },
  {
    text: 'A Fleshlight.',
  },
  {
    text: 'Erectile dysfunction.',
  },
  {
    text: 'Having anuses for eyes.',
  },
  {
    text: 'Rush Limbaugh\'s soft, shitty body.',
  },
  {
    text: 'Saxophone solos.',
  },
  {
    text: 'Land mines.',
  },
  {
    text: 'Running out of semen.',
  },
  {
    text: 'Me time.',
  },
  {
    text: 'Nickelback.',
  },
  {
    text: 'Vigilante justice.',
  },
  {
    text: 'The South.',
  },
  {
    text: 'Opposable thumbs.',
  },
  {
    text: 'Ghosts.',
  },
  {
    text: 'Alcoholism.',
  },
  {
    text: 'Poorly-timed Holocaust jokes.',
  },
  {
    text: 'Inappropriate yodeling.',
  },
  {
    text: 'Battlefield amputations.',
  },
  {
    text: 'Exactly what you\'d expect.',
  },
  {
    text: 'A time travel paradox.',
  },
  {
    text: 'AXE Body Spray.',
  },
  {
    text: 'The pirate\'s life.',
  },
  {
    text: 'Saying "I love you."',
  },
  {
    text: 'A sassy black woman.',
  },
  {
    text: 'Being a motherfucking sorcerer.',
  },
  {
    text: 'A mopey zoo lion.',
  },
  {
    text: 'A murder most foul.',
  },
  {
    text: 'A falcon with a cap on its head.',
  },
  {
    text: 'Farting and walking away.',
  },
  {
    text: 'A mating display.',
  },
  {
    text: 'The Chinese gymnastics team.',
  },
  {
    text: 'Friction.',
  },
  {
    text: 'Asians who aren\'t good at math.',
  },
  {
    text: 'Fear itself.',
  },
  {
    text: 'A can of whoop-ass.',
  },
  {
    text: 'Yeast.',
  },
  {
    text: 'Lunchables.',
  },
  {
    text: 'Licking things to claim them as your own.',
  },
  {
    text: 'Vikings.',
  },
  {
    text: 'The Kool-Aid Man.',
  },
  {
    text: 'Hot cheese.',
  },
  {
    text: 'Nicolas Cage.',
  },
  {
    text: 'A defective condom.',
  },
  {
    text: 'The inevitable heat death of the universe.',
  },
  {
    text: 'Republicans.',
  },
  {
    text: 'William Shatner.',
  },
  {
    text: 'Tentacle porn.',
  },
  {
    text: 'Sperm whales.',
  },
  {
    text: 'Lady Gaga.',
  },
  {
    text: 'The wrath of Vladimir Putin.',
  },
  {
    text: 'Gloryholes.',
  },
  {
    text: 'Daddy issues.',
  },
  {
    text: 'A mime having a stoke.',
  },
  {
    text: 'White people.',
  },
  {
    text: 'A lifelong of sadness.',
  },
  {
    text: 'Tasteful sideboob.',
  },
  {
    text: 'A sea of troubles.',
  },
  {
    text: 'Nazis.',
  },
  {
    text: 'A cooler full of organs.',
  },
  {
    text: 'Giving 110%.',
  },
  {
    text: 'Doin\' it in the butt.',
  },
  {
    text: 'John Wilkes Booth.',
  },
  {
    text: 'Holding down a child and farting all over him.',
  },
  {
    text: 'A homoerotic volleyball montage.',
  },
  {
    text: 'Puppies!',
  },
  {
    text: 'Natural male enhancement.',
  },
  {
    text: 'Brown people.',
  },
  {
    text: 'Dropping a chandelier on your enemies and riding the rope up..',
  },
  {
    text: 'Soup that is too hot.',
  },
  {
    text: 'Sex with Patrick Stewart.',
  },
  {
    text: 'Hormone injections.',
  },
  {
    text: 'Pulling out.',
  },
  {
    text: 'The Big Bang.',
  },
  {
    text: 'Switching to Geico.',
  },
  {
    text: 'Giving birth to the Antichrist.',
  },
  {
    text: 'Dark and mysterious forces beyond our control.',
  },
  {
    text: 'Christopher Walken.',
  },
  {
    text: 'Count Chocula.',
  },
  {
    text: 'The Hamburglar.',
  },
  {
    text: 'Not reciprocating oral sex.',
  },
  {
    text: 'Aaron Burr.',
  },
  {
    text: 'Hot people.',
  },
  {
    text: 'Foreskin.',
  },
  {
    text: 'Assless chaps.',
  },
  {
    text: 'The miracle of childbirth.',
  },
  {
    text: 'Waiting \'til marriage.',
  },
  {
    text: 'Two midgets shitting into a bucket.',
  },
  {
    text: 'Adderall.',
  },
  {
    text: 'A sad handjob.',
  },
  {
    text: 'Cheating in the Special Olympics.',
  },
  {
    text: 'The glass ceiling.',
  },
  {
    text: 'The Hustle.',
  },
  {
    text: 'Miley Cyrus at 55.',
  },
  {
    text: 'Our first chimpanzee president.',
  },
  {
    text: 'Breaking out into song and dance.',
  },
  {
    text: 'A Super Soaker full of cat pee.',
  },
  {
    text: 'The Underground Railroad.',
  },
  {
    text: 'Home video of Oprah sobbing into a Lean Cuisine.',
  },
  {
    text: 'The Rev. Dr. Martin Luther King, Jr.',
  },
  {
    text: 'Extremely tight pants.',
  },
  {
    text: 'Third base.',
  },
  {
    text: 'Waking up half-naked in a Denny\'s parking lot.',
  },
  {
    text: 'The cool, refreshing taste of Pepsi.',
  },
  {
    text: 'White privilege.',
  },
  {
    text: 'Hope.',
  },
  {
    text: 'Taking off your shirt.',
  },
  {
    text: 'Smallpox blankets.',
  },
  {
    text: 'Ethnic cleansing.',
  },
  {
    text: 'Queefing.',
  },
  {
    text: 'Helplessly giggling at the mention of Hutus and Tutsis.',
  },
  {
    text: 'Getting really high.',
  },
  {
    text: 'Natural selection.',
  },
  {
    text: 'A gassy antelope.',
  },
  {
    text: 'My sex life.',
  },
  {
    text: 'Arnold Schwarzenegger.',
  },
  {
    text: 'Pretending to care.',
  },
  {
    text: 'Ronald Reagan.',
  },
  {
    text: 'Toni Morrison\'s vagina.',
  },
  {
    text: 'An ugly face.',
  },
  {
    text: 'My black ass.',
  },
  {
    text: 'BATMAN!!!',
  },
  {
    text: 'Homeless people.',
  },
  {
    text: 'Racially-biased SAT questions.',
  },
  {
    text: 'Centaurs.',
  },
  {
    text: 'A salty surprise.',
  },
  {
    text: '72 virgins.',
  },
  {
    text: 'Embryonic stem cells.',
  },
  {
    text: 'Pixelated bukkake.',
  },
  {
    text: 'Seppuku.',
  },
  {
    text: 'An icepick lobotomy.',
  },
  {
    text: 'Genuine human connection.',
  },
  {
    text: 'Menstrual rage.',
  },
  {
    text: 'Sexual peeing.',
  },
  {
    text: 'An endless stream of diarrhea.',
  },
  {
    text: 'Shaquille O\'Neal\'s acting career.',
  },
  {
    text: 'Horrifying laser hair removal accidents.',
  },
  {
    text: 'Autocannibalism.',
  },
  {
    text: 'A fetus.',
  },
  {
    text: 'Riding off into the sunset.',
  },
  {
    text: 'Goblins.',
  },
  {
    text: 'Eating the last known bison.',
  },
  {
    text: 'Shiny objects.',
  },
  {
    text: 'Being rich.',
  },
  {
    text: 'A Bop It.',
  },
  {
    text: 'Leprosy.',
  },
  {
    text: 'World peace.',
  },
  {
    text: 'Dick fingers.',
  },
  {
    text: 'Chainsaws for hands.',
  },
  {
    text: 'The Make-A-Wish Foundation.',
  },
  {
    text: 'Penis breath.',
  },
  {
    text: 'Laying an egg.',
  },
  {
    text: 'The folly of man.',
  },
  {
    text: 'My genitals.',
  },
  {
    text: 'Grandma.',
  },
  {
    text: 'Flesh-eating bacteria.',
  },
  {
    text: 'Poor people.',
  },
  {
    text: '50,000 volts straight to the nipples.',
  },
  {
    text: 'Active listening.',
  },
  {
    text: 'The Übermensch.',
  },
  {
    text: 'Poor life choices.',
  },
  {
    text: 'Altar boys.',
  },
  {
    text: 'My vagina.',
  },
  {
    text: 'Pac-Man uncontrollably guzzling cum.',
  },
  {
    text: 'Sniffing glue.',
  },
  {
    text: 'The placenta.',
  },
  {
    text: 'The profoundly handicapped.',
  },
  {
    text: 'Spontaneous human combustion.',
  },
  {
    text: 'The KKK.',
  },
  {
    text: 'The clitoris.',
  },
  {
    text: 'Not wearing pants.',
  },
  {
    text: 'Consensual sex.',
  },
  {
    text: 'Black people.',
  },
  {
    text: 'A bucket of fish heads.',
  },
  {
    text: 'Hospice care.',
  },
  {
    text: 'Passive-aggressive Post-it notes.',
  },
  {
    text: 'Fancy Feast.',
  },
  {
    text: 'The heart of a child.',
  },
  {
    text: 'Crumbs all over the god damn carpet.',
  },
  {
    text: 'Your weird brother.',
  },
  {
    text: 'Being fat and stupid.',
  },
  {
    text: 'Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.',
  },
  {
    text: 'Sean Penn.',
  },
  {
    text: 'Sean Connery.',
  },
  {
    text: 'Expecting a burp and vomiting on the floor.',
  },
  {
    text: 'Wifely duties.',
  },
  {
    text: 'A pyramid of severed heads.',
  },
  {
    text: 'Genghis Khan.',
  },
  {
    text: 'Historically black colleges.',
  },
  {
    text: 'Crucifixion.',
  },
  {
    text: 'A subscription to Men\'s Fitness.',
  },
  {
    text: 'The milk man.',
  },
  {
    text: 'Friendly fire.',
  },
  {
    text: 'Women\'s suffrage.',
  },
  {
    text: 'AIDS.',
  },
  {
    text: 'Former President George W. Bush.',
  },
  {
    text: '8 oz. of sweet Mexican black-tar heroin.',
  },
  {
    text: 'Half-assed foreplay.',
  },
  {
    text: 'Edible underpants.',
  },
  {
    text: 'My collection of high-tech sex toys.',
  },
  {
    text: 'The Force.',
  },
  {
    text: 'Bees?',
  },
  {
    text: 'Some god-damn peace and quiet.',
  },
  {
    text: 'Jerking off into a pool of children\'s tears.',
  },
  {
    text: 'A micropig wearing a tiny raincoat and booties.',
  },
  {
    text: 'Three dicks at the same time.',
  },
  {
    text: 'Masturbation.',
  },
  {
    text: 'Tom Cruise.',
  },
  {
    text: 'A balanced breakfast.',
  },
  {
    text: 'Anal beads.',
  },
  {
    text: 'Drinking alone.',
  },
  {
    text: 'Cards Against Humanity.',
  },
  {
    text: 'Coat hanger abortions.',
  },
  {
    text: 'Used panties.',
  },
  {
    text: 'Cuddling.',
  },
  {
    text: 'Wiping her butt.',
  },
  {
    text: 'Domino\'s Oreo Dessert Pizza.',
  },
  {
    text: 'A zesty breakfast burrito.',
  },
  {
    text: 'Morgan Freeman\'s voice.',
  },
  {
    text: 'A middle-aged man on roller skates.',
  },
  {
    text: 'Gandhi.',
  },
  {
    text: 'The penny whistle solo from "My Heart Will Go On."',
  },
  {
    text: 'Spectacular abs.',
  },
  {
    text: 'Keanu Reeves.',
  },
  {
    text: 'Child beauty pageants.',
  },
  {
    text: 'Child abuse.',
  },
  {
    text: 'Bill Nye the Science Guy.',
  },
  {
    text: 'Science.',
  },
  {
    text: 'A tribe of warrior women.',
  },
  {
    text: 'Viagra.',
  },
  {
    text: 'Her Majesty, Queen Elizabeth II.',
  },
  {
    text: 'The entire Mormon Tabernacle Choir.',
  },
  {
    text: 'This year\'s mass shooting.',
  },
  {
    text: 'Take-backsies.',
  },
  {
    text: 'An erection that lasts longer than four hours.',
  },
];

const seedDataBlack = [
  {
    text: 'How did I lose my virginity?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Why can\'t I sleep at night?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s that smell?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'I got 99 problems but __________ ain\'t one.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Maybe she\'s born with it. Maybe it\'s __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s the next Happy Meal toy?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Here is the church. Here is the steeple. Open the doors and there is __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'It\'s a pity that kids these days are all getting involved with __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Today on Maury: "Help! My son is __________!"',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Alternative medicine is now embracing the curative powers of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'And the Academy Award for __________ goes to __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'What\'s that sound?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What ended my last relationship?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'MTV\'s new reality show features eight washed-up celebrities living with __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'I drink to forget __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'I\'m sorry, Professor, but I couldn\'t complete my homework because of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What is Batman\'s guilty pleasure?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'This is the way the world ends | This is the way the world ends | Not with a band but with __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s a girl\'s best friend?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'TSA guidelines now prohibit __________ on airplanes.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________. That\'s how I want to die.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'For my next trick, I will pull __________ out of __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'In the new Disney Channel Original Movie, Hannah Montana struggles with __________ for the first time.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________ is a slippery slope that leads to __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'I get by with a little help from __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Dear Abby, I\'m having some trouble with __________ and would like your advice.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Instead of coal, Santa now gives the bad children __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s the most emo?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Introducing the amazing superhero/sidekick duo! It\'s __________ and __________!',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'In M. Night Shyamalan\'s new movie, Bruce Willis discovers that __________ had really been __________ all along.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'A romantic, candlelit dinner would be incomplete without ___________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________. Betcha can\'t have just one!',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'White people like __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________. High five, bro.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Next from J.K. Rowling: Harry Potter and the Chamber of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Introducing Xtreme Baseball! It\'s like baseball, but with ___________!',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'In a world ravaged by __________, our only solace is __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'War! What is it good for?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'During sex, I like to think about __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What are my parents hiding from me?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What will always get you laid?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'In L.A. County Jail, word is you can trade 200 cigarettes for __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What did I bring back from Mexico?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What don\'t you want to find in your Kung Pao chicken?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What will I bring back in time to convince people that I am a powerful wizard?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'How am I maintaining my relationship status?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________. It\'s a trap!',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Coming to Broadway this season, __________: The Musical.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'After the earthquake, Sean Penn brought __________ to the people of Haiti.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Next on ESPN2, the World Series of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Step 1: __________. Step 2: __________. Step 3: Profit.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'They said we were crazy. They said we couldn\'t put __________ inside of __________. They were wrong.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'But before I kill you, Mr. Bond, I must show you ___________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What gives me uncontrollable gas?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'The new Chevy Tahoe. With the power and space to take __________ everywhere you go.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'The class field trip was completely ruined by __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'When Pharaoh remained unmoved, Moses called down a Plague of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s my secret power?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s there a ton of in heaven?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What would grandma find disturbing, yet oddly charming?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'I never truly understood __________ until I encountered __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'What did the U.S. airdrop to the children of Afghanistan?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What helps Obama unwind?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What did Vin Diesel eat for dinner?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________: good to the last drop.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Why am I sticky?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What gets better with age?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________: kid-tested, mother-approved.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Daddy, why is mommy crying?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s Teach for America using to inspire inner city students to succeed?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'A recent laboratory study shows that undergraduates have 50% less sex after being exposed to __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Life for American Indians was forever changed when the White Man introduced them to __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Make a haiku.',
    isPickTwo: false,
    isPickThree: true
  },
  {
    text: 'I do not know with what weapons World War III will be fought, but World War IV will be fought with __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Why do I hurt all over?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What am I giving up for Lent?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s George W. Bush thinking about right now?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'The Smithsonian Museum of Natural History has just opened an interactive exhibit on __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'When I am President of the United States, I will create the Department of __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Lifetime presents "__________, the Story of __________."',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'When I am a billionaire, I shall erect a 50-foot statue to commemorate __________.',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'When I was tripping on acid, __________ turned into __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'That\'s right, I killed __________. How, you ask? __________.',
    isPickTwo: true,
    isPickThree: false
  },
  {
    text: 'What\'s my anti-drug?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: '__________ + __________ = __________.',
    isPickTwo: false,
    isPickThree: true
  },
  {
    text: 'What never fails to liven up the party?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'What\'s the new fad diet?',
    isPickTwo: false,
    isPickThree: false
  },
  {
    text: 'Fun tip! When your man asks you to go down on him, try surprising him with __________ instead.',
    isPickTwo: false,
    isPickThree: false
  }
];

const seedDataGames = [
  {
    name: 'Game 1',
    isOpen: true,
    isActive: false,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 4,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [

    ],
    isDummy: true
  },
  {
    name: 'Game 2',
    isOpen: false,
    isActive: true,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 3,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [
      {
        blackCardId: '1',
        cardPool: [{cardId: '1', playerId: '2'}],
        winner: null
      }
    ],
    isDummy: true
  },
  {
    name: 'Game 3',
    isOpen: true,
    isActive: false,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 4,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [

    ],
    isDummy: true
  },
  {
    name: 'Game 4',
    isOpen: false,
    isActive: true,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 3,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [
      {
        blackCardId: '1',
        cardPool: [{cardId: '1', playerId: '2'}],
        winner: null
      }
    ],
    isDummy: true
  },
  {
    name: 'Game 5',
    isOpen: true,
    isActive: false,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 4,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [

    ],
    isDummy: true
  },
  {
    name: 'Game 6',
    isOpen: false,
    isActive: true,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 3,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [
      {
        blackCardId: '1',
        cardPool: [{cardId: '1', playerId: '2'}],
        winner: null
      }
    ],
    isDummy: true
  },
  {
    name: 'Game 7',
    isOpen: true,
    isActive: false,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 4,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [

    ],
    isDummy: true
  },
  {
    name: 'Game 8',
    isOpen: false,
    isActive: true,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 3,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [
      {
        blackCardId: '1',
        cardPool: [{cardId: '1', playerId: '2'}],
        winner: null
      }
    ],
    isDummy: true
  },
  {
    name: 'Game 9',
    isOpen: true,
    isActive: false,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 4,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [

    ],
    isDummy: true
  },
  {
    name: 'Game 10',
    isOpen: false,
    isActive: true,
    options: {
      isPrivate: false,
      maxScore: 10,
      maxPlayers: 3,
      timeLimit: 0,
      blackDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
      whiteDeck: [{ _id: '1'}, { _id: '2'}, { _id: '3'}],
    },
    players: [
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      },
      {
        awesomePoints: 0,
        hand: []
      }
    ],
    turns: [
      {
        blackCardId: '1',
        cardPool: [{cardId: '1', playerId: '2'}],
        winner: null
      }
    ],
    isDummy: true
  },
];

const createUser = function (username, email) {
  const user = {
    username,
    email,
    isDummy: true,
  };
  newMutation({
    collection: Users,
    document: user,
    validate: false
  });
};

let createDummyUsers = function () {
  createUser('CardsAgainstHumanity', 'Mail@CardsAgainstHumanity.com');
  createUser('Rando Cardrissian', 'Rando@CardsAgainstHumanity.com');
  createUser('Dummy1', 'Dummy1@CardsAgainstHumanity.com');
  createUser('Dummy2', 'Dummy2@CardsAgainstHumanity.com');
  createUser('Dummy3', 'Dummy3@CardsAgainstHumanity.com');
  createUser('Dummy4', 'Dummy4@CardsAgainstHumanity.com');
  createUser('Dummy5', 'Dummy5@CardsAgainstHumanity.com');
  createUser('Dummy6', 'Dummy6@CardsAgainstHumanity.com');
  createUser('Dummy7', 'Dummy7@CardsAgainstHumanity.com');
  createUser('Dummy8', 'Dummy8@CardsAgainstHumanity.com');
};

Meteor.startup(function() {

  if (Users.find().fetch().length === 0) {
    console.log('// seeding the database with dummy users');
    createDummyUsers();
  }

  const currentUser = Users.findOne();

  if (BlackCards.find().fetch().length === 0) {
    console.log('// seeding database with default black deck');
    seedDataBlack.forEach(document => {
      newMutation({
        action: 'blackcards.new',
        collection: BlackCards,
        document: document,
        currentUser: currentUser,
        validate: false
      });
    });
  }

  if (WhiteCards.find().fetch().length === 0) {
    console.log('// seeding database with default white deck');
    seedDataWhite.forEach(document => {
      newMutation({
        action: 'whitecards.new',
        collection: WhiteCards,
        document: document,
        currentUser: currentUser,
        validate: false
      });
    });
  }

  if (Games.find().fetch().length === 0) {
    console.log('// seeding database with dummy games');
    seedDataGames.forEach(document => {
      newMutation({
        action: 'games.new',
        collection: Games,
        document: document,
        currentUser: currentUser,
        validate: false
      });
    });
  }
});
