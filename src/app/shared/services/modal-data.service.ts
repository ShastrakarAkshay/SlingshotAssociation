import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalDataService {

  public MEMBERS: any[] = [
    {
      name: 'Mr. Bipin Chaudhari',
      role: 'President',
      email: 'xyz@gmail.com',
      mobile: '9404141861',
      class: 'active',
      pic: './assets/images/members/bipin-chaudhari.jpg'
    },
    {
      name: 'Mr. Lalit Dhoke',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '9588430982',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Manikraj Landge',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '9004409664',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Vikas Shelke',
      role: 'General Secretory',
      email: 'vikasshelke313918@gmail.com',
      mobile: '8432146555',
      class: '',
      pic: './assets/images/members/vikas-shelke.jpg'
    },
    {
      name: 'Mr. Sham Khemaskar',
      role: 'Treasurer',
      email: 'xyz@gmail.com',
      mobile: '9823545618',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Pravin Dighade',
      role: 'Join Secretory',
      email: 'xyz@gmail.com',
      mobile: '8830993120',
      class: '',
      pic: './assets/images/members/pravin-dighade.jpg'
    },
    {
      name: 'Mr. Suraj Kadukar',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '9370155501',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Sunil Shinde',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '8888424233',
      class: '',
      pic: './assets/images/members/sunil-shinde.jpg'
    },
    {
      name: 'Mr. Giriraj Gupta',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '9049228777',
      class: '',
      pic: './assets/images/members/giriraj-gupta.jpg'
    },
    {
      name: 'Miss. Snehal Khantade',
      role: 'Member',
      email: 'xyz@gmail.com',
      mobile: '9552822470',
      class: '',
      pic: './assets/images/members/snehal-khantade.jpg'
    },
    {
      name: 'Mr. Praful Kodape',
      role: 'Member',
      email: 'xyz@gmail.com',
      mobile: '9673398819',
      class: '',
      pic: './assets/images/user-pic-default.png'
    }
  ];

  public CATEGORIES: any[] = [
    {
      categoryName: 'Category 1',
      categoryTitle: 'Sub-Junior',
      distance: '10 Feet',
      age: '(Under 10Yr Age)'
    },
    {
      categoryName: 'Category 2',
      categoryTitle: 'Teenager',
      distance: '15 Feet',
      age: '(11Yr - 14Yr Age)'
    },
    {
      categoryName: 'Category 3',
      categoryTitle: 'Junior',
      distance: '20 Feet',
      age: '(15Yr - 18Yr Age)'
    },
    {
      categoryName: 'Category 4',
      categoryTitle: 'Senior',
      distance: '30 Feet',
      age: '(18Yr+ Age)'
    },
    {
      categoryName: 'Category 5',
      categoryTitle: 'Master',
      distance: '30 Feet',
      age: '(35Yr+ Age)'
    }
  ];

  public RULES: any[] = [
    'स्पर्धकाने शुट लाईनच्या मागे उभे राहणे अनिवार्य आहे, अन्यथा त्या स्पर्धकाला स्पर्धेतून बाहेर करण्यात येईल.',
    'जर एखाद्या प्रवर्गात स्पर्धा नसेल तर त्या स्पर्धकाला सहभागी प्रमाणपत्र देण्यात येईल किंवा त्याला पुढील स्पर्धेसाठी पाठवण्यात येईल.',
    'प्रत्येक फेरीमध्ये स्पर्धकाला 5 मिनिटांचा वेळ दिला जाईल, त्या वेळेत त्यांना दहा गोट्या लक्ष्यावर माराव्या लागतील.',
    'जर दोन किंवा त्यापेक्षा अधिक स्पर्धकांना सारखे गुण मिळाले असतील आणि पंचांना निर्णय घेणे होत नसेल तर तिसरी फेरी घेतल्या जाईल किंवा कमी वयाच्या स्पर्धकाला विजेसेपद दिल्या जाईल.',
    'सर्व स्पर्धकांनी स्वतःच्या सुरक्षिततेसाठी ग्लासेस आणि विचलित करणारे आवाज नियंत्रक साधन सोबत आणने अनिवार्य आहे.',
    'एक फेरी ही 5 मिनिटांची असेल, जेव्हा वेळ निरीक्षक गोळीबार करून अथवा शिट्टी वाजवून जाहीर करेल तेव्हा सुरुवात होईल.',
    'तांत्रिक समिती (पंच) या समितीमध्ये पाच सदस्य असतील, त्यामध्ये 1 न्यायाधीश, 1 वेळ निरीक्षक, 1 रेषा निरीक्षक व 2 निरिक्षक असतील.',
    'फेरीच्या वेळी लक्षाला काही नुकसान झाल्यास आवश्यक असेल तर पंच तांत्रिक समिती निर्णय घेऊन लक्ष बदलवून दुसरे लक्ष्य लावुन ती फेरी त्याच वेळेपासून व पाच गुणांपासून चालू करण्यात येईल.',
    'गरज भासल्यास तांत्रिक समितीला दुसरी फेरी घेता येईल.',
    'लक्ष्यावर दिलेल्या मर्यादेपेक्षा जास्त मारा केल्यास गुणांसाठी वैध योग्य लक्षवेध आत मोजल्या जातील.',
    // 'समजा एखाद्या स्पर्धकाने 5 मिनिटांमध्ये 15 लक्ष्यवेध केलेत, या 15 लक्ष्यवेधांमध्ये 3 गुणांच्या वर्तुळात 3, 4 गुणांच्या वर्तुळात 3, 5 गुणांच्या वर्तुळात 1 व 8,9,10 गुणांच्या वर्तुळात प्रत्येकी 2 लक्ष्यवेध केले असेल तर अशा प्रसंगात अंतिम गुण मोजताना 3,4,5,6 या गुणांच्या वर्तुळातील वेध व 8 गुणांच्या वर्तुळातील कुठलाही एक वेध मोजले जातील आणि त्यानुसार स्पर्धकांचे गुण ठरविल्या जातील.'
  ];

  public COMMITTEE = {
    AFFILIATION_COMMITTEE: [
      {name:'Mr. Bipin Anil Chaudhari', mobile:'-'},
      {name:'Mr. Vikas Vinod Shelke', mobile:'-'},
      {name:'Mr. Manikraj Landage', mobile:'-'},
      {name:'Mr. Shyam Digambar Khemaskar', mobile:'-'},
      {name:'Mr. Sunil Bhagwan Shinde', mobile:'-'},
      {name:'Miss. Snehal Yogiraj Khantade', mobile:'-'}
    ],
    TOURNAMENT_TECHNICAL_COMMITTEE: [
      {name:'Mr. Manikraj Landage', mobile:'-'},
      {name:'Mr. Suraj Prakashrao Kadukar', mobile:'-'},
      {name:'Mr. Giriraj Ganesh Gupta', mobile:'-'},
      {name:'Mr. Tanshu Sanjiv Jhasi', mobile:'-'},
      {name:'Miss. Preksha Balkrushna Shetti', mobile:'-'},
      {name:'Miss. Srushti Vinod Gupta', mobile:'-'},
      {name:'Mr. Suraj Kanojiya', mobile:'-'}
    ],
    TOURNAMENT_ORGANIZER_COMMITTEE: [
      {name:'Mr. Sunil Bhagwan Shinde', mobile:'-'},
      {name:'Mr. Padmakar Kamble', mobile:'-'},
      {name:'Mr. Akash Upadhe', mobile:'-'},
      {name:'Mr. Mayur Santosh Meshram', mobile:'-'},
      {name:'Miss. Sayali Sunil Shinde', mobile:'-'},
      {name:'Mr. Sunil Kalabante', mobile:'-'},
      {name:'Mr. Rushikesh Uttamrao Bansod', mobile:'-'}
    ],
    SELECTION_COMMITTEE: [
      {name:'Mr. Shyam Digambar Khemaskar', mobile:'-'},
      {name:'Mr. Lalit Dhoke', mobile:''},
      {name:'Miss. Snehal Yogiraj Khantade', mobile:'-'},
      {name:'Miss. Samiksha Raju Patil', mobile:'-'},
      {name:'Mr. Tushar tanaji Durge', mobile:'-'},
      {name:'Mr. Rakesh Dattuji Chapattiwar', mobile:'-'},
      {name:'Mr. Ashvin Siddham Shettiwar', mobile:'-'},
      {name:'Mr. Saurabh Ramteke', mobile:'-'},
      {name:'Miss. Poonam R. Digambar', mobile:'-'}
    ],
    OFFICIAL_REFEREE: [
      {name:'Miss. Akansha Raju Patil', mobile:''},
      {name:'Miss. Minal Gajan Nagrale', mobile:''},
      {name:'Mr. Mayur Santosh Meshram', mobile:''},
      {name:'Mr. Prajwal Lalit Dhoke', mobile:''},
      {name:'Miss. Sayali Sanjay Savadh', mobile:''},
      {name:'Miss. Riya manoj Godale', mobile:''},
      {name:'Mr. Abhishek Joshi', mobile:''},
      {name:'Miss. Kiran Kabdi', mobile:''},
      {name:'Mr. Dinesh Soyade', mobile:''},
      {name:'Mr. Ishu Shittewar', mobile:''},
    ]
  }

  constructor() { }

  getAssociationMembers(): any {
    return this.MEMBERS;
  }

  getSlingshotCategories(): any {
    return this.CATEGORIES;
  }

  getSlingshotRules(): any {
    return this.RULES;
  }

  getAllCommitte(): any {
    return this.COMMITTEE;
  }
}
