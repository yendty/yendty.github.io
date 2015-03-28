// Bio
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span class="orange-text">%data%</span><div class="line"></div>';

var HTMLcontactGeneric = '<div class="col"><ul id="topContacts"></ul></div>';
var HTMLmobile = '<li class="li-size"><span class="violet-text fa fa-tablet width18"/> <span class="white-text text-size">%data%</span></li>';
var HTMLemail = '<li class="li-size"><span class="violet-text fa fa-envelope width18"/> <span class="white-text text-size">%data%</span></li>';
var HTMLgithub = '<li class="li-size"><span class="violet-text fa fa-github width18"/> <span class="white-text text-size">%data%</span></li>';
var HTMLlocation = '<li class="li-size"><span class="violet-text fa fa-location-arrow width18"/> <span class="white-text text-size">%data%</span></li>';

var HTMLskillsStart = '<div class="col text-align"><h3><span class="fa fa-code"/> Compétences</h3><ul id="skills"></ul></div>';
var HTMLskills = '<li class="li-size"><span class="white-text text-size">%data%</span></li>';

var HTMLbioPic = '<div class="col show"><img src="%data%" class="biopic"></div>';

var bio = {
	name: "Thu Yen DO",
	role: "Ingénieur d'études et développement",
	contacts: {
		mobile: "06 14 58 88 19",
		email: "yendty <i class='fa fa-at' /> yahoo point com",
        github: "yendty.github.io",
		location: "Toulouse"
	},
	skills: ["Delphi", "C++", "C#", "Java"],
	pic: "images/270.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var header = $("header");
header.append(formattedName).append(formattedRole);

header.append('<div class="row"></div>');
var row = $('.row');
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
row.append(HTMLcontactGeneric);
$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
    .append(formattedGithub)
	.append(formattedLocation);

var formattedSkillsStart = HTMLskillsStart;
if (bio.skills.length > 0) {
	row.append(formattedSkillsStart);
	bio.skills.forEach(function (skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

row.append(HTMLbioPic.replace("%data%", bio["pic"]));


// Formations
var schools = [
    {
        name: "Valtech training -- L'essentiel de C++ et la conception objet",
        url: "http://www.valtech-training.fr/formation/developpement-java-cpp/cpp/",
        date: "2012 (5 jours)",
        city: "Toulouse",
        desc: "Formation"
    },
    {
        name: "Université Toulouse III Paul Sabatier -- Master M2 Pro",
        url: "http://www.univ-tlse3.fr/",
        date: "2005 - 2006",
        city: "Toulouse",
        desc: "Domaine: Génie Logiciel et Répartition"
    },
    {
        name: "Université Toulouse III Paul Sabatier -- Master M1",
        url: "http://www.univ-tlse3.fr/",
        date: "2004 - 2005",
        city: "Toulouse",
        desc: "Domaine: Sciences de la Modélisation, de l'Information et des Systèmes Informatiques"
    }
];
var HTMLschoolStart = '<div class="school-start"></div>';
var HTMLschoolName = '<a class="darkviolet-text" href="%href%" target="_blank">%data%</a>';
var HTMLschoolDate = '<div><div class="gray-text left">%data%</div>';
var HTMLschoolCity = '<div class="gray-text right">%data%</div></div>';
var HTMLschoolDesc = '<p class="clear">%data%</p><br>';
schools.forEach(function (item) {
    $('#schools').append(HTMLschoolStart);
    $('.school-start:last')
        .append(HTMLschoolName.replace('%data%', item.name).replace('%href%', item.url))
        .append(HTMLschoolDate.replace('%data%', item.date) + HTMLschoolCity.replace('%data%', item.city))
        .append(HTMLschoolDesc.replace('%data%', item.desc));
});


// Expériences
var works = [
    {
        name: "SAS DETRACOM - Responsable de développement Delphi",
        url: "http://www.detracom.fr/fr/",
        date: "06/2007 - 12/2013 (6 ans)", 
        city: "Toulouse",
        desc: [
            {
                name: "DETRACOM est spécialisé sur le marché de la radiocommunication professionnelle et privée",
                points: []
            }, 
            {
                name: "Réalisations",
                points: ["En charge de développement des logiciels de personnalisation des produits DETRACOM (terminaux mobiles, infrastructures, portatifs, faisceaux Hertziens)",
                         "Recueil des besoins auprès du Service d'Aide aux Clients",
                         "Réalisation des maquettes",
                         "Maintenance des logiciels",
                         "Rédaction de documents de tests et réalisation de tests",
                         "Migration des logiciels de configuration DETRANET™ vers Delphi XE pour l'intégration multilingue",
                         "Intégration des logiciels de personnalisation au serveur de gestion de projet (TRAC)",
                         "Participation à la conception et à la réalisation de la maquette du logiciel de supervision des faisceaux Hertziens (FH)"
                        ]
            },
            {
                name: "Environnement",
                points: ["<span class='bold'>Delphi</span>, MS Access, ISTool Setup, TortoiseSVN, Dxgettext, Poedit"]
            },
        ]
    },
    {
        name: "CESR/CNRS - Ingénieur d'études C++",
        url: "http://www.irap.omp.eu/",
        date: "12/2006 - 05/2007 (6 mois)",
        city: "Toulouse",
        desc: [
            {
                name: "CESR est un laboratoire du Centre national de la recherche scientifique",
                points: []
            }, 
            {
                name: "Réalisations",
                points: ["Participation à la conception et à la réalisation du logiciel de contrôle « PILOT » (<span class='italic'>Polarised Instrument for Long wave-lengh Observation of the Tenuous interstellar medium</span>), une expérience embarquée dans un ballon stratosphérique",
                        ]
            },
            {
                name: "Environnement",
                points: ["<span class='bold'>C++</span>, PHP, réseau TCP/IP, Red Hat"]
            },
        ]
    },
    {
        name: "CESR/CNRS - Stagiaire",
        url: "http://www.irap.omp.eu/",
        date: "11/2005 - 06/2006 (8 mois)",
        city: "Toulouse",
        desc: [
            {
                name: "Réalisations",
                points: ["Evaluation des outils de modélisation UML pour la génération de code et la documentation",
                         "Etude de la documentation spécifique d'un boîtier électronique pour réaliser un logiciel simulant ce boîtier",
                         "Analyse et étude du logiciel de contrôle « PILOT », une expérience embarquée dans un ballon stratosphérique"
                        ]
            },
            {
                name: "Environnement",
                points: ["Borland <span class='bold'>C++</span>, Serveur Apache, PHP, réseau TCP/IP, Rhapsody <span class='bold'>UML</span>"]
            },
        ]
    }
];
var HTMLworkStart = '<div class="work-start"></div>';
var HTMLworkName = '<a class="darkviolet-text" href="%href%" target="_blank">%data%</a>';
var HTMLworkDate = '<div><div class="gray-text left">%data%</div>';
var HTMLworkCity = '<div class="gray-text right">%data%</div></div>';
var HTMLworkDesc = '<p class="clear darkviolet-text">%data%</p>';
var HTMLworkPointStart = '<ul class="point-start fa-ul"></ul></div>';
var HTMLworkPoint = '<li><i class="fa-li fa fa-arrow-circle-o-right"/>%data%</li>';
works.forEach(function (item) {
    $('#works').append(HTMLworkStart);
    var lastWork = $('.work-start:last');
    lastWork
        .append(HTMLworkName.replace('%data%', item.name).replace('%href%', item.url))
        .append(HTMLworkDate.replace('%data%', item.date) + HTMLworkCity.replace('%data%', item.city));    
    item.desc.forEach(function (desc) {
        lastWork
            .append(HTMLworkDesc.replace('%data%', desc.name))
            .append(HTMLworkPointStart);
        desc.points.forEach(function (p) {
            $('.point-start:last').append(HTMLworkPoint.replace('%data%', p));
        });
    });
    lastWork.append('<br/>');
});


// Compétences
var coms = [
    {
        key: "Systèmes",
        val: "Windows, Linux/Unix"
    },
    {
        key: "Langages de programmation",
        val: "<span class='bold'>Delphi</span>, <span class='bold'>C++</span>, C#, Java, SQL, PHP"
    },
    {
        key: "Réseaux",
        val: "TCP/IP"
    },
    {
        key: "IDE",
        val: "<span class='bold'>Delphi XE</span>, Eclipse, Visual Studio (2010)"
    },
    {
        key: "Bases de données",
        val: "<span class='bold'>MS Access, Firebird</span>, SQL Server"
    }, 
    {
        key: "Outils",
        val: "TRAC, PortMon, Wireshark, TortoiseSVN, PowerDesigner"
    },
];
var HTMLcomStart = '<ul class="com-start fa-ul"></ul></div>';
var HTMLcomKey = '<li><i class="fa-li fa fa-star-half-o darkviolet-text"/><span class="darkviolet-text">%key% : </span>';
var HTMLcomVal = '%value%</li>';
coms.forEach(function (item) {
    $('#coms').append(HTMLcomStart);
    $('.com-start:last').append(HTMLcomKey.replace('%key%', item.key) + HTMLcomVal.replace('%value%', item.val));
});


// Divers
var divers = ["<i class='fa fa-bicycle darkviolet-text'/> vélo", 
              "badminton",               
              "<i class='fa fa-music darkviolet-text'/> musique", 
              "<i class='fa fa-film darkviolet-text'/> cinéma", 
              "<i class='fa fa-book darkviolet-text'/> lecture",
              "<i class='fa fa-plane darkviolet-text'/> voyages", 
             ];
var HTMLdiversStart = '<ul class="divers-start fa-ul"></ul></div>';
var HTMLdivers = '<li><i class="fa-li fa fa-dot-circle-o"/>%data%</li>';
$('#divers').append(HTMLdiversStart);
divers.forEach(function (item) {
    $('.divers-start:last').append(HTMLdivers.replace('%data%', item));
});
