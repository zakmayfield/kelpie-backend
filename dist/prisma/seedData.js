const dogBreeds = [
    'Affenpinscher',
    'Afghan Hound',
    'Aidi',
    'Airedale Terrier',
    'Akbash Dog',
    'Akita',
    'Alano Español',
    'Alaskan Klee Kai',
    'Alaskan Malamute',
    'Alpine Dachsbracke',
    'Alpine Spaniel',
    'American Bulldog',
    'American Cocker Spaniel',
    'American Eskimo Dog',
    'American Foxhound',
    'American Hairless Terrier',
    'American Pit Bull Terrier',
    'American Staffordshire Terrier',
    'American Water Spaniel',
    'Anglo-Français de Petite Vénerie',
    'Appenzeller Sennenhund',
    'Ariege Pointer',
    'Ariegeois',
    'Armant',
    'Armenian Gampr dog',
    'Artois Hound',
    'Australian Cattle Dog',
    'Australian Kelpie',
    'Australian Shepherd',
    'Australian Silky Terrier',
    'Australian Stumpy Tail Cattle Dog',
    'Australian Terrier',
    'Azawakh',
    'Bakharwal Dog',
    'Barbet',
    'Basenji',
    'Basque Shepherd Dog',
    'Basset Artésien Normand',
    'Basset Bleu de Gascogne',
    'Basset Fauve de Bretagne',
    'Basset Hound',
    'Bavarian Mountain Hound',
    'Beagle',
    'Beagle-Harrier',
    'Bearded Collie',
    'Beauceron',
    'Bedlington Terrier',
    'Belgian Shepherd Dog (Groenendael)',
    'Belgian Shepherd Dog (Laekenois)',
    'Belgian Shepherd Dog (Malinois)',
    'Bergamasco Shepherd',
    'Berger Blanc Suisse',
    'Berger Picard',
    'Berner Laufhund',
    'Bernese Mountain Dog',
    'Billy',
    'Black and Tan Coonhound',
    'Black and Tan Virginia Foxhound',
    'Black Norwegian Elkhound',
    'Black Russian Terrier',
    'Bloodhound',
    'Blue Lacy',
    'Blue Paul Terrier',
    'Boerboel',
    'Bohemian Shepherd',
    'Bolognese',
    'Border Collie',
    'Border Terrier',
    'Borzoi',
    'Boston Terrier',
    'Bouvier des Ardennes',
    'Bouvier des Flandres',
    'Boxer',
    'Boykin Spaniel',
    'Bracco Italiano',
    "Braque d'Auvergne",
    'Braque du Bourbonnais',
    'Braque du Puy',
    'Braque Francais',
    'Braque Saint-Germain',
    'Brazilian Terrier',
    'Briard',
    'Briquet Griffon Vendéen',
    'Brittany',
    'Broholmer',
    'Bruno Jura Hound',
    'Bucovina Shepherd Dog',
    'Bull and Terrier',
    'Bull Terrier (Miniature)',
    'Bull Terrier',
    'Bulldog',
    'Bullenbeisser',
    'Bullmastiff',
    'Bully Kutta',
    'Burgos Pointer',
    'Cairn Terrier',
    'Canaan Dog',
    'Canadian Eskimo Dog',
    'Cane Corso',
    'Cardigan Welsh Corgi',
    'Carolina Dog',
    'Carpathian Shepherd Dog',
    'Catahoula Cur',
    'Catalan Sheepdog',
    'Caucasian Shepherd Dog',
    'Cavalier King Charles Spaniel',
    'Central Asian Shepherd Dog',
    'Cesky Fousek',
    'Cesky Terrier',
    'Chesapeake Bay Retriever',
    'Chien Français Blanc et Noir',
    'Chien Français Blanc et Orange',
    'Chien Français Tricolore',
    'Chien-gris',
    'Chihuahua',
    'Chilean Fox Terrier',
    'Chinese Chongqing Dog',
    'Chinese Crested Dog',
    'Chinese Imperial Dog',
    'Chinook',
    'Chippiparai',
    'Chow Chow',
    'Cierny Sery',
    'Cimarrón Uruguayo',
    "Cirneco dell'Etna",
    'Clumber Spaniel',
    'Combai',
    'Cordoba Fighting Dog',
    'Coton de Tulear',
    'Cretan Hound',
    'Croatian Sheepdog',
    'Cumberland Sheepdog',
    'Curly Coated Retriever',
    'Cursinu',
    'Cão da Serra de Aires',
    'Cão de Castro Laboreiro',
    'Cão Fila de São Miguel',
    'Dachshund',
    'Dalmatian',
    'Dandie Dinmont Terrier',
    'Danish Swedish Farmdog',
    'Deutsche Bracke',
    'Doberman Pinscher',
    'Dogo Argentino',
    'Dogo Cubano',
    'Dogue de Bordeaux',
    'Drentse Patrijshond',
    'Drever',
    'Dunker',
    'Dutch Shepherd Dog',
    'Dutch Smoushond',
    'East Siberian Laika',
    'East-European Shepherd',
    'Elo',
    'English Cocker Spaniel',
    'English Foxhound',
    'English Mastiff',
    'English Setter',
    'English Shepherd',
    'English Springer Spaniel',
    'English Toy Terrier (Black &amp; Tan)',
    'English Water Spaniel',
    'English White Terrier',
    'Entlebucher Mountain Dog',
    'Estonian Hound',
    'Estrela Mountain Dog',
    'Eurasier',
    'Field Spaniel',
    'Fila Brasileiro',
    'Finnish Hound',
    'Finnish Lapphund',
    'Finnish Spitz',
    'Flat-Coated Retriever',
    'Formosan Mountain Dog',
    'Fox Terrier (Smooth)',
    'French Bulldog',
    'French Spaniel',
    'Galgo Español',
    'Gascon Saintongeois',
    'German Longhaired Pointer',
    'German Pinscher',
    'German Shepherd',
    'German Shorthaired Pointer',
    'German Spaniel',
    'German Spitz',
    'German Wirehaired Pointer',
    'Giant Schnauzer',
    'Glen of Imaal Terrier',
    'Golden Retriever',
    'Gordon Setter',
    'Gran Mastín de Borínquen',
    'Grand Anglo-Français Blanc et Noir',
    'Grand Anglo-Français Blanc et Orange',
    'Grand Anglo-Français Tricolore',
    'Grand Basset Griffon Vendéen',
    'Grand Bleu de Gascogne',
    'Grand Griffon Vendéen',
    'Great Dane',
    'Great Pyrenees',
    'Greater Swiss Mountain Dog',
    'Greek Harehound',
    'Greenland Dog',
    'Greyhound',
    'Griffon Bleu de Gascogne',
    'Griffon Bruxellois',
    'Griffon Fauve de Bretagne',
    'Griffon Nivernais',
    'Hamiltonstövare',
    'Hanover Hound',
    'Hare Indian Dog',
    'Harrier',
    'Havanese',
    'Hawaiian Poi Dog',
    'Himalayan Sheepdog',
    'Hokkaido',
    'Hovawart',
    'Huntaway',
    'Hygenhund',
    'Ibizan Hound',
    'Icelandic Sheepdog',
    'Indian pariah dog',
    'Indian Spitz',
    'Irish Red and White Setter',
    'Irish Setter',
    'Irish Terrier',
    'Irish Water Spaniel',
    'Irish Wolfhound',
    'Istrian Coarse-haired Hound',
    'Istrian Shorthaired Hound',
    'Italian Greyhound',
    'Jack Russell Terrier',
    'Jagdterrier',
    'Jämthund',
    'Kai Ken',
    'Kaikadi',
    'Kanni',
    'Karelian Bear Dog',
    'Karst Shepherd',
    'Keeshond',
    'Kerry Beagle',
    'Kerry Blue Terrier',
    'King Charles Spaniel',
    'King Shepherd',
    'Kintamani',
    'Kishu',
    'Komondor',
    'Kooikerhondje',
    'Koolie',
    'Korean Jindo Dog',
    'Kromfohrländer',
    'Kumaon Mastiff',
    'Kurī',
    'Kuvasz',
    'Kyi-Leo',
    'Labrador Husky',
    'Labrador Retriever',
    'Lagotto Romagnolo',
    'Lakeland Terrier',
    'Lancashire Heeler',
    'Landseer',
    'Lapponian Herder',
    'Large Münsterländer',
    'Leonberger',
    'Lhasa Apso',
    'Lithuanian Hound',
    'Longhaired Whippet',
    'Löwchen',
    'Mahratta Greyhound',
    'Maltese',
    'Manchester Terrier',
    'Maremma Sheepdog',
    'McNab',
    'Mexican Hairless Dog',
    'Miniature American Shepherd',
    'Miniature Australian Shepherd',
    'Miniature Fox Terrier',
    'Miniature Pinscher',
    'Miniature Schnauzer',
    'Miniature Shar Pei',
    'Molossus',
    'Montenegrin Mountain Hound',
    'Moscow Watchdog',
    'Moscow Water Dog',
    'Mountain Cur',
    'Mucuchies',
    'Mudhol Hound',
    'Mudi',
    'Neapolitan Mastiff',
    'New Zealand Heading Dog',
    'Newfoundland',
    'Norfolk Spaniel',
    'Norfolk Terrier',
    'Norrbottenspets',
    'North Country Beagle',
    'Northern Inuit Dog',
    'Norwegian Buhund',
    'Norwegian Elkhound',
    'Norwegian Lundehund',
    'Norwich Terrier',
    'Old Croatian Sighthound',
    'Old Danish Pointer',
    'Old English Sheepdog',
    'Old English Terrier',
    'Old German Shepherd Dog',
    'Olde English Bulldogge',
    'Otterhound',
    'Pachon Navarro',
    'Paisley Terrier',
    'Pandikona',
    'Papillon',
    'Parson Russell Terrier',
    'Patterdale Terrier',
    'Pekingese',
    'Pembroke Welsh Corgi',
    'Perro de Presa Canario',
    'Perro de Presa Mallorquin',
    'Peruvian Hairless Dog',
    'Petit Basset Griffon Vendéen',
    'Petit Bleu de Gascogne',
    'Phalène',
    'Pharaoh Hound',
    'Phu Quoc ridgeback dog',
    'Picardy Spaniel',
    'Plott Hound',
    'Podenco Canario',
    'Pointer (dog breed)',
    'Polish Greyhound',
    'Polish Hound',
    'Polish Hunting Dog',
    'Polish Lowland Sheepdog',
    'Polish Tatra Sheepdog',
    'Pomeranian',
    'Pont-Audemer Spaniel',
    'Poodle',
    'Porcelaine',
    'Portuguese Podengo',
    'Portuguese Pointer',
    'Portuguese Water Dog',
    'Posavac Hound',
    'Pražský Krysařík',
    'Pudelpointer',
    'Pug',
    'Puli',
    'Pumi',
    'Pungsan Dog',
    'Pyrenean Mastiff',
    'Pyrenean Shepherd',
    'Rafeiro do Alentejo',
    'Rajapalayam',
    'Rampur Greyhound',
    'Rastreador Brasileiro',
    'Rat Terrier',
    'Ratonero Bodeguero Andaluz',
    'Redbone Coonhound',
    'Rhodesian Ridgeback',
    'Rottweiler',
    'Rough Collie',
    'Russell Terrier',
    'Russian Spaniel',
    'Russian tracker',
    'Russo-European Laika',
    'Sabueso Español',
    'Saint-Usuge Spaniel',
    'Sakhalin Husky',
    'Saluki',
    'Samoyed',
    'Sapsali',
    'Schapendoes',
    'Schillerstövare',
    'Schipperke',
    'Schweizer Laufhund',
    'Schweizerischer Niederlaufhund',
    'Scotch Collie',
    'Scottish Deerhound',
    'Scottish Terrier',
    'Sealyham Terrier',
    'Segugio Italiano',
    'Seppala Siberian Sleddog',
    'Serbian Hound',
    'Serbian Tricolour Hound',
    'Shar Pei',
    'Shetland Sheepdog',
    'Shiba Inu',
    'Shih Tzu',
    'Shikoku',
    'Shiloh Shepherd Dog',
    'Siberian Husky',
    'Silken Windhound',
    'Sinhala Hound',
    'Skye Terrier',
    'Sloughi',
    'Slovak Cuvac',
    'Slovakian Rough-haired Pointer',
    'Small Greek Domestic Dog',
    'Small Münsterländer',
    'Smooth Collie',
    'South Russian Ovcharka',
    'Southern Hound',
    'Spanish Mastiff',
    'Spanish Water Dog',
    'Spinone Italiano',
    'Sporting Lucas Terrier',
    'St. Bernard',
    "St. John's water dog",
    'Stabyhoun',
    'Staffordshire Bull Terrier',
    'Standard Schnauzer',
    'Stephens Cur',
    'Styrian Coarse-haired Hound',
    'Sussex Spaniel',
    'Swedish Lapphund',
    'Swedish Vallhund',
    'Tahltan Bear Dog',
    'Taigan',
    'Talbot',
    'Tamaskan Dog',
    'Teddy Roosevelt Terrier',
    'Telomian',
    'Tenterfield Terrier',
    'Thai Bangkaew Dog',
    'Thai Ridgeback',
    'Tibetan Mastiff',
    'Tibetan Spaniel',
    'Tibetan Terrier',
    'Tornjak',
    'Tosa',
    'Toy Bulldog',
    'Toy Fox Terrier',
    'Toy Manchester Terrier',
    'Toy Trawler Spaniel',
    'Transylvanian Hound',
    'Treeing Cur',
    'Treeing Walker Coonhound',
    'Trigg Hound',
    'Tweed Water Spaniel',
    'Tyrolean Hound',
    'Vizsla',
    'Volpino Italiano',
    'Weimaraner',
    'Welsh Sheepdog',
    'Welsh Springer Spaniel',
    'Welsh Terrier',
    'West Highland White Terrier',
    'West Siberian Laika',
    'Westphalian Dachsbracke',
    'Wetterhoun',
    'Whippet',
    'White Shepherd',
    'Wire Fox Terrier',
    'Wirehaired Pointing Griffon',
    'Wirehaired Vizsla',
    'Yorkshire Terrier',
    'Šarplaninac',
];
const catBreeds = [
    'Abyssinian',
    'Aegean',
    'American Curl',
    'American Bobtail',
    'American Shorthair',
    'American Wirehair',
    'Arabian Mau',
    'Australian Mist',
    'Asian',
    'Asian Semi-longhair',
    'Balinese',
    'Bambino',
    'Bengal',
    'Birman',
    'Bombay',
    'Brazilian Shorthair',
    'British Semi-longhair',
    'British Shorthair',
    'British Longhair',
    'Burmese',
    'Burmilla',
    'California Spangled',
    'Chantilly-Tiffany',
    'Chartreux',
    'Chausie',
    'Cheetoh',
    'Colorpoint Shorthair',
    'Cornish Rex',
    'Cymric',
    'Cyprus',
    'Devon Rex',
    'Donskoy',
    'Dragon Li',
    'Dwarf cat',
    'Egyptian Mau',
    'European Shorthair',
    'Exotic Shorthair',
    'Foldex',
    'German Rex',
    'Havana Brown',
    'Highlander',
    'Himalayan',
    'Japanese Bobtail',
    'Javanese',
    'Karelian Bobtail',
    'Khao Manee',
    'Korat',
    'Korean Bobtail',
    'Korn Ja',
    'Kurilian Bobtail',
    'LaPerm',
    'Lykoi',
    'Maine Coon',
    'Manx',
    'Mekong Bobtail',
    'Minskin',
    'Munchkin',
    'Nebelung',
    'Napoleon',
    'Norwegian Forest cat',
    'Ocicat',
    'Ojos Azules',
    'Oregon Rex',
    'Oriental Bicolor',
    'Oriental Shorthair',
    'Oriental Longhair',
    'PerFold',
    'Persian (Modern Persian Cat)',
    'Persian (Traditional Persian Cat)',
    'Peterbald',
    'Pixie-bob',
    'Raas',
    'Ragamuffin',
    'Ragdoll',
    'Russian Blue',
    'Russian White, Black and Tabby',
    'Sam Sawet',
    'Savannah',
    'Scottish Fold',
    'Selkirk Rex',
    'Serengeti',
    'Serrade petit',
    'Siamese',
    'Siberian',
    'Singapura',
    'Snowshoe',
    'Sokoke',
    'Somali',
    'Sphynx',
    'Suphalak',
    'Thai',
    'Thai Lilac',
    'Tonkinese',
    'Toyger',
    'Turkish Angora',
    'Turkish Van',
    'Ukrainian Levkoy',
];
const horseBreeds = [
    'American Albino',
    'Abaco Barb',
    'Abtenauer',
    'Abyssinian',
    'Aegidienberger',
    'Akhal-Teke',
    'Albanian Horse',
    'Altai Horse',
    'Altèr Real',
    'American Cream Draft',
    'American Indian Horse',
    'American Paint Horse',
    'American Quarter Horse',
    'American Saddlebred',
    'American Warmblood',
    'Andalusian Horse',
    'Andravida Horse',
    'Anglo-Arabian',
    'Anglo-Arabo-Sardo',
    'Anglo-Kabarda',
    'Appaloosa',
    'AraAppaloosa',
    'Arabian Horse',
    'Ardennes Horse',
    'Arenberg-Nordkirchen',
    'Argentine Criollo',
    'Asian wild Horse',
    'Assateague Horse',
    'Asturcón',
    'Augeron',
    'Australian Brumby',
    'Australian Draught Horse',
    'Australian Stock Horse',
    'Austrian Warmblood',
    'Auvergne Horse',
    'Auxois',
    'Azerbaijan Horse',
    'Azteca Horse',
    'Baise Horse',
    'Bale',
    'Balearic Horse',
    'Balikun Horse',
    'Baluchi Horse',
    'Banker Horse',
    'Barb Horse',
    'Bardigiano',
    'Bashkir Curly',
    'Basque Mountain Horse',
    'Bavarian Warmblood',
    'Belgian Half-blood',
    'Belgian Horse',
    'Belgian Warmblood ',
    'Bhutia Horse',
    'Black Forest Horse',
    'Blazer Horse',
    'Boerperd',
    'Borana',
    'Boulonnais Horse',
    'Brabant',
    'Brandenburger',
    'Brazilian Sport Horse',
    'Breton Horse',
    'Brumby',
    'Budyonny Horse',
    'Burguete Horse',
    'Burmese Horse',
    'Byelorussian Harness Horse',
    'Calabrese Horse',
    'Camargue Horse',
    'Camarillo White Horse',
    'Campeiro',
    'Campolina',
    'Canadian Horse',
    'Canadian Pacer',
    'Carolina Marsh Tacky',
    'Carthusian Horse',
    'Caspian Horse',
    'Castilian Horse',
    'Castillonnais',
    'Catria Horse',
    'Cavallo Romano della Maremma Laziale',
    'Cerbat Mustang',
    'Chickasaw Horse',
    'Chilean Corralero',
    'Choctaw Horse',
    'Cleveland Bay',
    'Clydesdale Horse',
    'Cob',
    'Coldblood Trotter',
    'Colonial Spanish Horse',
    'Colorado Ranger',
    'Comtois Horse',
    'Corsican Horse',
    'Costa Rican Saddle Horse',
    'Cretan Horse',
    'Criollo Horse',
    'Croatian Coldblood',
    'Cuban Criollo',
    'Cumberland Island Horse',
    'Curly Horse',
    'Czech Warmblood',
    'Daliboz',
    'Danish Warmblood',
    'Danube Delta Horse',
    'Dole Gudbrandsdal',
    'Don',
    'Dongola Horse',
    'Draft Trotter',
    'Dutch Harness Horse',
    'Dutch Heavy Draft',
    'Dutch Warmblood',
    'Dzungarian Horse',
    'East Bulgarian',
    'East Friesian Horse',
    'Estonian Draft',
    'Estonian Horse',
    'Falabella',
    'Faroese',
    'Finnhorse',
    'Fjord Horse',
    'Fleuve',
    'Florida Cracker Horse',
    'Foutanké',
    'Frederiksborg Horse',
    'Freiberger',
    'French Trotter',
    'Friesian Cross',
    'Friesian Horse',
    'Friesian Sporthorse',
    'Furioso-North Star',
    'Galiceño',
    'Galician Pony',
    'Gelderland Horse',
    'Georgian Grande Horse',
    'German Warmblood',
    'Giara Horse',
    'Gidran',
    'Groningen Horse',
    'Gypsy Horse',
    'Hackney Horse',
    'Haflinger',
    'Hanoverian Horse',
    'Heck Horse',
    'Heihe Horse',
    'Henson Horse',
    'Hequ Horse',
    'Hirzai',
    'Hispano-Bretón',
    'Holsteiner Horse',
    'Horro',
    'Hungarian Warmblood',
    'Icelandic Horse',
    'Iomud',
    'Irish Draught',
    'Irish Sport Horse sometimes called Irish Hunter',
    'Italian Heavy Draft',
    'Italian Trotter',
    'Jaca Navarra',
    'Jeju Horse',
    'Jutland Horse',
    'Kabarda Horse',
    'Kafa',
    'Kaimanawa Horses',
    'Kalmyk Horse',
    'Karabair',
    'Karabakh Horse',
    'Karachai Horse',
    'Karossier',
    'Kathiawari',
    'Kazakh Horse',
    'Kentucky Mountain Saddle Horse',
    'Kiger Mustang',
    'Kinsky Horse',
    'Kisber Felver',
    'Kiso Horse',
    'Kladruber',
    'Knabstrupper',
    'Konik',
    'Kundudo',
    'Kustanair',
    'Kyrgyz Horse',
    'Latvian Horse',
    'Lipizzan',
    'Lithuanian Heavy Draught',
    'Lokai',
    'Losino Horse',
    'Lusitano',
    'Lyngshest',
    "M'Bayar",
    "M'Par",
    'Mallorquín',
    'Malopolski',
    'Mangalarga',
    'Mangalarga Marchador',
    'Maremmano',
    'Marismeño Horse',
    'Marsh Tacky',
    'Marwari Horse',
    'Mecklenburger',
    'Međimurje Horse',
    'Menorquín',
    'Mérens Horse',
    'Messara Horse',
    'Metis Trotter',
    'Mezőhegyesi Sport Horse',
    'Miniature Horse',
    'Misaki Horse',
    'Missouri Fox Trotter',
    'Monchina',
    'Mongolian Horse',
    'Mongolian Wild Horse',
    'Monterufolino',
    'Morab',
    'Morgan Horse',
    'Mountain Pleasure Horse',
    'Moyle Horse',
    'Murakoz Horse',
    'Murgese',
    'Mustang Horse',
    'Namib Desert Horse',
    'Nangchen Horse',
    'National Show Horse',
    'Nez Perce Horse',
    'Nivernais Horse',
    'Nokota Horse',
    'Noma',
    'Nonius Horse',
    'Nooitgedachter',
    'Nordlandshest',
    'Noriker Horse',
    'Norman Cob',
    'North American Single-Footer Horse',
    'North Swedish Horse',
    'Norwegian Coldblood Trotter',
    'Norwegian Fjord',
    'Novokirghiz',
    'Oberlander Horse',
    'Ogaden',
    'Oldenburg Horse',
    'Orlov trotter',
    'Ostfriesen',
    'Paint',
    'Pampa Horse',
    'Paso Fino',
    'Pentro Horse',
    'Percheron',
    'Persano Horse',
    'Peruvian Paso',
    'Pintabian',
    'Pleven Horse',
    'Poitevin Horse',
    'Posavac Horse',
    'Pottok',
    'Pryor Mountain Mustang',
    "Przewalski's Horse",
    'Pura Raza Española',
    'Purosangue Orientale',
    'Qatgani',
    'Quarab',
    'Quarter Horse',
    'Racking Horse',
    'Retuerta Horse',
    'Rhenish German Coldblood',
    'Rhinelander Horse',
    'Riwoche Horse',
    'Rocky Mountain Horse',
    'Romanian Sporthorse',
    'Rottaler',
    'Russian Don',
    'Russian Heavy Draft',
    'Russian Trotter',
    'Saddlebred',
    'Salerno Horse',
    'Samolaco Horse',
    'San Fratello Horse',
    'Sarcidano Horse',
    'Sardinian Anglo-Arab',
    'Schleswig Coldblood',
    'Schwarzwälder Kaltblut',
    'Selale',
    'Sella Italiano',
    'Selle Français',
    'Shagya Arabian',
    'Shan Horse',
    'Shire Horse',
    'Siciliano Indigeno',
    'Silesian Horse',
    'Sokolsky Horse',
    'Sorraia',
    'South German Coldblood',
    'Soviet Heavy Draft',
    'Spanish Anglo-Arab',
    'Spanish Barb',
    'Spanish Jennet Horse',
    'Spanish Mustang',
    'Spanish Tarpan',
    'Spanish-Norman Horse',
    'Spiti Horse',
    'Spotted Saddle Horse',
    'Standardbred Horse',
    'Suffolk Punch',
    'Swedish Ardennes',
    'Swedish coldblood trotter',
    'Swedish Warmblood',
    'Swiss Warmblood',
    'Taishū Horse',
    'Takhi',
    'Tawleed',
    'Tchernomor',
    'Tennessee Walking Horse',
    'Tersk Horse',
    'Thoroughbred',
    'Tiger Horse',
    'Tinker Horse',
    'Tolfetano',
    'Tori Horse',
    'Trait Du Nord',
    'Trakehner',
    'Tsushima',
    'Tuigpaard',
    'Ukrainian Riding Horse',
    'Unmol Horse',
    'Uzunyayla',
    'Ventasso Horse',
    'Virginia Highlander',
    'Vlaamperd',
    'Vladimir Heavy Draft',
    'Vyatka',
    'Waler',
    'Waler Horse',
    'Walkaloosa',
    'Warlander',
    'Warmblood',
    'Welsh Cob',
    'Westphalian Horse',
    'Wielkopolski',
    'Württemberger',
    'Xilingol Horse',
    'Yakutian Horse',
    'Yili Horse',
    'Yonaguni Horse',
    'Zaniskari',
    'Žemaitukas',
    'Zhemaichu',
    'Zweibrücker',
];
export { dogBreeds, catBreeds, horseBreeds };
