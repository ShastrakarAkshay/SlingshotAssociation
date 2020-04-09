import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slingshot',
  templateUrl: './slingshot.component.html',
  styleUrls: ['./slingshot.component.scss']
})
export class SlingshotComponent implements OnInit {

  private categories: any[] = [
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
      age: '(10Yr - 14Yr Age)'
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
      age: '(18Yr Age)'
    },
    {
      categoryName: 'Category 5',
      categoryTitle: 'Master',
      distance: '30 Feet',
      age: '(35Yr Age)'
    }
  ];

  private rules: any[] = [
    'स्पर्धकाने शुट लाईनच्या मागे उभे राहणे अनिवार्य आहे, अन्यथा त्या स्पर्धकाला स्पर्धेतून बाहेर करण्यात येईल.',
    'जर एखाद्या प्रवर्गात स्पर्धा नसेल तर त्या स्पर्धकाला सहभागी प्रमाणपत्र देण्यात येईल किंवा त्याला पुढील स्पर्धेसाठी पाठवण्यात येईल.',
    'प्रत्येक फेरीमध्ये स्पर्धकाला 5 मिनिटांचा वेळ दिला जाईल, त्या वेळेत त्यांना दहा गोट्या लक्ष्यावर माराव्या लागतील.',
    'जर दोन किंवा त्यापेक्षा अधिक स्पर्धकांना सारखे गुण मिळाले असतील आणि पंचांना निर्णय घेणे होत नसेल तर तिसरी फेरी घेतल्या जाईल किंवा कमी वयाच्या स्पर्धकाला विजेसेपद दिल्या जाईल.',
    'सर्व स्पर्धकांनी स्वतःच्या सुरक्षिततेसाठी ग्लासेस आणि विचलित करणारे आवाज नियंत्रक साधन सोबत आणने अनिवार्य आहे.',
    'एक फेरी ही 5 मिनिटांची असेल, जेव्हा वेळ निरीक्षक गोळीबार करून अथवा शिट्टी वाजवून जाहीर करेल तेव्हा सुरुवात होईल.',
    'तांत्रिक समिती (पंच) या समितीमध्ये पाच सदस्य असतील, त्यामध्ये 1 न्यायाधीश, 1 वेळ निरीक्षक, 1 रेषा निरीक्षक व 2 निरिक्षक असतील.',
    'फेरीच्या वेळी लक्षाला काही नुकसान झाल्यास आवश्यक असेल तर पंच तांत्रिक समिती निर्णय घेऊन लक्ष बदलवून दुसरे लक्ष्य लावुन ती फेरी त्याच वेळेपासून व पाच गुणांपासून चालू करण्यात येईल.',
    'गरज भासल्यास तांत्रिक समितीला दुसरी फेरी घेता येईल.',
    'लक्ष्यावर दिलेल्या मर्यादेपेक्षा जास्त मारा केल्यास गुणांसाठी वैध योग्य लक्षवेध आत मोजल्या जातील.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
